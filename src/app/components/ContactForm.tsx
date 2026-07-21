import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, Phone, MessageSquare, CheckCircle, AlertCircle, Upload, FileText, X } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (Gmail, Outlook, etc.) and copy the Service ID below
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
//    Set the "To Email" in the template to: sekar@goodluck.agency
// 4. Copy your Public Key from Account > API Keys
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEF123ghiJKL'

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  file?: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const validateName = (name: string) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
  };

  const validatePhone = (phone: string) => {
    if (!phone) return undefined;
    const clean = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[\d]+$/.test(clean)) return 'Phone number can only contain numbers and +';
    const digits = clean.replace(/\+/g, '');
    if (digits.length < 8) return 'Phone number must be at least 8 digits';
    if (digits.length > 15) return 'Phone number cannot exceed 15 digits';
  };

  const validateSubject = (subject: string) => {
    if (!subject) return 'Please select a subject';
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
  };

  const validateFile = (f: File | null) => {
    if (!f) return undefined;
    if (f.size > MAX_FILE_SIZE) return 'File size must be less than 5MB';
    if (!ALLOWED_FILE_TYPES.includes(f.type)) {
      const ext = '.' + f.name.split('.').pop()?.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) return 'Only PDF and Word documents (.pdf, .doc, .docx) are allowed';
    }
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':    return validateName(value);
      case 'email':   return validateEmail(value);
      case 'phone':   return validatePhone(value);
      case 'subject': return validateSubject(value);
      case 'message': return validateMessage(value);
    }
  };

  const validateAll = (): boolean => {
    const errors: ValidationErrors = {};
    const nameErr    = validateName(formData.name);
    const emailErr   = validateEmail(formData.email);
    const phoneErr   = validatePhone(formData.phone);
    const subjectErr = validateSubject(formData.subject);
    const messageErr = validateMessage(formData.message);
    const fileErr    = validateFile(file);
    if (nameErr)    errors.name    = nameErr;
    if (emailErr)   errors.email   = emailErr;
    if (phoneErr)   errors.phone   = phoneErr;
    if (subjectErr) errors.subject = subjectErr;
    if (messageErr) errors.message = messageErr;
    if (fileErr)    errors.file    = fileErr;
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touchedFields.has(name)) {
      const error = validateField(name, value);
      setValidationErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouchedFields(prev => new Set(prev).add(name));
    setValidationErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (f) {
      const error = validateFile(f);
      if (error) {
        setValidationErrors(prev => ({ ...prev, file: error }));
        setFile(null);
        e.target.value = '';
      } else {
        setFile(f);
        setValidationErrors(prev => ({ ...prev, file: undefined }));
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setValidationErrors(prev => ({ ...prev, file: undefined }));
    const input = document.getElementById('file') as HTMLInputElement;
    if (input) input.value = '';
  };

  // Convert file to base64 for EmailJS attachment
  const fileToBase64 = (f: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(f);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouchedFields(new Set(['name', 'email', 'phone', 'subject', 'message']));
    if (!validateAll()) {
      setStatus('error');
      setErrorMessage('Please fix the errors in the form before submitting');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const templateParams: Record<string, string> = {
        to_email:  'sekar@goodluck.agency',
        from_name: formData.name,
        from_email: formData.email,
        phone:     formData.phone || 'Not provided',
        subject:   formData.subject,
        message:   formData.message,
        reply_to:  formData.email,
      };

      // Attach resume as base64 if provided
      if (file) {
        const base64 = await fileToBase64(file);
        templateParams.attachment_name    = file.name;
        templateParams.attachment_content = base64;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFile(null);
      setValidationErrors({});
      setTouchedFields(new Set());
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: unknown) {
      setStatus('error');
      const isNotConfigured =
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY';
      if (isNotConfigured) {
        setErrorMessage(
          'EmailJS is not configured yet. Please set up your Service ID, Template ID, and Public Key. See the instructions in ContactForm.tsx.'
        );
      } else {
        setErrorMessage('Failed to send message. Please try again or email us directly at sekar@goodluck.agency');
      }
      console.error('EmailJS error:', err);
    }
  };

  const getFieldError = (field: string) =>
    (touchedFields.has(field) || field === 'file') ? validationErrors[field as keyof ValidationErrors] : undefined;

  const hasFieldError = (field: string) =>
    (touchedFields.has(field) || field === 'file') && !!validationErrors[field as keyof ValidationErrors];

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024, sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600 text-lg">
          Send us a message and we'll get back to you shortly
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-900">Message sent successfully!</p>
            <p className="text-sm text-green-700">We'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900">Failed to send message</p>
            <p className="text-sm text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <User className={`w-5 h-5 ${hasFieldError('name') ? 'text-red-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} onBlur={handleBlur}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${hasFieldError('name') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'}`}
                placeholder="John Doe"
              />
            </div>
            {getFieldError('name') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('name')}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Mail className={`w-5 h-5 ${hasFieldError('email') ? 'text-red-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} onBlur={handleBlur}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${hasFieldError('email') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'}`}
                placeholder="john@example.com"
              />
            </div>
            {getFieldError('email') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('email')}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Phone className={`w-5 h-5 ${hasFieldError('phone') ? 'text-red-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="tel" id="phone" name="phone"
                value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${hasFieldError('phone') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'}`}
                placeholder="+65 1234 5678"
              />
            </div>
            {getFieldError('phone') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('phone')}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <MessageSquare className={`w-5 h-5 ${hasFieldError('subject') ? 'text-red-500' : 'text-gray-400'}`} />
              </div>
              <select
                id="subject" name="subject"
                value={formData.subject} onChange={handleChange} onBlur={handleBlur}
                className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all appearance-none bg-white ${hasFieldError('subject') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'}`}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Hiring Request">Hiring Request</option>
                <option value="Job Application">Job Application</option>
                <option value="Partnership">Partnership Opportunity</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {getFieldError('subject') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('subject')}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange} onBlur={handleBlur}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-none ${hasFieldError('message') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'}`}
            placeholder="Tell us about your requirements..."
          />
          {getFieldError('message') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('message')}</p>}
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-semibold text-gray-700 mb-2">Attach Resume (Optional)</label>
          {!file ? (
            <div>
              <label
                htmlFor="file"
                className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 hover:bg-red-50 transition-all"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Click to upload resume</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </label>
              <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button type="button" onClick={handleRemoveFile} className="p-1.5 hover:bg-red-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500 hover:text-red-600" />
              </button>
            </div>
          )}
          {getFieldError('file') && <p className="mt-1.5 text-sm text-red-600">{getFieldError('file')}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-8 py-4 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Button } from '../ui/Button'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', email: '', subject: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please write a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Your message should be at least 10 characters.'
  }
  return errors
}

/**
 * Frontend-only contact form for the MVP.
 * IMPORTANT: submission is a clearly-marked placeholder — no backend/
 * email service is connected, so no real message is sent.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sentName, setSentName] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSentName(form.name.trim())
    setForm(initial)
    setSubmitted(true)
  }

  const fieldBase =
    'w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none'
  const fieldInvalid = 'border-red-500'
  const fieldValid = 'border-navy/20 focus:border-accent'
  const labelCls = 'mb-1.5 block text-sm font-semibold text-navy'

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-navy">Send us a message</h3>
      <p className="mt-1 text-sm text-muted">
        We&apos;ll get back to you. This demo form does not send real messages yet.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelCls}>
              Name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`${fieldBase} ${errors.name ? fieldInvalid : fieldValid}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
            />
            {errors.name && (
              <p id="cf-name-error" className="mt-1 text-xs font-medium text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="cf-email" className={labelCls}>
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`${fieldBase} ${errors.email ? fieldInvalid : fieldValid}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'cf-email-error' : undefined}
            />
            {errors.email && (
              <p id="cf-email-error" className="mt-1 text-xs font-medium text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="cf-subject" className={labelCls}>
            Subject
          </label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className={`${fieldBase} ${errors.subject ? fieldInvalid : fieldValid}`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'cf-subject-error' : undefined}
          />
          {errors.subject && (
            <p id="cf-subject-error" className="mt-1 text-xs font-medium text-red-600" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-message" className={labelCls}>
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help…"
            className={`${fieldBase} resize-y ${errors.message ? fieldInvalid : fieldValid}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'cf-message-error' : undefined}
          />
          {errors.message && (
            <p id="cf-message-error" className="mt-1 text-xs font-medium text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <Button type="submit" variant="accent" size="lg">
            Send Message
          </Button>
        </div>

        {submitted && (
          <div
            role="status"
            className="rounded-lg border border-accent/40 bg-accent-soft px-4 py-3 text-sm font-medium text-navy"
          >
            Thanks{sentName ? `, ${sentName}` : ''}! Your message has been received (demo preview). No real email was
            sent — a live submission service will be connected before launch.
          </div>
        )}
      </form>
    </div>
  )
}
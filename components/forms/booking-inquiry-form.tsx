"use client";

import { FormEvent, useState } from 'react';
import { site } from '@/data/site';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function BookingInquiryForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('loading');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedBody = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        encodedBody.append(key, value);
      }
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedBody.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitState('success');
    } catch (error) {
      console.error('Booking inquiry submit error:', error);
      setSubmitState('error');
    }
  }

  return (
    <>
      <form name="booking-inquiry" method="POST" onSubmit={handleSubmit} className="form-stack" noValidate>
        <input type="hidden" name="form-name" value="booking-inquiry" />
        <p hidden>
          <label htmlFor="bot-field">
            Ne popunjavaj: <input id="bot-field" name="bot-field" />
          </label>
        </p>

        <div className="form-field">
          <label htmlFor="name">Ime i prezime</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" autoComplete="tel" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>

        <div className="form-field">
          <label htmlFor="service">Usluga</label>
          <input id="service" name="service" />
        </div>

        <div className="form-field">
          <label htmlFor="eventDate">Datum događaja</label>
          <input id="eventDate" name="eventDate" type="date" />
        </div>

        <div className="form-field">
          <label htmlFor="message">Poruka</label>
          <textarea id="message" name="message" rows={4} required />
        </div>

        <button type="submit" disabled={submitState === 'loading'} className="button button-primary" style={{ width: 'fit-content' }}>
          {submitState === 'loading' ? 'Slanje...' : 'Pošalji upit'}
        </button>
      </form>
      {submitState === 'success' && <p className="status-ok">Uspešno poslato. Javićemo vam se uskoro.</p>}
      {submitState === 'error' && <p className="status-error">Došlo je do greške. Pokušajte ponovo.</p>}
      <p style={{ color: 'var(--muted)' }}>Fallback: ako forma ne prođe, pošaljite email na {site.email} ili pozovite {site.phone}.</p>
    </>
  );
}

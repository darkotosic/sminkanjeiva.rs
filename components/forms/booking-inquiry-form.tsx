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
      <form name="booking-inquiry" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="booking-inquiry" />
        <p hidden>
          <label>
            Ne popunjavaj: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Ime i prezime <input name="name" required />
          </label>
        </p>
        <p>
          <label>
            Telefon <input name="phone" required />
          </label>
        </p>
        <p>
          <label>
            Email <input name="email" type="email" />
          </label>
        </p>
        <p>
          <label>
            Usluga <input name="service" />
          </label>
        </p>
        <p>
          <label>
            Datum događaja <input name="eventDate" type="date" />
          </label>
        </p>
        <p>
          <label>
            Poruka <textarea name="message" rows={4} required />
          </label>
        </p>
        <button type="submit" disabled={submitState === 'loading'}>
          {submitState === 'loading' ? 'Slanje...' : 'Pošalji upit'}
        </button>
      </form>
      {submitState === 'success' && <p>Uspešno poslato. Javićemo vam se uskoro.</p>}
      {submitState === 'error' && <p>Došlo je do greške. Pokušajte ponovo.</p>}
      <p style={{ color: 'var(--muted)' }}>
        Fallback: ako forma ne prođe, pošaljite email na {site.email} ili pozovite {site.phone}.
      </p>
    </>
  );
}

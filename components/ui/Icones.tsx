type Props = { className?: string };

export function IconeSeta({ className }: Props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function IconePlay({ className }: Props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className={className}>
      <path d="M6 3.5v13l11-6.5z" fill="currentColor" />
    </svg>
  );
}

export function IconeMenu({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconeFechar({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconeLink({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className={className}>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </svg>
  );
}

export function IconeMensagem({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className={className}>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconeInstagram({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function IconeYouTube({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
    </svg>
  );
}

export function IconeWhatsApp({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.5 3.5A12 12 0 0 0 0 12a12 12 0 0 0 1.6 6L0 24l6.3-1.6A12 12 0 1 0 20.5 3.5zm-8.5 18A10 10 0 0 1 6.9 20l-.4-.2-3.7.9.9-3.7-.2-.4A10 10 0 1 1 12 21.5z"/>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6 0A8.2 8.2 0 0 1 9.5 12a8 8 0 0 1-1.6-2.2c-.2-.4 0-.5.1-.7l.5-.6.3-.5V7.6L7.5 6c-.2-.5-.4-.4-.6-.4h-.6c-.2 0-.5.1-.8.4C5.2 6.3 4.2 7.2 4.2 9s1.5 3.8 1.7 4c.2.3 2.8 4.4 6.9 6 1 .4 1.7.6 2.3.8.9.3 1.8.2 2.5.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.5.2-1.7-.1-.1-.3-.2-.6-.3z"/>
    </svg>
  );
}

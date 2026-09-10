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

import Link from 'next/link';
import SectionObserver from './SectionObserver';

export default function Contact() {
  // SVG icons embedded directly for simplicity
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.742.08-.727.08-.727 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.33-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.809 5.625-5.476 5.922.43.37.823 1.102.823 2.222v3.293c0 .319.192.602.793.577 4.768-1.586 8.205-6.084 8.205-11.387 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm21.518 0l-9.518 7.713-9.518-7.713h19.036zm-19.518 15.346v-12.793l10 8.104 10-8.104v12.793h-20z"/>
    </svg>
  );

  return (
    <SectionObserver id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm always open to new opportunities, collaborations, or just a friendly chat.
        Feel free to reach out to me through any of the platforms below!
      </p>
      <div className="social-links">
        <Link href="https://linkedin.com/in/alexdoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/alexdoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </Link>
        <Link href="mailto:alex.doe@example.com" aria-label="Email">
          <EmailIcon />
        </Link>
      </div>
    </SectionObserver>
  );
}
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/contacts.js';

/**
 * Tombol pill yang membuka WhatsApp dengan pesan ter-encode.
 * variant: 'primary' | 'secondary' | 'light'
 */
export default function WaButton({
  text,
  children,
  variant = 'primary',
  showIcon = true,
  className = '',
  ...rest
}) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
      {...rest}
    >
      {showIcon ? (
        <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </a>
  );
}

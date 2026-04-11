import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Modal = ({ isOpen, onClose, children, title, subtitle }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal">
        <div style={{ textAlign: 'center', marginBottom: '.5rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🪵</div>
          <h3
            className="syne"
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              marginBottom: '.25rem',
            }}
          >
            {title}
          </h3>
          {subtitle && (
            <p style={{ fontSize: '.83rem', color: 'var(--warm-gray)' }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            marginTop: '.6rem',
            padding: '.6rem',
            background: 'none',
            border: 'none',
            color: 'var(--warm-gray)',
            fontSize: '.83rem',
            cursor: 'pointer',
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeButtonStyleType?: 'simple' | 'button';
}

const closeButtonStyles = {
  simple: {
    width: '100%',
    marginTop: '.6rem',
    padding: '.6rem',
    background: 'none',
    border: 'none',
    color: 'var(--warm-gray)',
    fontSize: '.83rem',
    cursor: 'pointer',
  },
  button: {
    padding: '0.75rem 1.2rem',
    background: 'none',
    border: '1.5px solid var(--border)',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: 'var(--warm-gray)',
  },
};

const Modal = ({
  isOpen,
  onClose,
  children,
  closeButtonStyleType = 'simple',
}: ModalProps) => {
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
        {children}
        <button
          onClick={onClose}
          style={closeButtonStyles[closeButtonStyleType]}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;

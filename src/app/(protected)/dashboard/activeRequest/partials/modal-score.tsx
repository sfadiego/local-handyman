import Modal from '@/components/modal/modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/form/textarea';

import { Formik } from 'formik';

interface IModalScoreProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalScore = ({ isOpen, onClose }: IModalScoreProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
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
            Califica a Carlos Ávila
          </h3>
          <p style={{ fontSize: '.83rem', color: 'var(--warm-gray)' }}>
            Reparación de puerta · $280
          </p>
        </div>
        <div className="star-row" id="starRow">
          <span className="star-opt" onClick={() => {}}>
            ★
          </span>
          <span className="star-opt" onClick={() => {}}>
            ★
          </span>
          <span className="star-opt" onClick={() => {}}>
            ★
          </span>
          <span className="star-opt" onClick={() => {}}>
            ★
          </span>
          <span className="star-opt" onClick={() => {}}>
            ★
          </span>
        </div>
        <Formik
          initialValues={{ review: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Textarea
                rows={3}
                className="review-textarea mb-1"
                name="review"
                placeholder="¿Cómo fue tu experiencia? (opcional)"
                formik={formik}
              />
              <Button
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: 'var(--charcoal)',
                  color: 'white',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                Enviar calificación
              </Button>
            </form>
          )}
        </Formik>
      </>
    </Modal>
  );
};

export default ModalScore;

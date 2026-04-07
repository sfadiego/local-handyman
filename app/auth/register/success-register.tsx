import { LoginTabs } from '@/app/auth/useAuth';
import { PartyPopper } from 'lucide-react';

export const SuccessRegister = ({
  isShow,
  switchTab,
}: {
  isShow: boolean;
  switchTab: (tab: LoginTabs) => void;
}) => {
  return (
    <div
      id="successScreen"
      className={`success-screen ${isShow ? 'show' : ''}`}
    >
      <div className="success-circle">
        <PartyPopper size={48} />
      </div>
      <h2
        className="form-title"
        style={{ marginBottom: '0.4rem' }}
        id="successTitle"
      >
        ¡Cuenta creada!
      </h2>
      <p
        style={{
          color: 'var(--warm-gray)',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          marginBottom: '2rem',
        }}
        id="successMsg"
      >
        Ya puedes empezar a explorar servicios cerca de ti.
      </p>
      <button
        className="btn-submit"
        onClick={() => switchTab('login')}
        style={{ marginBottom: '0' }}
      >
        <span className="btn-text" id="successBtn">
          Ir a mi cuenta →
        </span>
      </button>
    </div>
  );
};

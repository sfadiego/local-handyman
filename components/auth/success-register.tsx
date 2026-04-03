export const SuccessRegister = ({
  resetSuccess,
}: {
  resetSuccess: () => void;
}) => {
  return (
    <div id="successScreen" className="success-screen">
      <div className="success-circle">🎉</div>
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
        onClick={resetSuccess}
        style={{ marginBottom: '0' }}
      >
        <span className="btn-text" id="successBtn">
          Ir a mi cuenta →
        </span>
      </button>
    </div>
  );
};

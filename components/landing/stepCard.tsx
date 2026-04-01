import { ReactNode } from 'react';

interface IStepCard {
  stepNum: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const StepCard = ({ stepNum, icon, title, description }: IStepCard) => {
  return (
    <div className="step-card">
      <div className="step-num">{stepNum}</div>
      <div
        style={{
          width: '44px',
          height: '44px',
          background: 'rgba(245,158,11,0.12)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.3rem',
          marginBottom: '1rem',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "'Syne',sans-serif",
          fontWeight: '700',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--warm-gray)',
          lineHeight: '1.6',
        }}
      >
        {description}
      </p>
    </div>
  );
};

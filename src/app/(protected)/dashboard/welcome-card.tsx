import { useAuthContext } from '@/hooks/useAuthContext';
import { getUserName } from '@/lib/utils';

const WelcomeCard = () => {
  const { user } = useAuthContext();
  if (!user) {
    return null;
  }
  const date = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const dayHour = new Date().getHours();
  const iconGreeting = dayHour < 12 ? '☀️' : dayHour < 18 ? '🌤️' : '🌙';
  const greeting =
    dayHour < 12
      ? 'Buenos días'
      : dayHour < 18
        ? 'Buenas tardes'
        : 'Buenas noches';

  const stats = {
    activeRequests: 2,
    pendingServices: 1,
  };
  return (
    <div>
      <div className="greeting-label">{date}</div>
      <h1 className="greeting-title">
        ¡{greeting}, {getUserName({ user, format: 'first' })}! {iconGreeting}
      </h1>
      <p className="greeting-sub">
        {`Tienes ${stats.activeRequests} solicitudes activas y 
        ${stats.pendingServices} servicio(s) pendiente(s) de calificar.`}
      </p>
    </div>
  );
};

export default WelcomeCard;

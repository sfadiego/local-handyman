'use client';

import { Button } from '@/components/ui/button';
import { Bell, Calendar, Check, MessageCircle, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Notification {
  id: string;
  type: 'message' | 'booking' | 'review' | 'system';
  title: string;
  message: string;
  time: string;
  unread?: boolean;
}

const NotificationsDropdown = () => {
  const router = useRouter();

  // Mock data for notifications - replace with actual data from your API
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'message',
      title: 'Nuevo mensaje',
      message: 'Juan Morales te envió un mensaje sobre tu proyecto',
      time: 'Hace 5 min',
      unread: true,
    },
    {
      id: '2',
      type: 'booking',
      title: 'Solicitud de servicio',
      message: 'Rosa García quiere contratarte para un trabajo eléctrico',
      time: 'Hace 1 hora',
      unread: true,
    },
    {
      id: '3',
      type: 'review',
      title: 'Nueva reseña',
      message: 'Carlos Ávila te calificó con 5 estrellas',
      time: 'Ayer',
      unread: false,
    },
    {
      id: '4',
      type: 'system',
      title: 'Actualización del sistema',
      message: 'Nuevas funcionalidades disponibles en tu perfil',
      time: 'Hace 2 días',
      unread: false,
    },
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'message':
        return MessageCircle;
      case 'booking':
        return Calendar;
      case 'review':
        return Star;
      case 'system':
        return Bell;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'message':
        return 'bg-blue-100 text-blue-600';
      case 'booking':
        return 'bg-green-100 text-green-600';
      case 'review':
        return 'bg-yellow-100 text-yellow-600';
      case 'system':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleNotificationClick = (notificationId: string) => {
    // Mark as read and navigate to relevant page
    router.push(`/notifications/${notificationId}`);
  };

  const markAllAsRead = () => {
    // Implement mark all as read functionality
    console.log('Mark all as read');
  };

  const viewAllNotifications = () => {
    router.push('/notifications');
  };

  return (
    <div
      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: 50,
      }}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">
            Notificaciones
          </h3>
          <div className="flex items-center gap-2">
            <Button
              onClick={markAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-700"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <Check width={12} height={12} className="mr-1" />
              Marcar todas leídas
            </Button>
            <Button
              onClick={viewAllNotifications}
              className="text-xs text-blue-600 hover:text-blue-700"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              Ver todas
            </Button>
          </div>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <Bell
              width={24}
              height={24}
              className="mx-auto text-gray-400 mb-2"
            />
            <p className="text-sm text-gray-500">
              No tienes notificaciones nuevas
            </p>
          </div>
        ) : (
          notifications.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            const iconColor = getNotificationColor(notification.type);

            return (
              <div
                key={notification.id}
                onClick={() => handleNotificationClick(notification.id)}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColor}`}
                    >
                      <Icon width={16} height={16} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {notification.title}
                      </p>
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {notification.message}
                    </p>
                    {notification.unread && (
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Nueva
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="p-2 border-t border-gray-200">
        <Button
          onClick={viewAllNotifications}
          className="w-full text-sm p-2"
          style={{
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bell width={14} height={14} className="mr-2" />
          Ver todas las notificaciones
        </Button>
      </div>
    </div>
  );
};

export default NotificationsDropdown;

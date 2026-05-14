'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Send, User as UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  sender: string;
  message: string;
  time: string;
  unread?: boolean;
}

const MessagesDropdown = () => {
  const router = useRouter();

  // Mock data for messages - replace with actual data from your API
  const messages: Message[] = [
    {
      id: '1',
      sender: 'Juan Morales',
      message: '¿Cuándo podemos empezar el trabajo?',
      time: 'Hace 5 min',
      unread: true,
    },
    {
      id: '2',
      sender: 'Rosa García',
      message: 'Gracias por contratar mis servicios',
      time: 'Hace 1 hora',
      unread: true,
    },
    {
      id: '3',
      sender: 'Carlos Ávila',
      message: 'El proyecto está listo para revisión',
      time: 'Ayer',
      unread: false,
    },
  ];

  const handleMessageClick = (messageId: string) => {
    router.push(`/messages/${messageId}`);
  };

  const viewAllMessages = () => {
    router.push('/messages');
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
          <h3 className="text-sm font-semibold text-gray-900">Mensajes</h3>
          <Button
            onClick={viewAllMessages}
            className="text-xs text-blue-600 hover:text-blue-700"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            Ver todos
          </Button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="p-8 text-center">
            <MessageCircle
              width={24}
              height={24}
              className="mx-auto text-gray-400 mb-2"
            />
            <p className="text-sm text-gray-500">No tienes mensajes nuevos</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              onClick={() => handleMessageClick(message.id)}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon
                      width={16}
                      height={16}
                      className="text-blue-600"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {message.sender}
                    </p>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {message.message}
                  </p>
                  {message.unread && (
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Nuevo
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-2 border-t border-gray-200">
        <Button
          onClick={viewAllMessages}
          className="w-full text-sm p-2"
          style={{
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send width={14} height={14} className="mr-2" />
          Ir a mensajes
        </Button>
      </div>
    </div>
  );
};

export default MessagesDropdown;

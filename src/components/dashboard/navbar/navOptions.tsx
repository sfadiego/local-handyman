import { LogOut, Settings, User } from 'lucide-react';

interface NavOptionsProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const NavOptions = ({ user }: NavOptionsProps) => {
  return (
    <div
      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: 50,
      }}
    >
      <div className="py-2">
        <div className="px-4 py-2 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>

        <button
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          onClick={() => console.log('Perfil')}
        >
          <User width={16} height={16} />
          Perfil
        </button>

        <button
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
          onClick={() => console.log('Configuración')}
        >
          <Settings width={16} height={16} />
          Configuración
        </button>

        <button
          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-gray-200"
          onClick={() => console.log('Cerrar sesión')}
        >
          <LogOut width={16} height={16} />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default NavOptions;

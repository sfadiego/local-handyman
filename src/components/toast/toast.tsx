import { toast } from 'react-toastify';
const toastDefault = {
  success: {
    description: 'Operación realizada correctamente',
  },
  error: {
    description: 'Algo salió mal',
  },
  warning: {
    description: 'Ten cuidado con esta acción',
  },
  info: {
    description: 'Esta es una notificación informativa',
  },
};

type ToastType = 'success' | 'error' | 'warning' | 'info';
export const Toast = (type: ToastType = 'success', text: string) => {
  const message = text || toastDefault[type].description;
  return toast[type](message);
};

import {
  CheckSquare,
  MapPin,
  MessageCircleMore,
  Star,
  Wrench,
} from 'lucide-react';
import SingleListItem from './single-list-item';

interface SingleListProps {
  title: string;
}

const data = [
  {
    icon: <CheckSquare />,
    text: '<strong>Juan Morales</strong> aceptó tu solicitud de plomería.',
    time: '2025-10-14T12:30:00',
  },
  {
    icon: <MessageCircleMore />,
    text: '<strong>Rosa García</strong> te envió un mensaje sobre la instalación.',
    time: '2025-10-14T12:30:00',
  },
  {
    icon: <Star />,
    text: 'Califica el servicio de <strong>Carlos Ávila</strong> para ayudar a la comunidad.',
    time: '2025-10-14T12:30:00',
  },
  {
    icon: <Wrench />,
    text: 'Servicio de carpintería <strong>completado</strong> exitosamente.',
    time: '2025-10-14T12:30:00',
  },
  {
    icon: <MapPin />,
    text: '<strong>Miguel Ramos</strong> se unió como maestro en tu zona.',
    time: '2025-10-14T12:30:00',
  },
];

const SingleList = ({ title }: SingleListProps) => {
  return (
    <div className="card fu d4">
      <div className="card-header">
        <div className="card-title">{title}</div>
      </div>
      {data.map((item, index) => (
        <SingleListItem
          key={index}
          icon={item.icon}
          text={item.text}
          time={item.time}
        />
      ))}
    </div>
  );
};

export default SingleList;

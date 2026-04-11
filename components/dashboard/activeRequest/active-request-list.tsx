import { LucideIcon, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';
import ModalScore from './modal-score';
import RequestListItem from './request-list-item';

const cards: {
  Icon: LucideIcon;
  title: string;
  sub: string;
  category: string;
  meta: string;
  price: string;
  status: string;
}[] = [
  {
    Icon: Wrench,
    title: 'Fuga de agua en cocina',
    sub: 'Juan Morales ',
    category: 'Plomería',
    meta: '📍 1.2 km · Hoy 14:30 hrs',
    price: '$350',
    status: 'En camino',
  },
  {
    Icon: Zap,
    title: 'Instalación de contactos',
    sub: 'Juan Morales ',
    category: 'Electricidad',
    meta: '📍 1.2 km · Hoy 14:30 hrs',
    price: '$450',
    status: 'Confirmado',
  },
  {
    Icon: Wrench,
    title: 'Reparación de puerta',
    sub: 'Juan Morales ',
    category: 'Carpintería',
    meta: '📍 1.2 km · Hoy 14:30 hrs',
    price: '$250',
    status: 'Calificar',
  },
];
interface IActiveRequestList {
  title: string;
  className?: string;
}
export const ActiveRequestList = ({ title, className }: IActiveRequestList) => {
  return (
    <>
      <div className={`card fu d2 ${className || ''}`}>
        <div className="card-header">
          <div className="card-title">{title}</div>
          <Link href="#" className="card-link">
            Ver todas →
          </Link>
        </div>

        {cards.map((item, index) => (
          <RequestListItem key={index} {...item} />
        ))}
      </div>
      <ModalScore isOpen={true} onClose={() => {}} />
    </>
  );
};

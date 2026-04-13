import { useModal } from '@/components/modal/useModal';
import { RequestStatusEnum } from '@prisma/client';
import { LucideIcon, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';
import ModalScore from './partials/modal-score';
import ModalServiceDetails from './partials/modal-service-details';
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
    status: RequestStatusEnum.in_progress,
  },
  {
    Icon: Zap,
    title: 'Instalación de contactos',
    sub: 'Juan Morales ',
    category: 'Electricidad',
    meta: '📍 1.2 km · Hoy 14:30 hrs',
    price: '$450',
    status: RequestStatusEnum.accepted,
  },
  {
    Icon: Wrench,
    title: 'Reparación de puerta',
    sub: 'Juan Morales ',
    category: 'Carpintería',
    meta: '📍 1.2 km · Hoy 14:30 hrs',
    price: '$250',
    status: RequestStatusEnum.paid,
  },
];
interface IActiveRequestList {
  title: string;
  className?: string;
}
export const ActiveRequestList = ({ title, className }: IActiveRequestList) => {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isProgressOpen,
    openModal: openProgressModal,
    closeModal: closeProgressModal,
  } = useModal();
  return (
    <>
      <div className={`card fu d2 ${className || ''}`}>
        <div className="card-header">
          <div className="card-title">{title}</div>
          <Link href="#" className="card-link">
            Ver todas →
          </Link>
        </div>

        {cards.map((item, index) => {
          const handleClick = () => {
            // seleccionar la solicitud y abrir el modal
            if (item.status === RequestStatusEnum.paid) {
              openModal();
            }
            if (item.status === RequestStatusEnum.in_progress) {
              openProgressModal();
            }
          };
          return (
            <RequestListItem key={index} {...item} onClick={handleClick} />
          );
        })}
      </div>
      <ModalScore isOpen={isOpen} onClose={closeModal} />
      <ModalServiceDetails
        isOpen={isProgressOpen}
        onClose={closeProgressModal}
      />
    </>
  );
};

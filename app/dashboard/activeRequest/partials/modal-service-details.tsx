import { Avatar } from '@/components/avatar/avatar';
import AvatarInfo from '@/components/avatar/avatar-info';
import { Badge } from '@/components/badges/badge';
import MultipleCards from '@/components/card/multiple-cards';
import SimpleCard from '@/components/card/simple-card';
import Modal from '@/components/modal/modal';
import { Button } from '@/components/ui/button';

interface IModalServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalServiceDetails = ({
  isOpen,
  onClose,
}: IModalServiceDetailsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeButtonStyleType="button">
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            marginBottom: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Avatar name="JM" />
          <AvatarInfo name="JM">
            <div style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>
              Plomero · ★★★★★ 4.97
            </div>
          </AvatarInfo>
          <Badge text="En camino" type="active" />
        </div>
        <SimpleCard
          title="Detalles del servicio"
          subtitle="Fuga de agua en cocina"
          text="Reparación de tubería bajo el fregadero. Incluye revisión completa del sistema."
        />
        <MultipleCards
          values={[
            { title: 'Precio', value: '$350' },
            { title: 'Llegada', value: '~15 min' },
            { title: 'Distancia', value: '1.2 km' },
          ]}
        />
        <Button className="mr-2" buttonStyle="dark">
          💬 Enviar mensaje
        </Button>
      </>
    </Modal>
  );
};

export default ModalServiceDetails;

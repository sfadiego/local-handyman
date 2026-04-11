import Modal from '@/components/modal/modal';

interface IModalScoreProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalScore = ({ isOpen, onClose }: IModalScoreProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Califica a Carlos Ávila"
      subtitle="Reparación de puerta · $280"
    >
      <div>
        <p>Califica a Carlos Ávila</p>
      </div>
    </Modal>
  );
};

export default ModalScore;

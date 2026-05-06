import Link from 'next/link';
import ListButtonItem from './list-button-item';

const masterListItems = [
  {
    name: 'Juan Morales',
    trade: 'Plomero',
    experience: '8 años',
    rating: 2,
    distance: '1.2 km',
  },
  {
    name: 'Rosa García',
    trade: 'Electricista',
    experience: '5 años',
    rating: 4.6,
    distance: '3.5 km',
  },
  {
    name: 'Carlos Ávila',
    trade: 'Carpintero',
    experience: '12 años',
    rating: 4.9,
    distance: '0.8 km',
  },
  {
    name: 'Miguel Ramos',
    trade: 'Pintor',
    experience: '6 años',
    rating: 4,
    distance: '2.1 km',
  },
];
const ListButton = () => {
  return (
    <div className="card fu d3">
      <div className="card-header">
        <div className="card-title">Maestros cerca de ti</div>
        <Link href="#" className="card-link">
          Ver mapa →
        </Link>
      </div>

      {masterListItems.map((master, key) => {
        return (
          <ListButtonItem
            rating={Math.floor(master.rating)}
            key={key}
            name={master.name}
            trade={master.trade}
            experience={master.experience}
            distance={master.distance}
          />
        );
      })}
    </div>
  );
};

export default ListButton;

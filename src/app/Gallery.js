import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profesión:</b> {person.profession}
        </li>
        <li>
          <b>Premios: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Descubrió: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'física y química',
        discovery: 'polonio (elemento químico)',
        awards: [
          'Premio Nobel de Física',
          'Premio Nobel de Química',
          'Medalla Davy',
          'Medalla Matteucci'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geoquímico',
        discovery: 'un método para medir el dióxido de carbono en el agua de mar',
        awards: [
          'Premio Miyake de geoquímica',
          'Premio Tanaka'
        ],
      }} />
    </div>
  );
}

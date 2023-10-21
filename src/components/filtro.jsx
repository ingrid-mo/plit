
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSortAmountDown } from 'react-icons/fa';

function Filter({ movie, setMovie }) {
    const handleSort = (sortKey) => {
      let sortedMovies = [...movie]; // Clonamos el arreglo existente
  
      // Borrar el contenido existente de 'movie' antes de aplicar la ordenación
      setMovie([]); 
  
      switch (sortKey) {
        case 'year':
          sortedMovies.sort((a, b) => a.release_date.localeCompare(b.release_date));
          console.log('year');
          break;
        case 'name':
          console.log('name');
          sortedMovies.sort((a, b) => a.original_title.localeCompare(b.original_title));
          break;
        case 'rating':
          console.log('rating');
          sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
          break;
        default:
          break;
      }
  
      // Actualizar 'movie' con los datos ordenados
      setMovie(sortedMovies);
    };
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Filtro <FaSortAmountDown />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSort('year')}>Año</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('name')}>Nombre</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('rating')}>Rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;

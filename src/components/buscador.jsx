import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Buscador = ({ buscarPelicula }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let criterio = event.target.elements.busqueda.value;
    console.log("el valoooor es : " + criterio);
    buscarPelicula(criterio);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          name="busqueda"
          aria-label="Search"
        />
        <Button type="submit" variant="outline-warning">
          <FaSearch />
        </Button>
      </Form>
    </div>
  );
};

export default Buscador;

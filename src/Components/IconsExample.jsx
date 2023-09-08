import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';

export default function IconsExample() {
  return (
<>
  <div>
    <i className="bi bi-heart-fill"></i>
  </div>
  <div>
    <i className="bi bi-film"></i>
  </div>
  <p>You can add color</p>
  <i className="bi bi-heart-fill" style = {{ fontSize: "2rem", color: 'pink'}}/>
  <i className="bi bi-heart-fill" style = {{ fontSize: "20rem", color: 'green'}}/>
</>
  );
}

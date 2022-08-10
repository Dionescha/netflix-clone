import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <Nav className="navbar">
  
  
    
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className='Nada' href=""></a>
      <a className="Home" href="">Home</a>
      <a className="Destaques" href="">Destaques</a>
      <a className="Series" href="">Séries</a>
     
      <div className="user-img">
        
        <Link to="/">
        <a href="">
          <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="user" />
        </a>
        </Link>
      </div>
      
    </div>
  </div>
</Nav>
      
      
    </>
  );
}

export default Header;
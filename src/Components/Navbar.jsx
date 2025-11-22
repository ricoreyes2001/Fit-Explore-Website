import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="wrapper  ">
      <nav className="navbar">
        <div className="navbar-title">
          <span className="fit">FIT</span>
          <span className="explore">EXPLORE</span>
        </div>
        <div className="navbar-links">
          <div className="nav-link">
            <Link to="/" className="home-link">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/aboutus">About</Link>
          </div>
          <div className="nav-link">
            <Link to="/programs">Programs</Link>
          </div>
          <div className="nav-link">
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="nav-link">
            <Link to="/login">Log in</Link>
          </div>
          <div className="nav-link">
            <Link to="/contacts" className="contact-link">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
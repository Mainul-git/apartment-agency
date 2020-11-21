import { useHistory } from 'react-router-dom';
import logo from '../../../logos/Logo.png'
const Navbar = () => {
  let history = useHistory()
  const Login = () => {
    history.push('/dashboard')
  }
  const LogOut = () => {
    localStorage.clear();
    window.location.reload(false)
    history.push('/home')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a href="/"><img src={logo} className="ml-5" style={{ height: '50px' }} alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active  mr-3">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="#">About</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="#">Service</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="#">Event</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="#">Contact</a>
          </li>
          <li className="nav-item  ">

            {
              localStorage.getItem('email') ? <button className="btn text-white mr-5" style={{ backgroundColor: "#275A53" }} onClick={() => LogOut()}>Log Out</button> : <button onClick={() => Login()} className="btn text-white mr-5" style={{ backgroundColor: "#275A53" }}>Log In</button>
            }
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
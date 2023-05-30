
import { Outlet, useNavigate, Navigate, NavLink } from "react-router-dom";
import { useAuth } from '../../service/user';
import Footer from "../Footer";

function PublicLayout() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth()
  const token = window.localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to='auth/login' replace />
  }

  const logoutControl = async (event) => {
    event.preventDefault()
    await logout();
    window.localStorage.removeItem('token')
    navigate('/auth/login', { replace: true })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <a className="navbar-brand mb-1" href="#">Kfaqs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname='is-active' aria-current="page" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname='is-active'  to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname='is-active' to="/product">Product</NavLink>
              </li>

            </ul>
            <div className="d-flex">
              {
								currentUser ?
									(<li className="nav-item list-group">
											<button className="btn btn-primary" type="button" onClick={logoutControl}>logout</button>
										</li>):
									(<li className="nav-item">
                    <button className="btn btn-primary" type="button"><NavLink className="nav-link" type="button" to="auth/login">Login</NavLink></button>
									</li>)
							}
              </div>
          </div>
        </div>
      </nav>

      <div className="container-flex">
        <div className="row">
          <div className="col-sm-12">
            <Outlet />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}


export default PublicLayout;
import { Link, NavLink } from 'react-router-dom'
const Form = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Главная страница</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="about">О нас</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="info">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Form
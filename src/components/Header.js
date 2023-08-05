import { Link } from "react-router-dom"

function Header(props) {
  return <div className="nav">
    <Link to="/">
      <div>People App</div>
    </Link>
  </div>
}

export default Header
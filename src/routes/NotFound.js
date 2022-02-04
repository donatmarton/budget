import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <main className="main-container main-container--not-found">
      <h2 className="main-container--not-found__title">404</h2>
      <p>Oops, something's missing?</p>
      <Link to="/">Take me back</Link>
    </main>
  )
}

export default NotFound;

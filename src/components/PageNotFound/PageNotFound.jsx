import "./PageNotFound.css";
import { useNavigate, Link } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>

      <p className="not-found__text">
        Uh oh! There&apos:s nothing here... Sorry 🥺
      </p>

      <Link to="">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default PageNotFound;

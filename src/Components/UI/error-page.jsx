import { Link, useRouteError } from "react-router-dom";
import errorImg from "./svg_img/404 error olx.webp";
import "./error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container p-5">
      <h1>Oops!</h1>
      <p>Sorry, Currently this page is not available Right now.</p>
      <div className="errorImg">
        <picture>
          <img src={errorImg} alt="unavailable" />
        </picture>
      </div>
      <div className="mt-3">
      <Link to={'/contacts'}><button className="btn btn-success btn-sm">Go back?</button></Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center mt-5">

      <h1 className="display-1">
        404
      </h1>

      <h3>Page Not Found</h3>

      <Link
        to="/"
        className="btn btn-primary mt-3"
      >
        Go Home
      </Link>

    </div>
  );
}

export default ErrorPage;
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-4">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default NotFound;

import { Link } from "react-router-dom";
import Container from "../components/layout/Container";

const PageNotFound = () => {
  return (
    <section className="page_not_found">
      <Container>
        <h1>404</h1>
        <p>Page Not Found!</p>
        <div className="back home">
          <Link to="/">
            <i className="icon long arrow alternate left"></i>back
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PageNotFound;

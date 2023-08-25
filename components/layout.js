import { Container, Row, Col, Media, Image, Card } from "react-bootstrap";
import MyNavbar from "components/my-navbar";
import { Footer } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default ({ children }) => {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <hr />
      </div>

      <div className={`page-wrapper`}>{children}</div>

      {/* <Footer className="page-footer">
        <div>
          <a href="#"> Нүүр</a>
          {"  |  "}
          <a href="#"> Сургалт</a>
          {"  |  "}
          <a href="#"> Фэйсбүүк</a>
        </div>
      </Footer> */}
    </Container>
  );
};

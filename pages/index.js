import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";
import MyNavbar from "../components/my-navbar";

export default function Home() {
  return (
    <Container>
      <MyNavbar />

      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="logo.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="font-weight-bold mb-0">Онлайн блог</h5>
                <p className="welcome-text">
                  Програмчлалын онлайн блогт тавтай морил
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>

        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Төрбат Батбаатар
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 08 сарын 01
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Jam archive
                    </Card.Title>
                    <Card.Text>Статик сайт</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Төрбат Батбаатар
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 08 сарын 01
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/user/erondu/150x150"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity blog hiih
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        EDEN HAZARD
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 08 сарын 01
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/user/erondu/150x150"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity blog hiih
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Төрбат Батбаатар
                      </Card.Title>
                      <Card.Text className="card-date">
                        2023 оны 08 сарын 01
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/user/erondu/150x150"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity blog hiih
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

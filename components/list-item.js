import { Card } from "react-bootstrap";
export default (post) => (
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
          <Card.Text className="card-date">2023 оны 08 сарын 01</Card.Text>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-main-title">Jam archive</Card.Title>
        <Card.Text>Статик сайт</Card.Text>
      </Card.Body>
    </div>
  </Card>
);

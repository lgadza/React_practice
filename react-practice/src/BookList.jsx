import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./components/SingleBook";

class BookList extends Component {
  render() {
    // console.log(history);
    return (
      <Container>
        <Row>
          {this.props.books.map((item) => {
            return (
              <Col md={4} sm={12} lg={3}>
                <SingleBook book={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;

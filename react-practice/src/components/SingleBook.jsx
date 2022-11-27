import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    loading: true,
  };

  eventHandler() {
    console.log("clicked");
    this.setState({
      selected: true,
      loading: false,
    });
  }
  render() {
    return (
      <Card
        key={this.props.book.asin}
        className=""
        onClick={this.eventHandler()}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: $USD{this.props.book.price}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}

export default SingleBook;

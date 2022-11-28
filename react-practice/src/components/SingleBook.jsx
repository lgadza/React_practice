import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";

class SingleBook extends Component {
  state = {
    selected: false,
    loading: true,
  };

  eventHandler = () => {
    this.setState({
      selected: true,
      loading: false,
    });
    console.log("clicked");
  };
  render() {
    return (
      <Card
        key={this.props.book.asin}
        onClick={this.eventHandler}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: $USD{this.props.book.price}</ListGroup.Item>
        </ListGroup>
        {this.state.selected && <AddComment />}
      </Card>
    );
  }
}

export default SingleBook;

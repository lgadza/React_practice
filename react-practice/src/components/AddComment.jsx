import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddComment() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" placeholder="Herry Porter" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Asin</Form.Label>
        <Form.Control type="text" placeholder="12345567gvdf" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="History" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
}

export default AddComment;

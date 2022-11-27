import "./App.css";
import { Container } from "react-bootstrap";
import WarningSign from "./components/WarningSign";
import NavBar from "./components/NavBar";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./BookList";
import history from "..//src/books/history.json";

function App() {
  return (
    <Container fluid className="px-0 mx-0">
      <NavBar />
      <Container>
        <WarningSign />
        <MyBadge />
        {/* <SingleBook /> */}
        <BookList books={history} />
      </Container>
    </Container>
  );
}

export default App;

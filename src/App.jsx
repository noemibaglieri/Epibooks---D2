import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter.jsx";
import { Container } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks.jsx";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

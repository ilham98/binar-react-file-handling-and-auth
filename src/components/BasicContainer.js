import Navbar from "./Navbar";
import { Container } from "reactstrap";

function BasicContainer(props) {
  return (
    <>
      <Navbar />
      <Container>
        <div>{props.children}</div>
      </Container>
      <div>Footer</div>
    </>
  );
}

export default BasicContainer;

import Navbar from "./Navbar";

function BasicContainer(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <div>Footer</div>
    </div>
  );
}

export default BasicContainer;

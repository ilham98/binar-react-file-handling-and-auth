function BasicContainer(props) {
  const { title } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{props.children}</div>
    </div>
  );
}

function Home() {
  return (
    <BasicContainer title="Ini Home Page">
      Ini Yang Diambil di props.children
    </BasicContainer>
  );
}

export default Home;

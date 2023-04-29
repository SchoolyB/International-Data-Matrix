interface Props {
  children: React.ReactNode;
}

const Container = (props: Props) => {
  return <div id="container">{props.children}</div>;
};

export default Container;

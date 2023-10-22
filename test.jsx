class Parent extends Component {
  render() {
    return (
      <h1>
        the parent component.
        <Child text={"Child 1"} />
        <Child text={"Child 2"} />
        <Child text={"Child 3"} />
      </h1>
    );
  }
}

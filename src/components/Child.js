function Child(p) {
  const setnewWord = () => {
    p.changeWord1("pranay");
  };
  return <button onClick={setnewWord}>click on button to see the magic</button>;
}
export default Child;

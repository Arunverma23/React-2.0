function Hello() {
  var myName = "Arun";

  let fullName = () => {
    return `${myName} Verma`;
  };

  return (
    <h2>
      Hello {myName}
      <br></br>
      Hello {fullName()}
    </h2>
  );
}

export default Hello;

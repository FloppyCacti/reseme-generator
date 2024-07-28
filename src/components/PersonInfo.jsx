import "../styles/container.css";

function PersonInfo() {
  return (
    <>
      <div className="container">
        <div>
          <h2>Name: </h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Email: </h2>
          <input type="email"></input>
        </div>
        <div>
          <h2>Phone Number: </h2>
          <input type="tel"></input>
        </div>
      </div>
    </>
  );
}

export { PersonInfo };

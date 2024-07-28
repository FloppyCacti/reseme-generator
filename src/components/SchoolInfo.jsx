import "../styles/container.css";

function SchoolInfo() {
  return (
    <>
      <div className="container">
        <div>
          <h2>School:</h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Degree: </h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Location: </h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Start Date:</h2>
          <input type="date"></input>
        </div>
        <div>
          <h2>Finish Date:</h2>
          <input type="date"></input>
        </div>
      </div>
    </>
  );
}

export { SchoolInfo };

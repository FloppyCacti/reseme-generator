import "../styles/container.css";

function WorkInfo() {
  return (
    <>
      <div className="container">
        <div>
          <h2>Position/Title:</h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Compony: </h2>
          <input type="text"></input>
        </div>
        <div>
          <h2>Started at: </h2>
          <input type="date"></input>
        </div>
        <div>
          <h2>Ended at: </h2>
          <input type="date"></input>
        </div>
      </div>
    </>
  );
}

export { WorkInfo };

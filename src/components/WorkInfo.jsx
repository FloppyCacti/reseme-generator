import "../styles/container.css";
import "../styles/workInfo.css";

function WorkInfo({
  position,
  setPosition,
  company,
  setCompany,
  jobStartDate,
  setJobStartDate,
  jobEndDate,
  setJobEndDate,
}) {
  return (
    <>
      <div className="container">
        <div>
          <h2>Position/Title:</h2>
          <input
            id="positionInput"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Company: </h2>
          <input
            id="comanyInput"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Started at: </h2>
          <input
            id="jobStartInput"
            type="date"
            value={jobStartDate}
            onChange={(e) => setJobStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Ended at: </h2>
          <input
            id="jobEndInput"
            type="date"
            value={jobEndDate}
            onChange={(e) => setJobEndDate(e.target.value)}
          ></input>
        </div>
        <button>Add</button>
      </div>
    </>
  );
}

export { WorkInfo };

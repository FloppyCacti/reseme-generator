import "../styles/container.css";

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
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Company: </h2>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Started at: </h2>
          <input
            type="date"
            value={jobStartDate}
            onChange={(e) => setJobStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Ended at: </h2>
          <input
            type="date"
            value={jobEndDate}
            onChange={(e) => setJobEndDate(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}

export { WorkInfo };

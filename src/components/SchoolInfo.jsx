import "../styles/container.css";

function SchoolInfo({
  school,
  setSchool,
  degree,
  setDegree,
  schoolStartDate,
  setSchoolStartDate,
  schoolEndDate,
  setSchoolEndDate,
}) {
  return (
    <>
      <div className="container">
        <div>
          <h2>School:</h2>
          <input
            id="schoolInput"
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Degree: </h2>
          <input
            id="degreeInput"
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Start Date:</h2>
          <input
            id="schoolStartInput"
            type="date"
            value={schoolStartDate}
            onChange={(e) => setSchoolStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Finish Date:</h2>
          <input
            id="schoolEndInput"
            type="date"
            value={schoolEndDate}
            onChange={(e) => setSchoolEndDate(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}

export { SchoolInfo };

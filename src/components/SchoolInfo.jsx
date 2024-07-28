import "../styles/container.css";

function SchoolInfo({
  school,
  setSchool,
  degree,
  setDegree,
  location,
  setLocation,
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
            type="text"
            value={school}
            onChange={(e) => setSchool(e.value.target)}
          ></input>
        </div>
        <div>
          <h2>Degree: </h2>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.value.target)}
          ></input>
        </div>
        <div>
          <h2>Location: </h2>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.value.target)}
          ></input>
        </div>
        <div>
          <h2>Start Date:</h2>
          <input
            type="date"
            value={schoolStartDate}
            onChange={(e) => setSchoolStartDate(e.value.target)}
          ></input>
        </div>
        <div>
          <h2>Finish Date:</h2>
          <input
            type="date"
            value={schoolEndDate}
            onChange={(e) => setSchoolEndDate(e.value.target)}
          ></input>
        </div>
      </div>
    </>
  );
}

export { SchoolInfo };

import "../styles/Resume.css";

function ShowResume({
  name,
  email,
  phone,
  school,
  degree,
  schoolStartDate,
  schoolEndDate,
  position,
  company,
  jobStartDate,
  jobEndDate,
}) {
  return (
    <>
      <div id="resume-container">
        <div id="resume-info">
          <h1>{name}</h1>
          <hr></hr>
          <div className="resume-horizontal">
            <h3>{email}</h3>
            <h3>{phone}</h3>
          </div>
        </div>
        <div id="resume-school">
          <div className="resume-horizontal">
            <h3>{degree}</h3>
            <h3>
              {schoolStartDate} - {schoolEndDate}
            </h3>
          </div>
          <h3>{school}</h3>
        </div>
        <div id="resume-job">
          <div className="resume-horizontal">
            <h3>{position}</h3>
            <h3>
              {jobStartDate} - {jobEndDate}
            </h3>
          </div>
          <h3>{company}</h3>
        </div>
      </div>
    </>
  );
}

export { ShowResume };

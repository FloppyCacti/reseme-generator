import { PersonInfo } from "./PersonInfo.jsx";
import { SchoolInfo } from "./SchoolInfo.jsx";
import { WorkInfo } from "./WorkInfo.jsx";
import { useState } from "react";
import "../styles/Builder.css";

function Builder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");

  return (
    <>
      <div>
        <PersonInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
        <SchoolInfo
          school={school}
          setSchool={setSchool}
          degree={degree}
          setDegree={setDegree}
          location={location}
          setLocation={setLocation}
          schoolStartDate={schoolStartDate}
          setSchoolStartDate={setSchoolStartDate}
          schoolEndDate={schoolEndDate}
          setSchoolEndDate={setSchoolEndDate}
        />
        <WorkInfo
          position={position}
          setPosition={setPosition}
          company={company}
          setCompany={setCompany}
          jobStartDate={jobStartDate}
          setJobStartDate={setJobStartDate}
          jobEndDate={jobEndDate}
          setJobEndDate={setJobEndDate}
        />
      </div>
    </>
  );
}

export { Builder };

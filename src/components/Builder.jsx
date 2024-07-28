import { PersonInfo } from "./PersonInfo.jsx";
import { SchoolInfo } from "./SchoolInfo.jsx";
import { WorkInfo } from "./WorkInfo.jsx";
import "../styles/Builder.css";

function Builder() {
  return (
    <>
      <div>
        <PersonInfo />
        <SchoolInfo />
        <WorkInfo />
      </div>
    </>
  );
}

export { Builder };

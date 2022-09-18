import React from "react";
import Job from "../Job/Job";

const JobList = () => {
  return (
    <>
      <div className="grid grid-cols-3 container mx-auto">
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </>
  );
};

export default JobList;

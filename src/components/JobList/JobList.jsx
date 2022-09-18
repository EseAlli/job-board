import React from "react";
import Job from "../Job/Job";

const JobList = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <div className="flex items-center content-center justify-center">
        <p className="text-2xl font-medium">1500 Jobs Available</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-4">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </div>
  );
};

export default JobList;

import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const url = process.env.NEXT_PUBLIC_BASE_URL;
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data.length);
      });
  }, []);
  return (
    <div className="container mx-auto p-4 my-8">
      <div className="flex items-center content-center justify-center">
        <p className="text-2xl font-medium"> {jobs.length} Job(s) Available</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-4">
        {jobs &&
          jobs.map((job) => {
            return (
              <Job
                key={job.id}
                title={job.title}
                type={job.type}
                url={job.url}
                company={job.company}
                experience={job.Experience}
                image={job.company_image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default JobList;

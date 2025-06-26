import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);


  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Hots Jobs of the day:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;

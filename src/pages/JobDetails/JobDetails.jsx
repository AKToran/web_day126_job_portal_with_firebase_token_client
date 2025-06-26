import React from "react";
import { Link, useLoaderData } from "react-router";
import JobsCard from "../Shared/JobsCard";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    description,
    requirements,
    salaryRange,
    category,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-base-300 m-4 md:m-20 p-4 md:p-20">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img className="w-10" src={company_logo} alt="" />
          <h2 className="card-title">
            {title}
            <div className="badge badge-sm badge-secondary">{category}</div>
          </h2>
        </div>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((requ, i) => (
            <div key={i} className="badge badge-outline">
              {requ}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/job-apply/${_id}`} className="btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

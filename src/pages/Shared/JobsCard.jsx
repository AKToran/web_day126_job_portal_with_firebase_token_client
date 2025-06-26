import React from "react";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
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
    <div className="card bg-base-100 shadow-sm border-2 border-base-300">
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
          <Link to={`jobs/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

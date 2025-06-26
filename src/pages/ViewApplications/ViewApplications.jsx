import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);

  const handleStatusChange = (e, application)=>{
    // console.log(e.target.value, application);

    axios.patch(`http://localhost:3000/applications/${application._id}`, { status : e.target.value })
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  }

  return (
    <div>
      Applications on job: {job_id}
      {applications.map((app) => (
        <p key={app._id}>
          {app.applicant} {app.github}
          <span>
            <select name="status" onChange={(e)=> handleStatusChange(e,app)} defaultValue={app.status} className="select">
              <option disabled={true}>Update Status</option>
              <option value={"Pending"}>Pending</option>
              <option value={"Rejected"}>Rejected</option>
              <option>Accepted</option>
            </select>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ViewApplications;

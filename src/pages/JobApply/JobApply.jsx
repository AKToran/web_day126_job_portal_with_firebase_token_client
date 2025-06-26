import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseAuths from "../../hooks/UseAuths";
import axios from "axios";

const JobApply = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const { user } = UseAuths();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId : id,
      applicant : user.email,
      linkedIn,
      github,
      resume
    }
    console.log(application);

    axios.post("http://localhost:3000/applications", application)
    .then(res => {
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  };

  return (
    <div className="flex justify-center my-20">
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <p className="text-3xl my-4">Apply for Job: <br /> {job?.title} </p>
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

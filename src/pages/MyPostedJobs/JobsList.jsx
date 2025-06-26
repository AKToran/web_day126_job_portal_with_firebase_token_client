import React, { use } from 'react';
import { Link } from 'react-router';

const JobsList = ({myJobsPromise}) => {
  const jobs = use(myJobsPromise);

  return (
    <div>
      {
        jobs.map(job => <p key={job._id}>{job.title} {job.description} <Link to={`/applications/${job._id}`} className='btn'>Applications</Link> </p>)
      }
    </div>
  );
};

export default JobsList;
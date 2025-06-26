import React, { Suspense } from 'react';
import UseAuths from '../../hooks/UseAuths';
import JobsList from './JobsList';
import { myJobsPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
  const {user} = UseAuths();

  return (
    <div>
      <h2>My Posted Jobs:</h2>
      <Suspense fallback={<p>loading my posted jobs .....</p>}>
        <JobsList myJobsPromise={myJobsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
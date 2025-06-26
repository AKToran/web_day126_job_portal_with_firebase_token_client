import React, { use } from 'react';

const ApplicationList = ({myApplicationsPromise}) => {

  const applications = use(myApplicationsPromise);

  return (
    <div>
      <p>Jobs applied so far: {applications.length}</p>
      {
        applications.map(appli => <li key={appli._id}>{appli.jobId}</li>)
      }
    </div>
  );
};

export default ApplicationList;
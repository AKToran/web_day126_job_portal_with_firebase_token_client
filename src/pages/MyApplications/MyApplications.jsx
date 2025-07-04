import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import UseAuths from '../../hooks/UseAuths';
import useApplicationApi from '../../api/useApplicationApi';
// import { myApplicationsPromise } from '../../api/ApplicationsApi';


const MyApplications = () => {
  const { user } = UseAuths();
  const { myApplicationsPromise } = useApplicationApi();

  return (
    <div>
      <h2>All my Applications:</h2>
      <Suspense fallback={<p>loading applications......................</p>}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
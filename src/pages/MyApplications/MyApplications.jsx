import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import UseAuths from '../../hooks/UseAuths';
import { myApplicationsPromise } from '../../api/ApplicationsApi';

const MyApplications = () => {
  const { user } = UseAuths();

  return (
    <div>
      <h2>All my Applications:</h2>
      <Suspense fallback={<p>loading applications......................</p>}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
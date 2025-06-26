import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const UseAuths = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default UseAuths;
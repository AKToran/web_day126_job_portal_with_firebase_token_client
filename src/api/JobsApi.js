export const myJobsPromise = (email, token) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`, {
    headers: {
      authorization: `Bearer ${token}`
    },
  }).then((res) => res.json());
};

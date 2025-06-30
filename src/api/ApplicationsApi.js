export const myApplicationsPromise = (email, token) =>{
  return fetch(`http://localhost:3000/applications?email=${email}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json());
}
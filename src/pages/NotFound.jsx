import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Oops... nothing found...</h2>
      <NavLink to="/">Back to home</NavLink>
    </>
  );
};
export default NotFound;

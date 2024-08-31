import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Assuming you're using react-router v6

interface WithProtectedRouteProps {
  // Define additional props if required, such as roles or permissions
}

/**
 * High-Order Component for protecting routes.
 * @param WrappedComponent The component to render if the user is authorized.
 * @param isAuthorized A boolean indicating if the user is authorized or not.
 */
function withProtectedRoute<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> {
  // The HOC returns a new functional component
  const ProtectedComponent: React.FC<T & WithProtectedRouteProps> = (props) => {
    const [isAuthorized, setAuthorized] = useState(false)
    
    if (!isAuthorized) {
      return <Navigate to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  // Return the name of the component as the display name for debugging purposes
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  ProtectedComponent.displayName = `withProtectedRoute(${displayName})`;

  return ProtectedComponent as React.FC<T>;
}

export default withProtectedRoute;

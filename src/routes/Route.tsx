import React from 'react';
import {
  Redirect,
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const redirectUserPath = user?.provider ? '/dashboard' : '/providers';

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : redirectUserPath,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

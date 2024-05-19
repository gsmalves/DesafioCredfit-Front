import React from 'react';
import {
    Route,
    RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

export const RouteAuth: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {

                return (
                    <Component />
                );
            }}
        />
    );
};


import React, { createContext, useCallback, useContext, useState } from 'react';
import {Api} from '../services/api';

interface AuthState {
    token: string;
    id: string;
}

interface LogInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
    user: {
      id: string;
    };
    logIn(credentials: LogInCredentials): Promise<void>;
    logOut(): void;
    createDeal(deal: CreateDeal): Promise<void>;
}

interface CreateDeal {

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@fair-deal:token');
        const id = localStorage.getItem('@fair-deal:id');

        if (token && id) {
            return { token, id: JSON.parse(id) };
        }

        return {} as AuthState;
    });

    const createDeal = useCallback(
        async ({ }) => {

            const response = await Api.post('deals', {
           });
        },
        [],
    );

    const logIn = useCallback(async ({ email, password }: LogInCredentials) => {
        const response = await Api.post('users-auth', {
            email,
            password,
        });

        const { token, id } = response.data;

        localStorage.setItem('@fair-deal:token', token);
        localStorage.setItem('@fair-deal:id', id);

        setData({ token, id });
    }, []);

    const logOut = useCallback(() => {
        localStorage.removeItem('@fair-deal:token');
        localStorage.removeItem('@fair-deal:id');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{ user: {id: data.id}, logIn, logOut, createDeal }}
        >
          {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used in an AuthProvider.');
    }

    return context;
}


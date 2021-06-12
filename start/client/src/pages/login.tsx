import {useMutation} from '@apollo/client';
import React from 'react';
import {useCookies} from 'react-cookie';
import {LoginForm} from '../components';
import {USER_ID, USER_TOKEN} from '../constants';
import {LOGIN_USER} from '../gql/profile';
import * as LoginTypes from './__generated__/login';

export default function Login() {
    const [cookies, setCookies] = useCookies();
    const [login, {loading, error}] = useMutation<LoginTypes.Login,
        LoginTypes.LoginVariables>(
        LOGIN_USER,
        {
            onCompleted({login}) {
                if (login) {
                    const expires = new Date(Date.now() + 1000 * 60 * 60);
                    setCookies(USER_ID, login.id as string, {
                        sameSite: 'lax',
                        expires: expires,
                    });
                    setCookies(USER_TOKEN, login.token as string, {
                        sameSite: 'lax',
                        expires: expires,
                    });
                }
            },
        });

    return <div />;
}

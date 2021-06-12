import {useApolloClient} from '@apollo/client';
import React from 'react';
import {useCookies} from 'react-cookie';
import styled from 'react-emotion';
import {isLoggedInVar} from '../cache';
import {menuItemClassName} from '../components/menu-item';
import {ReactComponent as ExitIcon} from '../assets/icons/exit.svg';
import {USER_ID, USER_TOKEN} from '../constants';

const StyledButton = styled('button')(menuItemClassName, {
    background: 'none',
    border: 'none',
    padding: 0,
});

const LogoutButton: React.FC<any> = () => {
    const [_, __, removeCookies] = useCookies();
    const client = useApolloClient();

    const onLogout = () => {
        // Evict and garbage-collect the cached user object
        client.cache.evict({fieldName: 'me'});
        client.cache.gc();
        // Remove user details from localStorage
        removeCookies(USER_TOKEN);
        removeCookies(USER_ID);
        // Set the logged-in status to false
        isLoggedInVar(false);
    };

    return (
        <StyledButton
            data-testid="logout-button"
            onClick={onLogout}
        >
            <ExitIcon />
            Logout
        </StyledButton>
    );
};

export default LogoutButton;

import React from 'react';
import { IProps } from 'models/Redirect';
import { Redirect } from 'react-router';

const redirect: React.SFC<IProps> = (props) => {
    const { route } = props;
    return (
        <>
            <Redirect to={route && route.redirectUrl} />
        </>
    )
}

export default redirect;
import React from 'react';
import NavBar from 'components/Layout/NavBar';
import Footer from 'components/Layout/Footer';
import { renderRoutes } from 'react-router-config';
import { IProps } from 'models/Redirect';

const layout: React.SFC<IProps> = (props) => {
    const { route } = props;
    return (
        <>
            <NavBar />
            <main>
                {renderRoutes(route && route.routes)}
            </main>
            <Footer />
        </>
    )
}
// {props.children}

export default layout;
import React from 'react';
import NavBar from 'components/Layout/NavBar';
import Footer from 'components/Layout/Footer';

const layout: React.SFC = (props) => {
    return (
        <>
            <NavBar />
            <main> {props.children} </main>
            <Footer />
        </>
    )
}

export default layout;
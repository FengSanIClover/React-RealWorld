import React from 'react';
// import Layout from 'components/Layout';
// import Home from 'components/Home';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import route from 'router-setting';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {renderRoutes(route)}
            </BrowserRouter>
        )
    }
}

export default App;
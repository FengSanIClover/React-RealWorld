import React from 'react';
import Layout from 'components/Layout';
import Home from 'components/Home';

class App extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Home />
                </Layout>
            </>
        )
    }
}

export default App;
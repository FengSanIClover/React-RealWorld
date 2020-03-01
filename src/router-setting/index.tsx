import { RouteConfig } from 'react-router-config';
import Layout from 'components/Layout';
import Home from 'components/Home';
import Redirect from 'components/Redirect';

const rootPath = process.env.PUBLIC_URL;

const routes: RouteConfig[] = [
    {
        path: `${rootPath}/`,
        component: Layout,
        routes: [
            {
                path: `${rootPath}/`,
                exact: true,
                redirectUrl: `${rootPath}/home`,
                component: Redirect
            },
            {
                path: `${rootPath}/home`,
                exact: true,
                component: Home
            },
            {
                redirectUrl: `${rootPath}/home`,
                component: Redirect
            }
        ]
    }
]

export default routes;
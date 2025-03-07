import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import App from "./App";

const routes = [ 
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    }
]

export default routes
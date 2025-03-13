import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Cart } from "./components/Cart/Cart";
import { ErrorPage } from "./components/Error/ErrorPage";
import App from "./App";

const routes = [ 
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]

export default routes
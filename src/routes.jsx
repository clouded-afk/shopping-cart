import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { ErrorPage } from "./components/Error/ErrorPage";
import { ItemCard } from "./components/ItemCard/ItemCard";
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
                path: 'itemcard',
                element: <ItemCard />
            }
        ]
    }
]

export default routes
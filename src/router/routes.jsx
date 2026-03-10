import { createBrowserRouter } from "react-router-dom";

import App from '../pages/App'
import Projects from '../pages/Projects'

const router = createBrowserRouter([
    {
        path: "/My-porfolio-using-react",
        element: <App />
    },
    {
        path: "/My-porfolio-using-react/projects",
        element: <Projects />
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

export const route = createBrowserRouter([
    {
        path: "",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])
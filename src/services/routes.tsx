import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/", //root path
    element: <Layout />,
    errorElement: <ErrorPage />,
    //index true means whenever user is at root path render homepage
    //we can write like this also path:"" element:<HomePage />
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/", //root path
    element: <Layout />,
    //index true means whenever user is at root path render homepage
    //we can write like this also path:"" element:<HomePage />
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/EorroPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
          index:true,
          element:<Homepage></Homepage>,
        },
        {
          path:'/books',
          element:<Books></Books>,
        },
        {
          path:'/bookDetails/:id',
          element:<BookDetails></BookDetails>,
          loader:()=>fetch('/booksData.json')
        },
  

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
 
])
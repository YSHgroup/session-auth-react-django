import {
  createBrowserRouter
} from "react-router-dom";
import App from '../App'
import ListBookComponent from "../components/ListBook";

export const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
  },
  {
    path: '/books',
    element: <ListBookComponent />
  }
])
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
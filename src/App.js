import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Statatics from './Components/Statatics/Statatics';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home></Home>, loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
    },
    { path: '/statatics', element: <Statatics></Statatics>, loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), },
    { path: '/Blog', element: <Blog></Blog> },
    {
      path: '/quiz/:id', element: <Quiz></Quiz>, loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      }
    },
    {
      path: '/*', element: <div className='py-5'>
        <h1 className='text-danger'>Page is not found: ERROR 404</h1>
        <h4 >Sorry you have entered an invalid link. please go to back.</h4>
      </div>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

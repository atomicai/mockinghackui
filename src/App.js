import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './pages/Root'
import Search from './pages/Search'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        element: <Search />,
        index: true
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

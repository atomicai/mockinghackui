import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './pages/Root'
import Search from './pages/Search'
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
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

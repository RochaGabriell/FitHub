import { createBrowserRouter } from 'react-router-dom'

import Base from '../layouts/Base'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import SearchWorkouts from '../pages/SearchWorkouts'
import Tools from '../pages/Tools'
import ChatBot from '../pages/ChatBot'
import Profile from '../pages/Account/Profile'
import Measurements from '../pages/Account/Measurements'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/workouts',
        element: <Workouts />
      },
      {
        path: '/search-workouts',
        element: <SearchWorkouts />
      },
      {
        path: '/tools',
        element: <Tools />
      },
      {
        path: '/chatbot',
        element: <ChatBot />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/measurements',
        element: <Measurements />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default routes

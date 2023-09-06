import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/main'
import TrendMovies from './components/trending-movies'
import TrendTv from './components/trending-tv'
import Favorites from './components/favorites'
import { AuthenticationForm } from './components/log-in'
import SignUp from './components/sign-up'
import TrendAll from './components/trending-all'
import { SingleMovie } from './components/for-single-movie'
import SingleTv from './components/single-tv'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/trending-movies',
    Component: TrendMovies,
  },
  {
    path: 'movies/:movieId',
    Component: SingleMovie, //TODO: implement correct component
  },
  {
    path: '/trending-tvs',
    Component: TrendTv,
  },
  {
    path: 'tvs/:tvId',
    Component: SingleTv,
  },
  {
    path: '/favorites',
    Component: Favorites,
  },
  {
    path: '/log-in',
    Component: AuthenticationForm,
  },
  {
    path: '/sign-up',
    Component: SignUp,
  },
  {
    path: '/trending-all',
    Component: TrendAll,
  },
  {
    path: '/trending-all',
    Component: TrendAll,
  },
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Unknown page</div>} />
  )
}

export default App

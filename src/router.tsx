import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Jappa } from './pages/Jappa'
import { Innovation } from './pages/Innovation'
import { Resources } from './pages/Resources'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/jappa', element: <Jappa /> },
      { path: 'innovation', element: <Innovation /> },
      { path: 'resources', element: <Resources /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
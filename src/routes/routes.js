import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/home/Home'
import FindDoctor from '../pages/findDoctor/FindDoctor'
import Bumrungrad from '../pages/about/bumrungrad/Bumrungrad'
import VissionMisson from '../pages/about/vissionMission/VissionMisson'
import FactSheet from './../pages/about/factsheet/FactSheet';
import Accreditation from '../pages/about/accreditation/Accreditation'
import Foundation from '../pages/about/Foundation/Foundation'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/find',
        element: <FindDoctor />,
      },
      {
        path: '/about_bumrungrad',
        element:<Bumrungrad/>,
      },
      {
        path: '/about_vissionMisson',
        element:<VissionMisson/> ,
      },
      {
        path: '/about_factsheet',
        element:<FactSheet/> ,
      },
      {
        path: '/about_accreditation',
        element:<Accreditation/> ,
      },
      {
        path: '/about_foundation',
        element:<Foundation/> ,
      },
    ],
  },
])

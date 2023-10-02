import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/home/Home'
import FindDoctor from '../pages/findDoctor/FindDoctor'
import DoctorInfo from '../pages/findDoctor/DoctorInfo'
import Bumrungrad from '../pages/about/bumrungrad/Bumrungrad'
import VissionMisson from '../pages/about/vissionMission/VissionMisson'
import FactSheet from '../pages/about/factsheet/FactSheet'
import Accreditation from '../pages/about/accreditation/Accreditation'
import Foundation from '../pages/about/Foundation/Foundation'
<<<<<<< HEAD
import ContactUs from '../pages/home/ContactUs'
=======
import WeAccept from '../pages/insurance/WeAccept'
import GoodVibes from '../pages/insurance/GoodVibes'
import PackagePromotion from '../pages/insurance/PackagePromotion'
>>>>>>> fa452fab57c066800fe06f8ddeb33c85d53eccd2

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
      {
        path: '/doctor_details/:id',
        element: <DoctorInfo />,
      },
      {
<<<<<<< HEAD
        path: '/locate_us',
        element: <ContactUs />,
=======
        path: '/insurance_weaccept',
        element: <WeAccept />,
      },
      {
        path: '/insurance_goodVibes',
        element: <GoodVibes />,
      },
      {
        path: '/insurance_packagePromotion',
        element: <PackagePromotion />,
>>>>>>> fa452fab57c066800fe06f8ddeb33c85d53eccd2
      },
    ],
  },
])

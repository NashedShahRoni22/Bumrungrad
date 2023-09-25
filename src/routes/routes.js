import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/home/Home'
import FindDoctor from '../pages/findDoctor/FindDoctor'
import Bumrungrad from '../pages/bumrungrad/Bumrungrad'
import DoctorInfo from '../pages/findDoctor/DoctorInfo'

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
        element: <Bumrungrad />,
      },
      {
        path: '/doctor_details/:id',
        element: <DoctorInfo />,
      },
    ],
  },
])

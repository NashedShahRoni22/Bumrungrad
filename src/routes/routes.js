import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import FindDoctor from "../pages/findDoctor/FindDoctor";
import DoctorInfo from "../pages/findDoctor/DoctorInfo";
import Bumrungrad from "../pages/about/bumrungrad/Bumrungrad";
import VissionMisson from "../pages/about/vissionMission/VissionMisson";
import FactSheet from "../pages/about/factsheet/FactSheet";
import Accreditation from "../pages/about/accreditation/Accreditation";
import Foundation from "../pages/about/Foundation/Foundation";
import WeAccept from "../pages/insurance/WeAccept";
import GoodVibes from "../pages/insurance/GoodVibes";
import PackagePromotion from "../pages/insurance/PackagePromotion";
import Appointment from "../pages/appointment/Appointment";
import SendQuery from "../pages/SendQuery/SendQuery";
import ContactUs from "../pages/contactUs/ContactUs";
import CheckUp from "../pages/checkup/CheckUp";
import ViewAllCenters from "../pages/ViewAllCenters/ViewAllCenters";
import SingleCenter from "../pages/ViewAllCenters/SingleCenter";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ParentPackages from "../pages/packages/ParentPackages";
import ChildPackage from "../pages/packages/ChildPackage";
import ChildPackageDetails from "../pages/packages/ChildPackageDetails";
import PrivateRoute from "../private/PrivateRoute";
import User from "../pages/user/User";
import TeleMedicine from "../pages/home/modalFrom/TeleMedicine";
import MedicalRecords from "../pages/home/modalFrom/MedicalRecords";
import OrderMedicine from "../pages/home/modalFrom/OrderMedicine";
import VisaProcessing from "../pages/home/modalFrom/VisaProcessing";
import NewsAll from "../pages/home/NewsAll";
import OneNews from "../pages/home/OneNews";
import AllBlogs from "../pages/home/AllBlogs";
import OneBlog from "../pages/home/OneBlog";
import NotFound from "../shared/NotFound/NotFound";
import Services from "../pages/home/Services";
import Treatments from "../pages/treatments/Treatments";
import TermsConditions from "../pages/Extras/TermsConditions";
import PrivacyPolicy from "../pages/Extras/PrivacyPolicy";

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
        path: '/doctors',
        element: <FindDoctor />,
      },
      {
        path: '/about-bumrungrad',
        element: <Bumrungrad />,
      },
      {
        path: '/about-vision-and-misson',
        element: <VissionMisson />,
      },
      {
        path: '/about-factsheet',
        element: <FactSheet />,
      },
      {
        path: '/about-accreditation',
        element: <Accreditation />,
      },
      {
        path: '/about-foundation',
        element: <Foundation />,
      },
      {
        path: '/doctors/:slug',
        element: <DoctorInfo />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/insurance-we-accept',
        element: <WeAccept />,
      },
      {
        path: '/insurance-goodVibes',
        element: <GoodVibes />,
      },
      {
        path: '/insurance-package-promotion',
        element: <PackagePromotion />,
      },
      {
        path: '/treatments',
        element: <Treatments />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/appointment',
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: '/telemedicine',
        element: (
          <PrivateRoute>
            <TeleMedicine />
          </PrivateRoute>
        ),
      },
      {
        path: '/medical-record',
        element: (
          <PrivateRoute>
            <MedicalRecords />
          </PrivateRoute>
        ),
      },
      {
        path: '/order-medicine',
        element: (
          <PrivateRoute>
            <OrderMedicine />
          </PrivateRoute>
        ),
      },
      {
        path: '/visaprocessing',
        element: (
          <PrivateRoute>
            <VisaProcessing />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-profile',
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: '/send-query',
        element: <SendQuery />,
      },
      {
        path: '/check-up',
        element: (
          <PrivateRoute>
            <CheckUp />
          </PrivateRoute>
        ),
      },
      {
        path: '/clinic-centers',
        element: <ViewAllCenters />,
      },
      {
        path: '/clinic-centers/:slug',
        element: <SingleCenter />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/packages',
        element: <ParentPackages />,
      },
      {
        path: '/news',
        element: <NewsAll />,
      },
      {
        path: '/one-News/:id',
        element: <OneNews />,
      },
      {
        path: '/blogs',
        element: <AllBlogs />,
      },
      {
        path: '/our-services',
        element: <Services />,
      },
      {
        path: '/blogs/:slug',
        element: <OneBlog />,
      },
      {
        path: '/package-details/:slug',
        element: <ChildPackage />,
      },
      {
        path: '/sub-package-details/:slug',
        element: <ChildPackageDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

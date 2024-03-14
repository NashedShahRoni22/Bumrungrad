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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find",
        element: <FindDoctor />,
      },
      {
        path: "/about_bumrungrad",
        element: <Bumrungrad />,
      },
      {
        path: "/about_vissionMisson",
        element: <VissionMisson />,
      },
      {
        path: "/about_factsheet",
        element: <FactSheet />,
      },
      {
        path: "/about_accreditation",
        element: <Accreditation />,
      },
      {
        path: "/about_foundation",
        element: <Foundation />,
      },
      {
        path: "/doctor_details/:slug/:id",
        element: <DoctorInfo />,
      },
      {
        path: "/locate_us",
        element: <ContactUs />,
      },
      {
        path: "/insurance_weaccept",
        element: <WeAccept />,
      },
      {
        path: "/insurance_goodVibes",
        element: <GoodVibes />,
      },
      {
        path: "/insurance_package_promotion",
        element: <PackagePromotion />,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: "/telemedicine",
        element: (
          <PrivateRoute>
            <TeleMedicine />
          </PrivateRoute>
        ),
      },
      {
        path: "/medicalRecord",
        element: (
          <PrivateRoute>
            <MedicalRecords />
          </PrivateRoute>
        ),
      },
      {
        path: "/orderMedicine",
        element: (
          <PrivateRoute>
            <OrderMedicine />
          </PrivateRoute>
        ),
      },
      {
        path: "/visaprocessing",
        element: (
          <PrivateRoute>
            <VisaProcessing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_profile",
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "/send_query",
        element: <SendQuery />,
      },
      {
        path: "/check_up",
        element: (
          <PrivateRoute>
            <CheckUp />
          </PrivateRoute>
        ),
      },
      {
        path: "/clinic_centers",
        element: <ViewAllCenters />,
      },
      {
        path: "/clinic_centers/:id",
        element: <SingleCenter />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/packages",
        element: <ParentPackages />,
      },
      {
        path: "/allNews",
        element: <NewsAll />,
      },
      {
        path: "/one-News/:id",
        element: <OneNews />,
      },
      {
        path: "/allblog",
        element: <AllBlogs />,
      },
      {
        path: "/one-Blog/:id",
        element: <OneBlog />,
      },
      {
        path: "/package_details/:id",
        element: <ChildPackage />,
      },
      {
        path: "/childPackage_details/:id",
        element: <ChildPackageDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

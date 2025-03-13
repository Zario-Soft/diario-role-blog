import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import ContactForm from "../features/contact-form/contact-form.page";
import PartnerContactForm from "src/features/contact-form/partner-contact-form.page";

export enum pageRoutes {
  FORMULARIO = '/formulario',
  ANUNCIE = '/anuncie',
}

export const router = createBrowserRouter([
    {
      path: "/",
      element: (<App />),
    },
    {
      path: pageRoutes.FORMULARIO,
      element: (<ContactForm />)
    },
    {
      path: pageRoutes.ANUNCIE,
      element: (<PartnerContactForm />)
    },    
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);
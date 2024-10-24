import { Home, Profile, SignIn, SignUp , Services,ContactUs,Admee,FuneralGroundSearch,FuneralGroundDetails,FuneralGroundDataCollectionForm,AdmeeDataCollectionForm, CCDesignCatalogueForm , CCRentalProductUploadForm} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  UsersIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

import { FaSearch } from 'react-icons/fa';
//import { FuneralGroundSearch } from "./pages/funeralGroundSearch";
//import {FuneralGroundDetails}



export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
    visible: true,
  },
  {
    icon: CheckBadgeIcon,
    name: "services",
    path: "/services",
    element: <Services />,
    visible: true,
  },
  {
    icon: UsersIcon,
    name: "Contact Us",
    path: "/contact",
    element: <ContactUs />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "Admee",
    path: "/admee",
    element: <Admee />,
    visible: false,
  },
  {
    icon: FaSearch,
    name: "FuneralGroundSearch",
    path: "/funeralground",
    element: <FuneralGroundSearch />,
    visible: true,
  },
  {
    icon: FaSearch,
    name: "FuneralGroundDetails",
    path: "/funeralgrounddetails",
    element: <FuneralGroundDetails />,
    visible: false,
  },
  {
    icon: "",
    name: "FuneralGroundDataCollectionForm",
    path: "/funeralground/form",
    element: <FuneralGroundDataCollectionForm />,
    visible: false,
  },
  {
    icon: "",
    name: "AdmeeDataCollectionForm",
    path: "/admee/form",
    element: <AdmeeDataCollectionForm />,
    visible: false,
  },
  {
    icon: "",
    name: "CCDesignCatalogueForm",
    path: "/cc/design/form",
    element: <CCDesignCatalogueForm />,
    visible: false,
  },
  {
    icon: "",
    name: "CCRentalProductUploadForm",
    path: "/cc/rental/product/upload/form",
    element: <CCRentalProductUploadForm />,
    visible: false,
  },
  // {
  //   icon: NewspaperIcon,
  //   name: "ClientOnboarding",
  //   path: "/form",
  //   element: <ClientOnboardingForm />,
  // },
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
    visible: false,
  },
];

export default routes;

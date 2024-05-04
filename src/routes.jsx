import { Home, Profile, SignIn, SignUp , Services,ContactUs,Admee} from "@/pages";
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
import { FuneralGroundSearch } from "./pages/funeralGroundSearch";



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
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "Contact Us",
    path: "/contact",
    element: <ContactUs />,
    visible: false,
  },
  // {
  //   icon: UsersIcon,
  //   name: "Admee",
  //   path: "/admee",
  //   element: <Admee />,
  // },
  {
    icon: FaSearch,
    name: "FuneralGroundSearch",
    path: "/funeralground",
    element: <FuneralGroundSearch />,
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

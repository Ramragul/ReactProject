import { Home, Profile, SignIn, SignUp , Services,ContactUs} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  UsersIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: CheckBadgeIcon,
    name: "services",
    path: "/services",
    element: <Services />,
  },
  {
    icon: UsersIcon,
    name: "Contact Us",
    path: "/contact",
    element: <ContactUs />,
  },
  {
    icon: NewspaperIcon,
    name: "ClientOnboarding",
    path: "/form",
    element: <ClientOnboardingForm />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;

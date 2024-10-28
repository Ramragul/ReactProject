import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  PhoneArrowUpRightIcon,
  PencilSquareIcon
  
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "blue",
    title: "Funeral Ground Search",
    icon: StarIcon,
    navPage: "/funeralground",
    description:"Search Your Nearby Funeral Ground",
  },
  {
    color: "red",
    title: "Online Booking",
    icon: ArrowPathIcon,
    navPage: "/contact",
    description:
      "Submit the Form with Details. Our Team will Call You Within 5 Min",
  },
  {
    color: "teal",
    title: "Booking Via Call",
    icon: PhoneArrowUpRightIcon,
    //navPage: "",
    description:
      "Call us for Booking +1 12345678",
  },
  
];

export default featuresData;

import {
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  CogIcon,
  ShoppingCartIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
export const navList = [
  {
    id: 0,
    title: "Dashboar",
    icon: <BookOpenIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Products",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Customer",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Help",
    icon: <ChatBubbleBottomCenterIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Online Stores",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "Apps",
    icon: <XCircleIcon className="nav-icon" />,
  },
];

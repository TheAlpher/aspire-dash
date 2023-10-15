import homeSvg from "../assets/Home.svg?react";
import cardSvg from '../assets/Card.svg?react';
import paymentSvg from "../assets/Payments.svg?react";
import creditSvg from "../assets/Credit.svg?react";
import AccountSvg from "../assets/Account.svg?react";
const menuRoutes: Record<string, any>[] = [
  {
    key: "/dashboard/home",
    label: "Home",
    path: "/dashboard/home",
    icon: homeSvg,
  },  {
    key: "/dashboard/cards",
    label: "Cards",
    path: "/dashboard/cards",
    icon: cardSvg,
  },  {
    key: "/dashboard/payment",
    label: "Payment",
    path: "/dashboard/payment",
    icon: paymentSvg,
  },  {
    key: "/dashboard/credit",
    label: "Credit",
    path: "/dashboard/credit",
    icon: creditSvg,
  }, {
    key: "/dashboard/settings",
    label: "Settings",
    path: "/dashboard/settings",
    icon: AccountSvg,
  },
];

export default menuRoutes;

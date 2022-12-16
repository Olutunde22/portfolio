import { IconName } from "../types";

interface Navigation {
    name: string;
    path: string;
    icon: IconName;
}

export const NavBar: Navigation[] = [
    {
        name: "Home",
        path: "/",
        icon: "HomeModernIcon",
    },
    {
        name: "About",
        path: "/about-me",
        icon: "UserIcon",
    },
    {
        name: "Projects",
        path: "/projects",
        icon: "ReceiptPercentIcon",
    },
];


import { RiUserSearchLine } from 'react-icons/ri';

export const menues = [
    {
        menues: [
            {
                id: 1,
                path: "/",
                headerIcon: <RiUserSearchLine />,
                menuHeading: "Dashboard",
                heading: "Dashboard",
                activeIcon: <RiUserSearchLine />,
                icon: <RiUserSearchLine />,
                subMenu: [],
            },
            {
                id: 2,
                path: "/vendersearch",
                headerIcon: <RiUserSearchLine />,
                menuHeading: "Venders Search",
                heading: "Vendors Search",
                activeIcon: <RiUserSearchLine />,
                icon: <RiUserSearchLine />,
                subMenu: ["/vendersearch"],
            },
        ],
    },
    {
        head: "Manage",
        menues: [
            {
                id: 1,
                path: "/vendors",
                headerIcon: "home-blue.png",
                menuHeading: "Vendors",
                heading: "Vendors",
                activeIcon: "home-white.png",
                icon: "home.svg",
                subMenu: [],
            },
            {
                id: 2,
                path: "/consultants",
                headerIcon: "apartment-blue.png",
                menuHeading: "Consultants",
                heading: "Consultants",
                activeIcon: "apartment-white.png",
                icon: "apartment.svg",
                subMenu: ["/consultants"],
            },
            {
                id: 3,
                path: "/jobs",
                headerIcon: "home-user-blue.png",
                menuHeading: "Jobs",
                heading: "Jobs",
                activeIcon: "home-user-white.png",
                icon: "home-user.svg",
                subMenu: ["/jobs"],
            },
            {
                id: 4,
                path: "/members",
                headerIcon: "medication-blue.png",
                menuHeading: "Members",
                heading: "Members",
                activeIcon: "medication-white.png",
                icon: "medication.svg",
                subMenu: ["/members"],
            },
            {
                id: 5,
                path: "/companyprofile",
                headerIcon: "medication-blue.png",
                menuHeading: "Company Profile",
                heading: "Company Profile",
                activeIcon: "medication-white.png",
                icon: "medication.svg",
                subMenu: ["/companyprofile"],
            },
        ],
    },
    {
        head: "Settings",
        menues: [
            {
                path: "/audithistory",
                headerIcon: "grid-blue.png",
                menuHeading: "Audit History",
                heading: "Audit History",
                activeIcon: "grid-white.svg",
                icon: "grid.png",
                subMenu: ["/audithistory"],
            },
            {
                path: "/settings",
                headerIcon: "toggle-blue.png",
                menuHeading: "settings",
                heading: "settings",
                activeIcon: "toggle-white.png",
                icon: "toggle.svg",
                subMenu: ["/settings"],
            },
        ],
    },
    {
        head: "Create",
        menues: [
            {
                path: "/createcompany",
                headerIcon: "grid-blue.png",
                menuHeading: "Create Company",
                heading: "Create Company",
                activeIcon: "grid-white.svg",
                icon: "grid.png",
                subMenu: ["/createcompany"],
            }
        ],
    },
];
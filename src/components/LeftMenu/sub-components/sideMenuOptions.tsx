import UiDashboard from "../../_examples/UiDashboard";
import UiProfile from "../../_examples/UiProfile";

export interface IOptions {
    id: number;
    label: string;
    url: string;
    subOptions?: ISubOptions[] | any;
    component?: any;
}

export interface ISubOptions {
    id: number;
    label: string;
    url: string;
    component?: any;
}

const sideMenuOptions: IOptions[] = [
    {
        id: 0,
        label: "Dashboard",
        url: "/example/dashboard",
        component: UiDashboard,
    },
    {
        id: 1,
        label: "Profile",
        url: "/example/profile",
        component: UiProfile,
    },
    {
        id: 2,
        label: "Animals",
        url: "/example/animals",
        subOptions: [
            {
                id: 0,
                label: "Dogs",
                url: "/example/animals/dogs",
            },
            {
                id: 1,
                label: "Cats",
                url: "/example/animals/cats",
            },
            {
                id: 2,
                label: "Birds",
                url: "/example/animals/birds",
            },
        ],
    },
    {
        id: 3,
        label: "Accounts",
        url: "/example/accounts",
    },
    {
        id: 4,
        label: "Departments",
        url: "/example/departments",
    },
];

export default sideMenuOptions;
import React, { useState } from "react";
import { IOptions } from "../sub-components/sideMenuOptions";

import LeftMenu from "../sub-components/LeftMenu";
import { useLocation } from "react-router-dom";
import UiCustomerProfile from "../../_examples/UiCustomerProfile";
import UiCustomerMemberships from "../../_examples/UiCustomerMemberships";


interface ISideMenuProps {
    url: string;
    label: string;
    component?: any;
}

interface IProps {
    pageTitle: string;
    options: any;
}

const SideMenuIndex = (props: IProps) => {
    const [ ...options ] = props.options;

    const [path, setPath] = useState<ISideMenuProps>({
        url: useLocation().pathname,
        label: "",
        component: undefined,
    });
    
    function updatePathState(newState: Partial<ISideMenuProps>) {
        setPath((cur: ISideMenuProps) => {
            return { ...cur, ...newState};
        });
    }

    function handleRouting(obj: IOptions) {
        console.log("Handle Routing... ", obj);
        updatePathState({
            url: obj.url,
            label: obj.label,
            component: obj.component,
        });
    }

    const displayPage = () => {
        console.log(path);
        switch(path.label) {
            case 'General':
                return ( <UiCustomerProfile /> );
            case 'Folders':
                return ( <UiCustomerMemberships /> );
        }
        
    };

    return (
        <div className="side-menu-page">
            <h1>{props.pageTitle}</h1>
            {/* <SideMenu pageTitle={"Settings"} options={options} /> */}
            <LeftMenu 
                pageLabel={"Settings"}
                options={options}
                setRoute={handleRouting}
            >
                {displayPage()}
            </LeftMenu>
        </div>
    );
};

export default SideMenuIndex;
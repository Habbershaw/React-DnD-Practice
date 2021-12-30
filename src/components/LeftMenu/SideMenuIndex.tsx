import React from "react";
import SideMenu from "./sub-components/SideMenu";
import sideMenuOptions from "./sub-components/sideMenuOptions";


const SideMenuIndex = () => {

    return (
        <div className="side-menu-page">
            <SideMenu pageTitle={"Settings"}options={sideMenuOptions} />
        </div>
    );
};


export default SideMenuIndex;
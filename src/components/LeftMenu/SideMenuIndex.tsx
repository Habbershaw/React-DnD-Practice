import React, { useState } from "react";
import SideMenu from "./sub-components/SideMenu";
import sideMenuOptions, { IOptions } from "./sub-components/sideMenuOptions";

import "./leftMenu.scss";

const SideMenuIndex = () => {
    const [displayState, setDisplayState] = useState<IOptions>();

    function pathHandler(obj: any) {
        console.log(obj);
        setDisplayState(obj);
    }

    const displayPage = () => {
        const TheComponent = displayState?.component;
        
        if(TheComponent !== undefined) {
            return (<TheComponent />);
        } else { 
            return <></>;
        }
    };

    return (
        <div className="side-menu-page">
            <SideMenu 
                pageTitle={"Settings"}
                options={sideMenuOptions}
                togglable={true} 
                pathHandler={pathHandler}
            >
                {displayPage()}
            </SideMenu>
        </div>
    );
};


export default SideMenuIndex;
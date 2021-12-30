import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IOptions } from "../sub-components/sideMenuOptions";
import LeftMenu from "../sub-components/LeftMenu";

import "../leftMenu.scss";

interface ISideMenuProps {
    url: string;
    label: string;
    component?: any;
    toggled?: boolean;
}

interface IProps {
    pageTitle: string;
    options: any;
    togglable: boolean;
    pathHandler: (obj: any) => void;
    children?: React.ReactNode;
}

const SideMenuIndex = (props: IProps) => {
    const [open, setOpen] = useState(props.togglable ? false : true);
    const [ ...options ] = props.options;

    const [path, setPath] = useState<ISideMenuProps>({
        url: useLocation().pathname,
        label: "",
        component: undefined,
        toggled: open,
    });
    
    function updatePathState(newState: Partial<ISideMenuProps>) {
        setPath((cur: ISideMenuProps) => {
            return { ...cur, ...newState};
        });
    }

    function handleRouting(obj: IOptions) {
        props.pathHandler(obj);

        if(!obj.subOptions) {
            console.log("Handle Routing... ", obj);

            updatePathState({
                url: obj.url,
                label: obj.label,
                component: obj.component,
            });
            if(props.togglable) {
                setOpen(!open);
            }
        } else {
            updatePathState({
                url: obj.url,
                label: obj.label,
            });
        }
    }

    function clickHandler() {
        if(props.togglable) {
            setOpen(!open);
        }
    }
    return (
        <>
            {props.togglable && 
                <button onClick={clickHandler}>Nav Toggle</button>
            }
            {open &&
            <div className="left-menu-container">
                <h1>{props.pageTitle}</h1>
                <LeftMenu
                    pageLabel={"Settings"}
                    options={options}
                    setRoute={handleRouting}
                /> 
            </div>
            }
            <div className="left-menu-children-container">
                {props.children}
            </div>
        </>
    );
};

export default SideMenuIndex;
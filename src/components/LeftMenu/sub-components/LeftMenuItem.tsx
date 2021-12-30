import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../leftMenu.scss";

interface ILeftMenuItem {
    pageTitle?: string;
    label: string;
    url: string;
    handleClick: (obj: any) => void;
    hasSubOptions?: boolean;
    subOptions?: any;
    children?: React.ReactNode;
}

const LeftMenuItem = (props: ILeftMenuItem) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="left-menu-item" onClick={props.handleClick}>
            <Link 
                to={!props.subOptions ? props.url : "#"} 
                className="item-anchor" 
                onClick={() => !props.subOptions && setOpen(!open)}
            >
                {props.label}
            </Link>
            {open && props.children}
        </div>
    );
};

export default LeftMenuItem;
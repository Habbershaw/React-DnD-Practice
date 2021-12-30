import React from "react";
import { IOptions, ISubOptions } from "./sideMenuOptions";
import LeftMenuItem from "./LeftMenuItem";

import "../leftMenu.scss";

interface IProps {
    pageLabel: string;
    options: IOptions[];
    setRoute: (obj: any) => void;
}

const LeftMenu = (props: IProps) => {

    const [...options] = props.options;

    // function clickHandler(obj: any) {
    //     console.log(obj);
    //     props.setRoute(obj);
    // }

    return (
        <>
            {options.map((option: IOptions, index: number) => {
                return (
                    <LeftMenuItem
                        pageTitle={""}
                        key={index} 
                        label={option.label} 
                        url={option.url}
                        handleClick={() => props.setRoute(option)}
                    >
                        {option.subOptions &&
                            option.subOptions.map((subOption: ISubOptions, subIndex: number) => {
                                return (
                                    <LeftMenuItem
                                        key={subIndex}
                                        label={subOption.label} 
                                        url={subOption.url} 
                                        handleClick={() => props.setRoute(subOption)}
                                    />
                                );
                            })
                        }
                    </LeftMenuItem>
                );
            })}
        </>
    );
};

export default LeftMenu;
import {SvgSelector} from "../svgSelector/SvgSelector";
import React from "react";

type RepairComponentPropsType = {
    className?: string
}

export const RepairComponent = (props: RepairComponentPropsType) => {
    return <div style={{textAlign: 'center'}} className={props.className}>
        <SvgSelector svgName={"Repair"}/>
        <p>This page is under development.
            <br/>
            <a style={{color: 'black'}}
               href={'https://github.com/Traihel/Social-network-TS'}
            >Read more on GitHub</a>
        </p>
    </div>
}
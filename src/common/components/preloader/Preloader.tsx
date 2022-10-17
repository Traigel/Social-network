import preLoader from "../../../assets/images/loader.gif";
import React from "react";

export function Preloader() {
    return (
        <div>
            <img alt={'preLoader'} src={preLoader}/>
        </div>
    )
}
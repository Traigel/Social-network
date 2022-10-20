import React from "react";
import styles from "./InfoContent.module.scss"
import {RepairComponent} from "../../../common/components/RepairComponent/RepairComponent";

export const InfoContent = () => {
    return <div className={styles.infoContentComponent}>
        <div className={styles.repairBox}>
            <RepairComponent text={'The project is under development. Some features may be unavailable.'}/>
        </div>
        InfoContent.tsx
    </div>
}
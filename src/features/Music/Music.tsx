import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

class MusicAPI extends React.Component {
    render() {
        return <div>
            The project is under development.
        </div>
    }
}

export const MusicContainer = compose<React.ComponentType>(withRouter, withAuthRedirect)(MusicAPI)
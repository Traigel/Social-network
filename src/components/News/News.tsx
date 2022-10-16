import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class NewsAPI extends React.Component {
    render() {

        return <div>
            The project is under development.
        </div>
    }
}

export const NewsContainer = compose<React.ComponentType>(withRouter,withAuthRedirect)(NewsAPI)
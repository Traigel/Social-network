import React from "react";
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode

                    ? <span
                        onDoubleClick={this.activateEditMode.bind(this)}
                    >{this.props.status ? this.props.status : '...'}</span>

                    : <input
                        value={this.props.status}
                        onBlur={this.deactivateEditMode.bind(this)}
                        autoFocus={true}
                    />
                }

            </div>
        )
    }
}
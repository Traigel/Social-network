import React from "react";
import style from "./Users.module.css";
import usersImg from "../../assets/images/usersImg.jpg";
import axios from "axios";

export class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsersAC(response.data.items)
                    this.props.setTotalUsersCountAC(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsersAC(response.data.items)
                }
            )
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>

            <div>
                {pages.map((el, i) => {
                    return el <= 10 && <span
                        key={i}
                        className={this.props.currentPage === el ? style.selectPage : ''}
                        onClick={() => this.onPageChanged(el)}
                    >{el}</span>
                })}...
            </div>

            {this.props.users.map(el => {

                const onClickFollowHandler = () => this.props.usFollow(el.id)
                const onClickUnFollowHandler = () => this.props.follow(el.id)

                return (
                    <div key={el.id} className={style.items}>
                        <div className={`${style.item} ${style.itemImgButton}`}>
                            <div>
                                <img style={{width: '50px', borderRadius: '20px'}}
                                     alt={'ava'}
                                     src={el.photos.small !== null ? el.photos.small : usersImg}/>
                            </div>
                            <div>
                                {el.followed
                                    ?
                                    <button onClick={onClickFollowHandler}>Follow</button>
                                    :
                                    <button onClick={onClickUnFollowHandler}>UnFollow</button>
                                }
                            </div>
                        </div>
                        <div className={`${style.item} ${style.itemInfo}`}>
                            <div className={style.item}>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </div>
                            <div className={`${style.item} ${style.location}`}>
                                {/*<div>{el.location.city}</div>*/}
                                {/*<div>{el.location.country}</div>*/}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    }
}
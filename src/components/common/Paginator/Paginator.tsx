import style from "./Paginator.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (el: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map((el, i) => {
            return <span
                key={i}
                className={props.currentPage === el ? style.selectPage : ''}
                onClick={() => props.onPageChanged(el)}
            >{el}</span>
        })}
    </div>
}
import styles from "./Paginator.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    page: number
    pageCount: number
    pageCountOptions: number[]
    totalItemsCount: number
    onPageCallBack: (el: number) => void
    onPageCountCallBack: (el: number) => void
}

export const Pagination = ({
                               page,
                               pageCount,
                               totalItemsCount,
                               onPageCallBack,
                               onPageCountCallBack,
                               pageCountOptions
                           }: PaginatorPropsType) => {

    const [visibility, setVisibility] = useState<boolean>(false)

    const pagesCount = Math.ceil(totalItemsCount / pageCount)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const pageCountHandler = () => {
        setVisibility(!visibility)
    }

    const onClickStartHandler = () => {
        onPageCallBack(1)
    }

    const onClickBackHandler = () => {
        if (page > 1) {
            onPageCallBack(page - 1)
        }
    }

    const onClickNextHandler = () => {
        if (page < pagesCount) {
            onPageCallBack(page + 1)
        }
    }

    const onClickEndHandler = () => {
        onPageCallBack(pagesCount)
    }

    return <div className={styles.paginationBox}>
        <div className={styles.pageCountBox}>
            <div>
                Rows per page: <div
                className={styles.pageCount}
                onClick={pageCountHandler}
            >{pageCount} &dArr;</div>
            </div>
            {visibility &&
                <div className={styles.pageCountOptions}>
                    {pageCountOptions.map((el, index) => {
                        const onClickHandler = () => {
                            onPageCountCallBack(el)
                            setVisibility(false)
                        }
                        return <div
                            key={index}
                            className={styles.el}
                            onClick={onClickHandler}
                        >
                            {el}
                        </div>
                    })}
                </div>
            }
        </div>
        <div className={styles.pagBox}>
            <div className={styles.arrowsBox}>
                <span onClick={onClickStartHandler}>&laquo;</span>
                <span onClick={onClickBackHandler}>{'<'}</span>
            </div>
            {pages.filter(el => {
                const rightPages = page + 5
                const leftPages = page - 5
                const endPages = pagesCount - page
                if (endPages < 5) {
                    return el > pagesCount - 9
                }
                if (page < 5) {
                    return el < 10
                }
                return el < rightPages && el > leftPages
            }).map((el, i) => <span
                key={i}
                className={page === el ? styles.selectPage : ''}
                onClick={() => onPageCallBack(el)}
            >{el}</span>)}
            <div className={styles.arrowsBox}>
                <span onClick={onClickNextHandler}>{'>'}</span>
                <span onClick={onClickEndHandler}>&raquo;</span>
            </div>
        </div>
    </div>
}
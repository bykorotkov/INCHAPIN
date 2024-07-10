import React from "react"
import Button from "@/components/ui/Button/Button"
import classes from "./ProductItem.module.scss"
import cn from "classnames"

const ProductItem = ({ product, className, onAdd }: any) => {
    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <div className={cn(classes.product, className)}>
            <div className={classes.img} />
            <div className={classes.title}>{product.title}</div>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.price}>
                <span>
                    Стоимость: <b>{product.price}</b>
                </span>
            </div>
            <Button
                className={classes.addBtn}
                onClick={onAddHandler}
            >
                Добавить в корзину
            </Button>
        </div>
    )
}

export default ProductItem

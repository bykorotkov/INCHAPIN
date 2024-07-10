import React, { useCallback, useEffect, useState } from "react"
import ProductItem from "@/components/pages/MainPage/Products/ProductItem/ProductItem"
import { useTelegram } from "@/hooks/useTelegram"
import classes from "./Products.module.scss"

interface Product {
    id: string
    title: string
    price: number
    description: string
}

const products: Product[] = [
    { id: "1", title: "Джинсы", price: 5000, description: "Синего цвета, прямые" },
    { id: "2", title: "Куртка", price: 12000, description: "Зеленого цвета, теплая" },
    { id: "3", title: "Джинсы 2", price: 5000, description: "Синего цвета, прямые" },
    { id: "4", title: "Куртка 8", price: 122, description: "Зеленого цвета, теплая" },
    { id: "5", title: "Джинсы 3", price: 5000, description: "Синего цвета, прямые" },
    { id: "6", title: "Куртка 7", price: 600, description: "Зеленого цвета, теплая" },
    { id: "7", title: "Джинсы 4", price: 5500, description: "Синего цвета, прямые" },
    { id: "8", title: "Куртка 5", price: 12000, description: "Зеленого цвета, теплая" }
]

const getTotalPrice = (items: Product[] = []) => {
    return items.reduce((acc, item) => {
        return (acc += item.price)
    }, 0)
}

const Products = () => {
    const { webApp, queryId } = useTelegram()
    const [addedItems, setAddedItems] = useState<Product[]>([])

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        }
        fetch("http://85.119.146.179:8000/web-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        // @ts-ignore
        webApp?.onEvent("mainButtonClicked", onSendData)
        return () => {
            // @ts-ignore
            webApp?.offEvent("mainButtonClicked", onSendData)
        }
    }, [onSendData])

    const onAdd = (product: Product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            webApp?.MainButton.hide()
        } else {
            webApp?.MainButton.show()
            // @ts-ignore
            webApp?.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={classes.list}>
            {products.map((item) => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={classes.item}
                />
            ))}
        </div>
    )
}

export default Products

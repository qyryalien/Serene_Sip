import React from "react";
import data from '../../db/ProductsList.json';
import { ProductCard } from "../ProductCard/ProductCard";
// слой с функция для получения данных, написать функционал для получения  
export function GridItems() {
    return (
        <div className='grid xxs:grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full'>
            {data.products.map((product, index) => <ProductCard key={product.id} product={product} index={index}></ProductCard>)}
        </div>
    )
}
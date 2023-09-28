

import React, { useEffect, useState } from "react";
import './ProductsList.scss';

export const ProductsList = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('products.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <header className='header'>
                <div className='header__text'>
                    <h2>Результат</h2>
                    <p>Мы подобрали для вас наиболее подходящие средства</p>
                </div>
            </header>
            <section className="wrapper">
                {data.map((item) => {
                    return (
                        <div className='card-list-container '
                            key={item.id}>
                            <div >
                                <img
                                    src={item.image}
                                    width='100' height='150' alt={item.title} />
                            </div>
                            <div >
                                {item.title}
                            </div>
                            <div>{item.oldPrice}</div>
                            <div>
                                {item.price} руб.
                            </div>

                        </div>
                    )
                })}
            </section>
        </>
    )
}


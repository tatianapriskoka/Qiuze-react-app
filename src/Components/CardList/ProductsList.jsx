import React, { useEffect, useState } from "react";
import { ReactComponent as LikeButton } from '../assets/like-empty.svg';
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
                        <section className='card-list__container '
                            key={item.id}>
                            <div >
                                <div>
                                    <img
                                        src={item.image}
                                        width='100' height='150' alt={item.title} />
                                    <LikeButton
                                        height={24} width={24} opacity={0.5} /></div>

                            </div>
                            <div className='card-list__title'>
                                {item.title}
                            </div>
                            <div>{item.oldPrice && item.oldPrice}</div>
                            <div>
                                {item.price} руб.
                            </div>

                        </section>
                    )
                })}
            </section>
        </>
    )
}


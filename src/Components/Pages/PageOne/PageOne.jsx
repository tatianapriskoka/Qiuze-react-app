import './PageOne.scss';
import { ReactComponent as EllipseLight } from '../../assets/ellipse-light.svg';
import { ReactComponent as EllipseDark } from '../../assets/ellipse-dark.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const PageOne = () => {

    const [value, setValue] = useState();

    function changeValue(event) {
        setValue(event.target.value);
    }
    return (
        <div className="container">
            <div className='content'>
                <h2 className='content__head'>Онлайн-подбор средств для лица</h2>
                <p className='content__description'>Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов</p>
            </div>

            <div className='quize-container'>
                <div className='quize-ellipse'>
                    <EllipseDark />
                    <EllipseLight />
                    <EllipseLight />
                </div>
                <p className='quize-comment'>Вопрос 1 из 3</p>

                <div className='quize-input'>
                    <h3 className='quize-input__head'>Сколько вам лет?</h3>
                    <form className='quize-input__list'>
                        <label>
                            <input type="radio" name="radio" value="1"
                                onChange={changeValue} />
                            <span>Нужны средства для ребёнка младше 10 лет</span>
                        </label>

                        <label>
                            <input type="radio" name="radio" value="2"
                                onChange={changeValue} />
                            <span>Мне меньше 25 лет</span>
                        </label>

                        <label >
                            <input type="radio" name="radio" value="3"
                                onChange={changeValue} />
                            <span>От 25 до 35 лет</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" value="4"
                                onChange={changeValue} />
                            <span>От 35 до 45 лет</span>
                        </label>

                        <label>
                            <input type="radio" name="radio" value="5"
                                onChange={changeValue} />
                            <span>Мне больше 45 лет</span>
                        </label>

                        <div className='quize-input-btns'>
                            {value ? <Link to='/pageTwo' className='button-blue'>Дальше</Link> : <Link to='/' className='button-blue-not'>Дальше</Link>}
                        </div>

                    </form>

                </div>
            </div >

        </div >
    )
}


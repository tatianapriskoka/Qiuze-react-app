import './PageThree.scss';
import { ReactComponent as EllipseLight } from '../assets/ellipse-light.svg';
import { ReactComponent as EllipseDark } from '../assets/ellipse-dark.svg';
import { useState } from 'react';


export const PageThree = () => {

    const [value, setValue] = useState(0);

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
                    <EllipseLight />
                    <EllipseLight />
                    <EllipseDark />
                </div>
                <p className='quize-comment'>Вопрос 3 из 3</p>

                <div className='quize-input'>
                    <h3 className='quize-input__head'>Беспокоят ли воспаления на лице?</h3>
                    <form className='quize-input__list'>
                        <label>
                            <input type="radio" name="radio" value="1"
                                checked={value == '1' ? true : false}
                                onChange={changeValue} />
                            <span>Да</span>
                        </label>

                        <label>
                            <input type="radio" name="radio" value="2"
                                checked={value == '2' ? true : false}
                                onChange={changeValue} />
                            <span>Нет</span>
                        </label>

                        <label >
                            <input type="radio" name="radio" value="3"
                                checked={value == '3' ? true : false}
                                onChange={changeValue} />
                            <span>Иногда</span>
                        </label>
                        <div className='quize-input-btns'>
                            <button className='button-white'>Назад</button>
                            <button className='button-blue'>Узнать результат</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}


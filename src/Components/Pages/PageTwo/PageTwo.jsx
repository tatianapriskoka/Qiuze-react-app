import './PageTwo.scss';
import { ReactComponent as EllipseLight } from '../../assets/ellipse-light.svg';
import { ReactComponent as EllipseDark } from '../../assets/ellipse-dark.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const PageTwo = () => {

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
                    <EllipseLight />
                    <EllipseDark />
                    <EllipseLight />
                </div>
                <p className='quize-comment'>Вопрос 2 из 3</p>
                <div className='quize-input'>
                    <h3 className='quize-input__head'>Какой у вас тип кожи?</h3>
                    <form className='quize-input__list'>
                        <label>
                            <input type="radio" name="radio" value="1"
                                onChange={changeValue} />
                            <span>Сухая</span>
                        </label>

                        <label>
                            <input type="radio" name="radio" value="2"
                                onChange={changeValue} />
                            <span>Нормальная</span>
                        </label>

                        <label >
                            <input type="radio" name="radio" value="3"
                                onChange={changeValue} />
                            <span>Комбинированная</span>
                        </label>
                        <div className='quize-input-btns'>
                            <Link to='/' className='button-white'>Назад</Link>
                            {value ? <Link to='/pageThree' className='button-blue'>Дальше</Link>
                                : <Link to='/pageTwo' className='button-blue-not'>Дальше</Link>}
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}


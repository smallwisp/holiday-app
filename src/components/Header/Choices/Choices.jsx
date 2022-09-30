import React, { useContext, useEffect, useState } from 'react';
import { URI_API } from '../../../const/const';
import { holidaysContext } from '../../../context/holidaysContext';
import style from './Choices.module.css';

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, setHoliday} = useContext(holidaysContext);
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    fetch(URI_API)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(data => setHolidays(data))
      .catch(err => console.error(err));
  }, []);
  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices)
  };

  const changeHoliday = (title) => {
    setHoliday(title);
    toggleChoices();
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>{holiday}</button>
    {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map(item => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[1])
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )
    }
  </div>
  )
};

export default Choices;
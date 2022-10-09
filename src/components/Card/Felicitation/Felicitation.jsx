import style from './Felicitation.module.css';
import { useSelector } from 'react-redux/';


const Felicitation = () => {
  const {text, loading} = useSelector(state => state.text);
  return (
    <p className={style.felicitation}>
    {loading === 'loading' ? 'Загрузка...' : 
      text === '' ? 'Выберите текст поздравления!!!' : text}
    </p>
)};

export default Felicitation;
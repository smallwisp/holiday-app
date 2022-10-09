import CardBG from '../../../img/card-bg.jpg';
import { useSelector } from "react-redux/es/exports";

const ImageCard = (props) => {
  const {urlImg} = useSelector(state => state.image);
  return (
    <img src={urlImg || CardBG} alt="Фон" width={840} height={520} />
  )
};

export default ImageCard;
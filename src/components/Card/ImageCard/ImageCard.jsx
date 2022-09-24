import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = (props) => {
  const img = useContext(imgContext);
  return (
    <img src={props.img} alt="Фон" width={840} height={520} />
  )
};

export default ImageCard;
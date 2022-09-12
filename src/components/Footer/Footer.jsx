import Container from "../Container/Container";
import style from './Footer.module.css'
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PINIcon } from "../../img/pinterest.svg";
import { ReactComponent as STIcon } from "../../img/stumbleupon.svg";
const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contact}>
          <p>Design: <a href="https://t.me/Son_of_Aiur">Vadim Chubarov</a></p>
          <p>Сoder: <a href="https://t.me/Son_of_Aiur">Vadim Chubarov</a></p>
          <p>© HBCard, 2022</p>
        </div>

        <ul className={style.social}>
          <li className={style.item}>
            <a href="https://t.me/Son_of_Aiur" className={style.link}>
              <VKIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href="https://t.me/Son_of_Aiur" className={style.link}>
              <TGIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href="https://t.me/Son_of_Aiur" className={style.link}>
              <PINIcon />
            </a>
          </li>          
          <li className={style.item}>
            <a href="https://t.me/Son_of_Aiur" className={style.link}>
              <STIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);  

export default Footer;
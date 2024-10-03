import {HomePageInfo} from '../../components/Infoblock/InfoBlock'
import css from './HomePage.module.css'

export default function HomePage() {
    return(
        <div className={css.wrapper}>
        <img className={css.img} src="./address_book.png" alt="address_book" />
        <HomePageInfo/>
       </div>
    )
};

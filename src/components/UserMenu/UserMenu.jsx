import { useDispatch, useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser)
const dispatch = useDispatch();
    return (
        <div className={css.box}>
      <p className={css.text}>Welcome,  {user.name} </p>
      <button onClick={() => dispatch(logOut())} type="button" className={css.button} >
        Logout
      </button>
    </div>
    )
};

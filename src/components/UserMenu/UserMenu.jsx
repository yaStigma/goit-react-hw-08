import css from './UserMenu.module.css'

export default function UserMenu() {
    return (
        <div className={css.box}>
      <p >Welcome, </p>
      <button type="button" className={css.button} >
        Logout
      </button>
    </div>
    )
};

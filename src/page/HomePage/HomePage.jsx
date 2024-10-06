
import css from './HomePage.module.css'

export default function HomePage() {
    return(
        <div className={css.wrapper}>
        <img className={css.img} src="./address_book.png" alt="address_book" />
        <div className={css.block}>
        <h2>Welcome to PhoneBook!</h2>
        <p>
        <b>PhoneBook</b> is your reliable assistant for managing contacts. No matter how many numbers and entries you have, we provide a simple and convenient way to keep all your data in one place. With us, you&apos;ll never lose a single contact again!
        </p>
        <p><b>Key Features:</b></p>
<ul>
    <li><b>Secure Storage:</b> Your contacts are always protected, and only you have access to them.
</li>
    <li><b>Search and Filter:</b> Easily find the people you need using quick search and filters.
    </li>
    <li><b>Organization:</b> Create categories and groups to keep all your contacts in order.</li>
    <li><b>Access from Any Device:</b> Manage your contacts from a computer, tablet, or smartphone.</li>
</ul>
<p>
Join PhoneBook and start building your digital address book today!
</p>
<p><b>
Registration and use are completely free.
      </b>  </p>
    </div>
       </div>
    )
};

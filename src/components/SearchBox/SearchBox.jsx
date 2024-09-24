import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox () {

  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

    return (
      <div className={css.container}>
        <p className={css.label}>Find contacts by name</p>
        <input className={css.input}
          type="text"
          value={filter} 
          onChange={handleChange}  

        />
      </div>
    );
  }
  
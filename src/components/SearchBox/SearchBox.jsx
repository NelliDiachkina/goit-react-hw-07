import { useSelector, useDispatch } from 'react-redux';

import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label htmlFor="search-inpt">Find contacts by name</label>
      <input
        type="text"
        id="search-inpt"
        className={css.input}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;

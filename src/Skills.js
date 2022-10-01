import { useSelector, useDispatch } from 'react-redux';

import { changeSearchField } from './actions';

export default function Skills() {
  const {items, loading, error, search} = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(changeSearchField(event.target.value));
  };
  
  const hasQuery = search.trim() !== '';

  return (
    <div className="skills-search">
      <div>
        <input type="search" value={search} onChange={handleSearch}/>
      </div>
      {!hasQuery && <div>Type something to search...</div>}
      {hasQuery && loading && <div>Doing search...</div>}
      {error ? <div>An error occured.</div> :
        <ul>
          {items.map(
            item => <li key={item.id}>{item.name}</li>
          )}
        </ul>
      }
    </div>
  );
}

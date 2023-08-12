import css from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'store/contacts/selectors';
import { setFilter } from 'store/contacts/filterSlice';

const Filter = () => {
	const dispatch = useDispatch()
    const filter = useSelector(getFilter)
    // console.log(filter)
    return (
        <div className={css.filter}>
            <h3>Find contacts by name</h3>
            <input 
                className={css.filter_input} 
                type="text" 
                value={filter}
                onChange={evt => dispatch(setFilter(evt.target.value.trim()))}
            />
        </div>
    )
}

export default Filter

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };
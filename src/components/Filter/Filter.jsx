import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
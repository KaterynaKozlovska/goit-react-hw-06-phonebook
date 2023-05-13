import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <div>
      <label className={css.filter__label}>Find contacts by name</label>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        title="Name may contain only letters"
        value={filterValue}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

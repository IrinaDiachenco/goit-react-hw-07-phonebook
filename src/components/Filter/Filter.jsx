import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact-actions';
import contactSelectors from '../../redux/contact-selectors';

function Filter({ value = '', onChange }) {
  return (
    <input
      className={styles.input}
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Enter name for Search'
    />
  )
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelectors.getFilter(state),
  items: contactSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
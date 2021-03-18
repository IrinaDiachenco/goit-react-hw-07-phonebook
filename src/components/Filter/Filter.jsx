import React from 'react';
import PropTypes from 'prop-types';
//import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact-actions';

// function Filter({ filter, onChange }) {
//   //const id = uuidv4();
//   return (
//     <input
//       className={styles.input}
//       type='text'
//       name='filter'
//       value={filter}
//       //onChange={({ target }) => onChange(target.value)}
//       onChange={onChange}
//       placeholder='Enter name for Search'
//       //id={id}
//     />
//   )
// };

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
//   items: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.filter)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

function Filter({ value = '', onChange }) {
  //const id = uuidv4();
  return (
    <input
      className={styles.input}
      type='text'
      //name='filter'
      value={value}
      //onChange={({ target }) => onChange(target.value)}
      onChange={onChange}
      placeholder='Enter name for Search'
      //id={id}
    />
  )
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
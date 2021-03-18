import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contact-actions';

// const ContactListItem = ({ id, name, phone, onRemove }) => {
//     return (
//         <li key={id}>
//         {name}: {phone} <button className={styles.button} id={id} onClick={() => onRemove(id)}>x</button>
//         </li>
    
//     )
// };

class ContactList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { items, onRemove } = this.props;
    // const ContactList = ({ contacts, onRemove}) => {
    //     if (contacts.length === 0) return null
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {/* {contacts.map(({ name, phone, id }) => { */}
        {items.map(({name, phone, id}) => {
          return (
            <CSSTransition
              key={id}
              classNames={styles}
              timeout={300}
              unmountOnExit
            >
              {/* <ContactListItem /> */}
              <li key={id}>
                {name}: {phone} <button className={styles.button} id={id} onClick={() => onRemove(id)}>x</button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  const visibleContacts = getVisibleContacts(items, filter);

  return {
    //items: visibleContacts,
    items: visibleContacts.length > 0 ? visibleContacts : items,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
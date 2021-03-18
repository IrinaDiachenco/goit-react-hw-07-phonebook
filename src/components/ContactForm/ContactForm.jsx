import React, { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './ContactForm.module.css';
import errorStyles from '../ErrorMessage/ErrorMessage.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import {addContact} from '../../redux/contact-actions';

class ContactForm extends Component {
//   static propTypes = {
//     contacts: PropTypes.array.isRequired,
//     filter: PropTypes.string,
//     error: PropTypes.string,
//   };
    
    static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

    state = {
        name: "",
        phone: "",
        error: null,
    };

    handleChangeForm = ({target}) => {
        const { name, value } = target
        this.setState({ [name]: value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidateForm = this.validateForm()

        if (!isValidateForm)
            onAdd(name, phone)
            this.resetForm()    
    };

    validateForm = () => {
        const { name, phone } = this.state;
        // const { contacts } = this.props
        // const isExistContact = !!contacts.find((item) => item.name === name);
              
const { items } = this.props
        const isExistContact = !!items.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

        if (!name || !phone) {
            //alert('Some filed is empty')
            this.setState({ error: 'Some filed is empty' });
            return setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
        }
        if (isExistContact) {
            //alert('Contact is already exist');
            this.setState({ error: 'Contact is already exist' });
            return setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
        }
    } 

    resetForm = () => {
        this.setState({ name: '', phone: '' });
    };

    render() {
        const { name, phone, error } = this.state;
        //const { contacts } = this.props;
        return (
            <> 
            <form className={styles.form} onSubmit={this.handleFormSubmit}>
                <label className={styles.label}>name</label>
                <input className={styles.input} type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm} />
                
                <label className={styles.label}>phone</label>
                <input className={styles.input} type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange={this.handleChangeForm} />
                
                <button className={styles.button} type='submit'>Add Contact</button>     
                </form>
            <CSSTransition
            appear={true}
            in={error !== null}
            timeout={250}
            classNames={errorStyles}
            unmountOnExit   
            >
            <ErrorMessage message={error} />
        </CSSTransition>
           </>
        )
    }
}

ContactForm.propTypes = {
        name: PropTypes.string,
        phone: PropTypes.number,
        onCheckUnique: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        items: state.contacts.items,
    }
};

const mapDispatchToProps = dispatch => ({
    onAdd: (name, phone) => dispatch(addContact(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
import style from './ContactListItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from 'react-icons/ai';

const ContactListItem = ({
  contactName,
  contactNumber,
  onClickDeleteContact,
}) => {
  return (
    <li className={style.listItem}>
      <span className={style.listItemText}>{contactName}:</span>
      <span className={style.listItemText}>{contactNumber}</span>
      <button
        className={style.button}
        type="button"
        onClick={onClickDeleteContact}
      >
        Delete <AiOutlineUserDelete size="15px" />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions';

const ToDo = ({ _id, title, dispatch }) => {
  const onPressItem = (e) => {
    e.preventDefault();
    dispatch(deleteToDo(_id));
  };

  return (
    <ListGroup.Item
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
      }}
    >
      {title}
      <Button title="Delete" onClick={onPressItem.bind(this)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ToDo.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default connect()(ToDo);

import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};

export default connect(mapStateToProps)(ToDoList);

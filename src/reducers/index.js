import { ADD_TODO, RENDER_TODO_LIST, DELETE_TODO } from '../actions';

const initialState = {
  toDoList: [],
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ];
      return {
        ...state,
        toDoList: newToDoList,
      };
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList,
      };
    case DELETE_TODO:
      let result = state.toDoList.filter((e) => e._id != action.toDoItem._id);
      return {
        ...state,
        toDoList: result,
      };
    default:
      return state;
  }
}

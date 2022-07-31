import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoContext';
const TodoListBlock = styled.div`
  padding: 1.5rem 2rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {/* <TodoItem text="안녕하세요?" done={true} />
      <TodoItem text="안녕하세요?" done={false} /> */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          done={todo.done}
          id={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;

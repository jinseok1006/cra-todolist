// style
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

// context
import { useTodoDispatch } from './TodoContext';

// style
const Text = styled.div`
  font-size: 1.25em;
  flex: 1;
  color: ${lighten(0.35, '#000')};

  ${({ done }) =>
    done &&
    css`
      color: ${lighten(0.9, '#000')};
    `}
`;

const CheckCircle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 1.5rem;
  color: ${lighten(0.7, '#000')};
  border-color: ${lighten(0.7, '#000')};

  justify-content: center;
  align-items: center;

  margin-right: 1rem;

  ${({ done }) =>
    done &&
    css`
      border-color: #38d9a9;
      color: #38d9a9;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${lighten(0.7, '#000')};

  &:hover {
    color: #f00;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;

  & + & {
    padding-top: 1rem;
  }

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

// context
function TodoItem({ text, done, id }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;

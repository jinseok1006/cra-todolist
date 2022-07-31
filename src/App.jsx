import React from 'react';
import './App.scss';
import styled from 'styled-components';
import { lighten } from 'polished';

import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoProvider, { useTodoState } from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppBlock>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </AppBlock>
    </TodoProvider>
  );
}
const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);

  @media (min-height: 550px) {
    align-items: center;
  }
`;

const TodoTemplateBlock = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  max-width: 440px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-flow: column nowrap;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoHeadBlock = styled.div`
  padding: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${lighten(0.9, '#000')};

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .day {
    margin-top: 0.5rem;
    color: ${lighten(0.5, '#000000')};
  }
  .left {
    color: #20c997;
    margin-top: 1.5rem;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undone = todos.filter((todo) => !todo.done).length || 0;

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="left">할 일 {undone}개 남음</div>
    </TodoHeadBlock>
  );
}

export default App;

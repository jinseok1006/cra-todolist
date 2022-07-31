import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
  width: 65px;
  height: 65px;
  border: 1px solid #38d9a9;
  background-color: #38d9a9;
  color: #fff;
  border-radius: 50%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 50%);

  transition: 0.3s all ease-in;
  ${({ open }) =>
    open &&
    css`
      background-color: #ff6b6b;
      transform: translate(-50%, 50%) rotate(135deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  transform: translateY(-200px);

  transition: 0.125s all ease-in;
  ${({ open }) =>
    open &&
    css`
      transform: translateY(0px);
    `}
`;

const InsertForm = styled.form`
  background-color: ${lighten(0.95, '#000')};
  border-radius: 0 0 16px 16px;
  padding: 2rem;
  padding-bottom: 3.5rem;

  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.21rem;
  border: 1px solid #dee2e6;
  outline: none;
  padding: 0.7rem;
  border-radius: 4px;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const [value, setValue] = useState('');
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: { id: nextId.current, text: value, done: false },
    });
    setValue('');

    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner open={open}>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력 후, 엔터를 눌러주세요."
              value={value}
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;

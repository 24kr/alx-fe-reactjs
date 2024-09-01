import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders correctly with initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(4);
    expect(todoItems[3]).toHaveTextContent('New Todo');
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText(/learn react/i);
    fireEvent.click(firstTodo);

    expect(firstTodo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const firstTodoDeleteButton = screen.getAllByRole('button', { name: /delete/i })[0];
    fireEvent.click(firstTodoDeleteButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2);
  });
});

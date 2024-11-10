// App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders header and initial tasks', () => {
    render(<App />);
    
    // Check for header text
    expect(screen.getByText(/Easter Mass/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Developer - Interview/i)).toBeInTheDocument();
    expect(screen.getByText(/Weekly AI Training Prioritization/i)).toBeInTheDocument();
  });

  test('toggles Add Task form', () => {
    render(<App />);
    
    // Initially, Add Task form should not be visible
    expect(screen.queryByPlaceholderText('Add a new task')).not.toBeInTheDocument();
    
    // Click add button to show form
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);
    
    // Now the form should be visible
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<App />);
    
    // Open Add Task form
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);

    // Fill out and submit the form
    const taskInput = screen.getByPlaceholderText('Task');
    const dayInput = screen.getByPlaceholderText('Day & Time');
    fireEvent.change(taskInput, { target: { value: 'New Task' } });
    fireEvent.change(dayInput, { target: { value: 'Tomorrow at 5pm' } });
    
    // Click save button
    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);
    
    // Check that the new task appears
    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(screen.getByText('Tomorrow at 5pm')).toBeInTheDocument();
  });

  test('deletes a task', () => {
    render(<App />);
    
    // Check that initial task exists
    const initialTask = screen.getByText(/Easter Mass/i);
    expect(initialTask).toBeInTheDocument();

    // Click delete button for the first task
    const deleteButton = initialTask.nextSibling; // Assuming delete button is next to task name
    fireEvent.click(deleteButton);
    
    // The task should be removed from the DOM
    expect(screen.queryByText(/Easter Mass/i)).not.toBeInTheDocument();
  });

  test('toggles reminder', () => {
    render(<App />);

    // Assuming tasks with reminders have a special class or indicator
    const task = screen.getByText(/Easter Mass/i);
    const reminderIcon = task.parentNode.querySelector('.reminder'); // Adjust this if you have a specific class
    
    // Check that the reminder is active initially
    expect(reminderIcon).toBeInTheDocument();
    
    // Click task to toggle reminder
    fireEvent.click(task);
    
    // Reminder should be toggled off
    expect(task.parentNode.querySelector('.reminder')).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect assertions
import LoginPanel from './LoginPanel';

describe('LoginPanel Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <LoginPanel
        handleOnChangeLogin={() => {}}
        handleOnChangePassword={() => {}}
        sendLoginForm={() => {}}
        handleOnClick={() => {}}
        login="" 
        password=""
      />
    );
    expect(container).toBeInTheDocument();
  });


  it('triggers onClick event', () => {
    const mockOnChangeLogin = jest.fn();
    const mockOnChangePassword = jest.fn();
    const mockSendLoginForm = jest.fn();
    const mockHandleOnClick = jest.fn();

    const { getByText} = render(
      <LoginPanel
        handleOnChangeLogin={mockOnChangeLogin}
        handleOnChangePassword={mockOnChangePassword}
        sendLoginForm={mockSendLoginForm}
        handleOnClick={mockHandleOnClick}
        login=""
        password=""
      />
    );
    fireEvent.click(getByText('Zaloguj'));
    expect(mockSendLoginForm).toHaveBeenCalled();
  });
});

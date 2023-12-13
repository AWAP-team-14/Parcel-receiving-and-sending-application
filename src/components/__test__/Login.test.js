// frontend test for login component

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../screens/login";

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />, { wrapper: MemoryRouter });

    const emailLabel = screen.getByLabelText("Email address");
    const passwordLabel = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(submitButton);

    expect(screen.getByText("New User")).toHaveAttribute("href", "/signup");
    expect(screen.getByText("Home")).toHaveAttribute("href", "/home");
  });
});

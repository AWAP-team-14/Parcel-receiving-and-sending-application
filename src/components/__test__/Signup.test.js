//frontend test for signup component

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../../screens/signup";

describe("Signup Component", () => {
  test("renders signup form", () => {
    render(<Signup />, { wrapper: MemoryRouter });

    const nameLabel = screen.getByLabelText("Name");
    const emailLabel = screen.getByLabelText("Email address");
    const mobileLabel = screen.getByLabelText("Mobile Number");
    const passwordLabel = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(mobileLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Mobile Number"), {
      target: { value: "+358123456789" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "Password@123" },
    });

    fireEvent.click(submitButton);

    expect(screen.getByText("Login")).toHaveAttribute("href", "/login");
    expect(screen.getByText("Home")).toHaveAttribute("href", "/home");
  });
});

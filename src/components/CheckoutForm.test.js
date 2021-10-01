import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  //Arrange----------------------------------------------------
  render(<CheckoutForm />);

  //Act--------------------------------------------------------
  //const h2 = screen.getByDisplayValue(/contact form/i);
  const inputFirstName = screen.getByLabelText(/first name/i);
  const inputLastName = screen.getByLabelText(/last name/i);
  const inputAddress = screen.getByLabelText(/address/i);
  const inputCity = screen.getByLabelText(/city/i);
  const inputState = screen.getByLabelText(/state/i);
  const inputZip = screen.getByLabelText(/zip/i);
  const submit = screen.getByRole("button");

  //Assert-----------------------------------------------------
  console.log("h2 is undefine");
  //   expect(h2).toBeInTheDocument();
  //   expect(h2).toHaveTextContent(/checkout form/i);
  expect(inputFirstName).toBeInTheDocument();
  expect(inputLastName).toBeInTheDocument();
  expect(inputAddress).toBeInTheDocument();
  expect(inputCity).toBeInTheDocument();
  expect(inputState).toBeInTheDocument();
  expect(inputZip).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});

test("shows success message on submit with form details", () => {
  //Arrange---------------------------------------------------
  render(<CheckoutForm />);

  //Act-------------------------------------------------------
  const inputFirstName = screen.getByLabelText(/first name/i);
  const inputLastName = screen.getByLabelText(/last name/i);
  const inputAddress = screen.getByLabelText(/address/i);
  const inputCity = screen.getByLabelText(/city/i);
  const inputState = screen.getByLabelText(/state/i);
  const inputZip = screen.getByLabelText(/zip/i);
  const submit = screen.getByRole("button");

  userEvent.type(inputFirstName, "Tommy");
  userEvent.type(inputLastName, "Hankkey");
  userEvent.type(inputAddress, "123456 2nd Street");
  userEvent.type(inputCity, "New York");
  userEvent.type(inputState, "NY");
  userEvent.type(inputZip, "92021");
  userEvent.click(submit, "click");

  const successMessage = screen.getByTestId(/successmessage/i);

  //Assert----------------------------------------------------
  expect(successMessage).toBeVisible();
  expect(successMessage).toBeInTheDocument();
  expect(successMessage).toHaveTextContent(/your new green friends/i);
  expect(successMessage).toHaveTextContent(/tommy hankkey/i);
  expect(successMessage).toHaveTextContent(/123456 2nd street/i);
  expect(successMessage).toHaveTextContent(/new york/i);
  expect(successMessage).toHaveTextContent(/ny/i);
  expect(successMessage).toHaveTextContent(/92021/i);
});

/*
const promise1 = screen.findByRole("h2");
  promise1.then((h2) => {
    expect(h2).toContain(/checkout form/i);
  });

  const promise2 = screen.findByLabelText(/firstname/i);
  promise2.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  const promise3 = screen.findByLabelText(/lastname/i);
  promise3.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  const promise4 = screen.findByLabelText(/address/i);
  promise4.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  const promise5 = screen.findByLabelText(/city/i);
  promise5.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  const promise6 = screen.findByLabelText(/state/i);
  promise6.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });

  const promise7 = screen.findByLabelText(/zip/i);
  promise7.then((element) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveValue("");
  });
*/

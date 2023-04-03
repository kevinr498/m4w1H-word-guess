import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "./App";

// Tests ✅ assume hard-coded word "bird"

it("displays 4 dashes", () => {
  const { getByText } = render(<App />);
  expect(getByText("____")).toBeInTheDocument();
});

it("reveals the letter when guessed", async () => {
  const { getByText, getByLabelText } = await render(<App />);
  const input = getByLabelText("Enter the Word or Phrase to Guess");
  const submitButton = getByText("Go!");

  userEvent.type(input, "b");
  userEvent.click(submitButton);
  expect(getByText("b___")).toBeInTheDocument();
});

it("reveals the letter when guessed (case-insensitive)", async () => {
  const { getByText, getByLabelText } = render(<App />);
  const input = getByLabelText("Enter the Word or Phrase to Guess");
  const submitButton = getByText("Go!");

  userEvent.type(input, "B");
  userEvent.click(submitButton);
  expect(getByText("b___")).toBeInTheDocument();
});

it("reveals the letter when guessed (multiple times)", async () => {
  const { getByText, getByLabelText } = render(<App />);
  const input = getByLabelText("Enter the Word or Phrase to Guess");
  const submitButton = getByText("Go!");

  userEvent.type(input, "b");
  userEvent.click(submitButton);
  userEvent.type(input, "i");
  userEvent.click(submitButton);
  expect(getByText("bi__")).toBeInTheDocument();
});

it("clears the input after each guess", async () => {
  const { getByText, getByLabelText } = render(<App />);
  const input = getByLabelText("Enter the Word or Phrase to Guess");
  const submitButton = getByText("Go!");

  userEvent.type(input, "b");
  userEvent.click(submitButton);
  expect(input.value).toBe("");
});

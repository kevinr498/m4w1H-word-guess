import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "./App";

// Tests ✅ assume hard-coded word "bird"

it("displays 4 dashes", () => {});

it("reveals the letter when guessed", async () => {
  const user = userEvent.setup();
  render(<App />);
});

it("reveals the letter when guessed (case-insensitive)", async () => {
  const user = userEvent.setup();
  render(<App />);
});

it("reveals the letter when guessed (multiple times)", async () => {
  const user = userEvent.setup();
  render(<App />);
});

it("clears the input after each guess", async () => {
  const user = userEvent.setup();
  render(<App />);
});

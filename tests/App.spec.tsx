import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
    test("renders the course name somewhere", () => {
        render(<App />);
        const linkElement = screen.getByText(/Movie Records/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("setMovieWatched function exists", () => {
        render(<App />);
        const addButton = screen.getAllByText(/Mark as watched/i);
        expect(addButton.length > 0);
        addButton[0].click();
    });

    test("editMovie function exists", () => {
        render(<App />);
        const addButton = screen.getAllByText(/Edit/i);
        expect(addButton.length > 0);
        addButton[0].click();
        render(<App />);
        const saveButton = screen.getByRole("button", { name: /Save/i });
        expect(saveButton);
        saveButton.click();
    });

    test("deleteMovie function exists", () => {
        render(<App />);
        const addButton = screen.getAllByText(/Edit/i);
        expect(addButton.length > 0);
        addButton[0].click();
        render(<App />);
        const deleteButton = screen.getByRole("button", { name: /Delete/i });
        expect(deleteButton);
        deleteButton.click();
    });

    test("addMovie function exists", () => {
        render(<App />);
        const addButton = screen.getAllByText(/Add New Movie/i);
        expect(addButton.length > 0);
        addButton[0].click();
        render(<App />);
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i,
        });
        expect(saveButton);
        saveButton.click();
    });

    test("cancel function exists", () => {
        render(<App />);
        const addButton = screen.getAllByText(/Edit/i);
        expect(addButton.length > 0);
        addButton[0].click();
        render(<App />);
        const cancelButton = screen.getByRole("button", { name: /Cancel/i });
        expect(cancelButton);
        cancelButton.click();
    });
});

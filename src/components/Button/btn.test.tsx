import { render, screen } from "@testing-library/react";
import { Button } from ".";
// add dom assertions
import "@testing-library/jest-dom";

describe("Button", () => {
    test("renders Button component", () => {
        render(
            <Button
                onClick={() => {
                    return;
                }}
            />
        );

        expect(screen.getByText("test")).toBeInTheDocument();
    });
});

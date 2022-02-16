import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Heading } from ".";

describe("<Heading />", () => {
	it("Should render Heading with correct children", () => {
		renderWithTheme(<Heading>My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toBeInTheDocument();
	});
});

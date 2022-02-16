import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Circle } from ".";

describe("<Circle />", () => {
	it("Should render Circle with correct children", () => {
		renderWithTheme(<Circle>28</Circle>);

		expect(screen.getByText("28")).toBeInTheDocument();
	});
});

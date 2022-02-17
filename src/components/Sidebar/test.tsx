import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Sidebar } from ".";

jest.mock("components/Select", () => {
	return {
		__esModule: true,
		Select: function mock() {
			return <div data-testid="Mock select"></div>;
		},
	};
});

const props = {
	loteriaId: 0,
	loteria: "mega-sena",
	concurso: "2359",
	data: "2022-02-12T02:50:26.269Z",
};

describe("<Sidebar />", () => {
	it("Should render Sidebar with correct elements", () => {
		renderWithTheme(<Sidebar {...props} />);

		expect(screen.getByTestId(/mock select/i)).toBeInTheDocument();
		expect(screen.getByRole("img", { name: /Logo sena/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: props.loteria })).toBeInTheDocument();
		expect(screen.getByText(props.concurso)).toBeInTheDocument();
		expect(screen.getByText("11/02/2022")).toBeInTheDocument();
	});

	it("Should render Sidebar with correct background", () => {
		const { container } = renderWithTheme(<Sidebar {...props} />);

		expect(container.firstChild).toHaveStyle({ backgroundColor: "#6BEFA3" });
	});
});

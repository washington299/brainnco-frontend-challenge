import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Select } from ".";

describe("<Select />", () => {
	it("Should render Select with correct options", async () => {
		renderWithTheme(<Select />);

		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getByRole("option", { name: /Escolha uma loteria/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /mega-sena/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /quina/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /lotofácil/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /lotomania/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /timemania/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /dia de sorte/i })).toBeInTheDocument();
	});
});

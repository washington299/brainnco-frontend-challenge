import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import { Select } from ".";

describe("<Select />", () => {
	it("Should render Select with correct options", async () => {
		renderWithTheme(<Select onChange={() => ({})} />);

		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getByRole("option", { name: /Escolha uma loteria/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /mega-sena/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /quina/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /lotofácil/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /lotomania/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /timemania/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /dia de sorte/i })).toBeInTheDocument();
	});

	it("Should change select options", async () => {
		renderWithTheme(<Select onChange={() => ({})} />);

		const defaultOption = screen.getByRole("option", {
			name: "Escolha uma loteria",
		}) as HTMLOptionElement;
		const megaSenaOption = (await screen.findByRole("option", {
			name: /mega-sena/i,
		})) as HTMLOptionElement;

		const select = screen.getByRole("combobox");

		expect(defaultOption.selected).toBe(true);

		userEvent.selectOptions(select, megaSenaOption);

		expect(megaSenaOption.selected).toBe(true);
	});

	it("Should dispatch onChange function when option changes", async () => {
		const mockOnChange = jest.fn();

		renderWithTheme(<Select onChange={mockOnChange} />);

		const megaSenaOption = (await screen.findByRole("option", {
			name: /mega-sena/i,
		})) as HTMLOptionElement;

		const select = screen.getByRole("combobox");

		expect(mockOnChange).not.toBeCalled();

		userEvent.selectOptions(select, megaSenaOption);

		expect(mockOnChange).toBeCalledTimes(1);
		expect(mockOnChange).toHaveBeenCalledWith({ id: "0", nome: "mega-sena" });
	});
});

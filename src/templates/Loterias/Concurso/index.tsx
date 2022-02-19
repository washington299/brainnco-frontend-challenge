import { Sidebar } from "components/Sidebar";
import { NumbersList } from "components/NumbersList";

import * as S from "./styles";

const sidebarProps = {
	loteriaId: 0,
	loteria: "mega-sena",
	concurso: "2359",
	data: "2022-02-12T02:50:26.269Z",
};

const numbersListProps = {
	numbers: [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"01",
		"02",
		"03",
	],
};

export const ConcursoTemplate = () => {
	return (
		<S.Wrapper>
			<Sidebar {...sidebarProps} />

			<NumbersList {...numbersListProps} />
		</S.Wrapper>
	);
};

/* eslint-disable prettier/prettier */
import { Heading } from "components/Heading";
import { Select } from "components/Select";

import { formatDate } from "utils/parsers/formatDate";

import * as S from "./styles";
import theme from "styles/theme";

type SidebarProps = {
	loteriaId: number;
	loteria: string;
	concurso: string;
	data: string;
};

export const Sidebar = ({ loteriaId, loteria, concurso, data }: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const backgroundColors: any = {
		"mega-sena": theme.colors.lightGreen,
		"quina": theme.colors.purple,
		"lotofácil": theme.colors.pink,
		"lotomania": theme.colors.orange,
		"timemania": theme.colors.darkGreen,
		"dia de sorte": theme.colors.lightBrown,
	};

	return (
		<S.Wrapper bgColor={backgroundColors[loteria]}>
			<Select defaultValue={loteriaId} />
			<img src="/logo-sena.png" alt="Logo sena" />
			<Heading color="white">{loteria}</Heading>
			<p>
				Concurso: <strong>{concurso}</strong> - <strong>{formatDate(data)}</strong>
			</p>
		</S.Wrapper>
	);
};

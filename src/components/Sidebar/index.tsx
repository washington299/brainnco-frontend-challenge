import { Heading } from "components/Heading";
import { Select } from "components/Select";

import { formatDate } from "utils/parsers/formatDate";

type SidebarProps = {
	loteriaId: number;
	loteria: string;
	concurso: string;
	data: string;
};

export const Sidebar = ({ loteriaId, loteria, concurso, data }: SidebarProps) => {
	return (
		<section>
			<Select defaultValue={loteriaId} />
			<img src="/logo-sena.png" alt="Logo sena" />
			<Heading color="white">{loteria}</Heading>
			<p>
				Concurso: <strong>{concurso}</strong> - <strong>{formatDate(data)}</strong>
			</p>
		</section>
	);
};

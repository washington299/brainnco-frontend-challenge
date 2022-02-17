import { useEffect, useState } from "react";

import { QUERY } from "services/queries";

type OptionsTypes = {
	id: number;
	nome: string;
};

export const Select = () => {
	const [options, setOptions] = useState<OptionsTypes[] | []>([]);

	useEffect(() => {
		(async () => {
			const { data } = await QUERY.getLotteries();

			setOptions(data);
		})();
	}, []);

	return (
		<select>
			<option>Escolha uma loteria</option>
			{options.map(lottery => (
				<option key={lottery.id} value={lottery.id}>
					{lottery.nome}
				</option>
			))}
		</select>
	);
};

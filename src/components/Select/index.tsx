import { useEffect, useState, useRef } from "react";

import { QUERY } from "services/queries";

type OptionsTypes = {
	id: number | string;
	nome: string;
};

type SelectProps = {
	onChange: (payload: OptionsTypes) => void;
};

export const Select = ({ onChange }: SelectProps) => {
	const [options, setOptions] = useState<OptionsTypes[] | []>([]);

	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		(async () => {
			const { data } = await QUERY.getLotteries();

			setOptions(data);
		})();
	}, []);

	const changeSelect = () => {
		const { value, text } = selectRef.current!.options[selectRef.current!.selectedIndex];
		const payload = { id: value, nome: text };

		onChange(payload);
	};

	return (
		<select ref={selectRef} onChange={changeSelect}>
			<option>Escolha uma loteria</option>
			{options.map(lottery => (
				<option key={lottery.id} value={lottery.id}>
					{lottery.nome}
				</option>
			))}
		</select>
	);
};

import { useEffect, useState, useRef } from "react";

import { QUERY } from "services/queries";

import * as S from "./styles";

type OptionsTypes = {
	id: number | string;
	nome: string;
};

type SelectProps = {
	defaultValue?: string;
	onChange?: (payload: OptionsTypes) => void;
};

export const Select = ({ defaultValue, onChange }: SelectProps) => {
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

		!!onChange && onChange(payload);
	};

	const defaultSelected = options.find(item => item.nome === defaultValue);

	return (
		<S.Select ref={selectRef} value={defaultSelected?.id} onChange={changeSelect}>
			<option>Escolha uma loteria</option>
			{options.map(lottery => (
				<option key={lottery.id} value={lottery.id}>
					{lottery.nome}
				</option>
			))}
		</S.Select>
	);
};

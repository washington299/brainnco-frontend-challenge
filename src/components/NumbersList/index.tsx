import { Circle } from "components/Circle";

type NumbersListProps = {
	numbers: string[];
};

export const NumbersList = ({ numbers }: NumbersListProps) => {
	return (
		<section>
			{numbers?.map(number => (
				<Circle key={number}>{number}</Circle>
			))}
			<div>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</div>
		</section>
	);
};

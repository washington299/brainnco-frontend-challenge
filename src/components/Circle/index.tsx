export type CircleProps = {
	children?: React.ReactNode;
};

export const Circle = ({ children }: CircleProps) => {
	return <div aria-label="Ball">{!!children && <div>{children}</div>}</div>;
};

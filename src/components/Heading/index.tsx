type HeadingProps = {
	children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
	return <h1>{children}</h1>;
};

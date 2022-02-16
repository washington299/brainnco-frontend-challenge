import * as S from "./styles";

export type HeadingProps = {
	children: React.ReactNode;
	size?: "small" | "medium";
};

export const Heading = ({ children, size = "medium" }: HeadingProps) => {
	return <S.Wrapper size={size}>{children}</S.Wrapper>;
};

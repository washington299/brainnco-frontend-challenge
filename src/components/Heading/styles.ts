import styled, { css, DefaultTheme } from "styled-components";

import { HeadingProps } from ".";

type WrapperProps = Pick<HeadingProps, "size">;

const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.size.large};
	`,
	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.size.xlarge};
	`,
};

export const Wrapper = styled.h2<WrapperProps>`
	${({ theme, size }) => css`
		${!!size && wrapperModifier[size](theme)};
	`}
`;

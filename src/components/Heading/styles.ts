import styled, { css, DefaultTheme } from "styled-components";

import { HeadingProps } from ".";

type WrapperProps = Pick<HeadingProps, "size" | "color">;

const wrapperModifier = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.size.large};
	`,
	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.size.xlarge};
	`,

	black: (theme: DefaultTheme) => css`
		color: ${theme.colors.black};
	`,
	white: (theme: DefaultTheme) => css`
		color: ${theme.colors.white};
	`,
};

export const Wrapper = styled.h2<WrapperProps>`
	${({ theme, size, color }) => css`
		${!!size && wrapperModifier[size](theme)};
		${!!color && wrapperModifier[color](theme)};
	`}
`;

import styled, { css } from "styled-components";

type WrapperProps = {
	bgColor: string;
};

export const Wrapper = styled.section<WrapperProps>`
	${({ theme, bgColor }) => css`
		height: 100%;
		display: grid;
		align-items: center;
		justify-content: center;
		padding-bottom: ${theme.spacings.large};
		background-color: ${bgColor};
	`}
`;

export const LogoContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	width: 5rem;
	height: 5rem;

	> img {
		width: 100%;
	}
`;
export const Info = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.font.size.xsmall};
	`}
`;

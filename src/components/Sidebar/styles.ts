import styled, { css } from "styled-components";

type WrapperProps = {
	bgColor: string;
};

export const Wrapper = styled.section<WrapperProps>`
	${({ bgColor }) => css`
		background-color: ${bgColor};
	`}
`;

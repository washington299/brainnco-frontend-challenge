/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from "styled-components";

import { CircleProps } from ".";

type WrapperProps = Pick<CircleProps, "bgColor">;

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, bgColor }) => css`
		background-color: ${theme.colors[bgColor!]};
	`}
`;

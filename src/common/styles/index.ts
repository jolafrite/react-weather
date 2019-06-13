import styled, { css } from "styled-components";
import { phone } from './utils';

export interface ContainerProps {
  col?: "column" | "row";
  size?: {
    w?: number;
    h?: number;
  };
  centrate?: boolean
  position?: {
    x?: string;
    y?: string;
  };
  guide?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ col }: ContainerProps) => col ? "column" : "row"};

  ${({ size }: ContainerProps) => size && size.w && css`
    width: ${size.w};
 `};

  ${({ size }: ContainerProps) => size && size.h && css`
    height: ${size.h};
  `};

  ${({ centrate }: ContainerProps) => centrate && css`
    align-items: center;
    justify-content: center;
  `};

  ${({ position }: ContainerProps) => position && position.x && css`
    justify-content: ${position.x};
  `};

  ${({ position }: ContainerProps) => position && position.y && css`
    align-items: ${position.y};
  `};

  ${({ guide }: ContainerProps) => guide && process.env.NODE_ENV === 'development' && css`
    border: 1px dashed red;
  `};

  ${phone(css`
    flex-direction: column;
  `)};
`;

export const Page = styled(Container)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: rgb(96,76,143);
  background: linear-gradient(0deg, rgba(150, 98, 162, 1) 0%, rgba(96, 76, 143, 1) 100%);
  transition: transform 1s ease-in-out;
`;

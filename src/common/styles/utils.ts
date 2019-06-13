import { rem as _rem, transitions as _transitions } from 'polished'
import theme from './theme';
import { css, FlattenSimpleInterpolation } from 'styled-components';

export const rem = (value: string | number, base?: string | number) => _rem(value, base);
export const transitions = (...arg: Array<string | Array<string>>) => _transitions(...arg);

export const tablet = (inner: FlattenSimpleInterpolation) => css`
    ${inner}
`;

export const phone = (inner: FlattenSimpleInterpolation) => css`
    ${inner}
`;

export const flex = (inner: { x?: string, y?: string }) => css`
  display: flex;
  justify-content: ${inner.x || "normal"};
  align-items: ${inner.y || "normal"};
`;

export const hover = (inner: FlattenSimpleInterpolation) => css`
  &:hover,
  &:focus {
    ${inner}
  }
`;

import styled from 'styled-components';
import { color, ColorProps, layout, LayoutProps, flexbox, FlexboxProps, position, PositionProps, space, SpaceProps } from 'styled-system';

export const Body = styled.div<ColorProps & LayoutProps & FlexboxProps & PositionProps & SpaceProps>`
  ${color}
  ${layout}
  ${flexbox}
  ${position}
  ${space}
`;

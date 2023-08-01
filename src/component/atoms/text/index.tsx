import styled from 'styled-components';
import * as CSS from 'csstype';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  height,
  HeightProps,
  textShadow,
  TextShadowProps,
  fontWeight,
  FontWeightProps,
  WidthProps,
  width,
  ResponsiveValue,
  TLengthStyledSystem,
  Theme
} from 'styled-system';

type THover = {
  itemhover?: boolean;
  sameline?: boolean;
  wordWrap?: boolean;
  hoverColor?: ResponsiveValue<CSS.Property.Color, Required<Theme<TLengthStyledSystem>>>;
};

export const Text = styled.p<
  ColorProps &
  TypographyProps &
  SpaceProps &
  FlexboxProps &
  BorderProps &
  HeightProps &
  WidthProps &
  TextShadowProps &
  FontWeightProps &
  THover
>`
  ${height}
  ${width}
  ${color}
  ${typography}
  ${space}
  ${flexbox}
  ${border}
  ${textShadow}
  ${fontWeight}
  white-space: ${({ sameline }) => sameline && `nowrap`};
  &:hover {
    border-color: ${
      ({ theme, itemhover, hoverColor }) => itemhover && 
      (hoverColor ? hoverColor : `${theme.colors.primary}`)
    };
    color: ${
      ({ theme, itemhover, hoverColor }) => itemhover && 
      (hoverColor ? hoverColor : `${theme.colors.primary}`)
    };
    cursor: ${({ itemhover }) => itemhover && `pointer`};
  }
`;

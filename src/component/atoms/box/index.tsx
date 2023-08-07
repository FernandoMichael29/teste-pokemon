import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type AfterProps = {
  afterPosition?: string;
  afterContent?: string;
  afterWidth?: string;
  afterHeight?: string;
  afterTop?: string;
  afterRight?: string;
  afterBottom?: string;
  afterLeft?: string;
  afterMargin?: string;
  afterPadding?: string;
  afterBorder?: string;
}
export type BeforeProps = {
  beforePosition?: string;
  beforeContent?: string;
  beforeWidth?: string;
  beforeHeight?: string;
  beforeTop?: string;
  beforeRight?: string;
  beforeBottom?: string;
  beforeLeft?: string;
  beforeMargin?: string;
  beforePadding?: string;
  beforeBorder?: string;
}

type THover = {
  itemhover?: boolean;
  borderhover?: string;
  bghover?: string;
  bgactive?: string;
  transform?: string;
  transition?: string;
  scrollBarWidth?: string;
  cursor?: string;
};

export const Box = styled.div<
  ColorProps & 
  LayoutProps & 
  BorderProps & 
  SpaceProps &  
  PositionProps &  
  FlexboxProps &
  ShadowProps &
  TypographyProps &
  AfterProps &
  BeforeProps &
  THover
>`
  ${layout}
  ${space}
  ${position}
  ${flexbox}
  ${color}
  ${border}
  ${shadow}
  ${typography}
  transform:${({ transform }) => transform };
  transition:${({ transition }) => transition };
  &:after {
    Position: ${({ afterPosition }) => afterPosition };
    Content: ${({ afterContent }) => afterContent};
    Width: ${({ afterWidth }) => afterWidth};
    Height: ${({ afterHeight }) => afterHeight};
    Top: ${({ afterTop }) => afterTop};
    Right: ${({ afterRight }) => afterRight};
    Bottom: ${({ afterBottom }) => afterBottom};
    Left: ${({ afterLeft }) => afterLeft};
    Margin: ${({ afterMargin }) => afterMargin};
    Padding: ${({ afterPadding }) => afterPadding};
    Border: ${({ afterBorder }) => afterBorder};
  }
  &:before {
    Position: ${({ beforePosition }) => beforePosition };
    Content: ${({ beforeContent }) => beforeContent};
    Width: ${({ beforeWidth }) => beforeWidth};
    Height: ${({ beforeHeight }) => beforeHeight};
    Top: ${({ beforeTop }) => beforeTop};
    Right: ${({ beforeRight }) => beforeRight};
    Bottom: ${({ beforeBottom }) => beforeBottom};
    Left: ${({ beforeLeft }) => beforeLeft};
    Margin: ${({ beforeMargin }) => beforeMargin};
    Padding: ${({ beforePadding }) => beforePadding};
    Border: ${({ beforeBorder }) => beforeBorder};
  }
  &:hover {
    border-color: ${({ theme, itemhover }) => itemhover && `${theme.colors.primary}`};
    color: ${({ theme, itemhover }) => itemhover && `${theme.colors.primary}`};
    cursor: ${({ itemhover }) => itemhover && `pointer`};
    cursor: ${({ cursor }) => cursor && `pointer`};
    background-color: ${({ theme, bghover }) => 
      bghover && (bghover === "primary" ? `${theme.colors.primary}` : `${theme.colors.secondary}`)
    };
    border: ${({ borderhover }) => borderhover};
  }
  &:active {
    background-color: ${({ theme, bgactive }) => 
      bgactive && "white"
    };
  }
  -webkit-scrollbar {
    width: 1em;
  }
`;

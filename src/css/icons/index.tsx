import styled from 'styled-components';
import { Star } from '@styled-icons/bootstrap/Star';
import { StarFill } from '@styled-icons/bootstrap/StarFill';

export const StarIcon = styled(Star)`
  color: ${({color}) => color ? color : 'gba(0, 0, 0, 0.25)'};
  width: ${({width}) => width ? width : '16px'};
  height: ${({height}) => height ? height : '16px'};
`;

export const StarFillIcon = styled(StarFill)`
  color: ${({color}) => color ? color : 'gba(0, 0, 0, 0.25)'};
  width: ${({width}) => width ? width : '16px'};
  height: ${({height}) => height ? height : '16px'};
`;
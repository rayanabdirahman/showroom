import styled from 'styled-components';
import { Props } from './index';

export const text = styled.p<Props>`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineheight.base};
  font-family: ${({ bold, theme }) =>
    bold ? theme.font.medium : theme.font.regular};
`;

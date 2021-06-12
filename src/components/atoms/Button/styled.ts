import styled from 'styled-components';
import { Props } from './index';

export const button = styled.button<Props>`
  background-color: ${({ primary, theme }) =>
    primary ? theme.color.green : theme.color.blue};
  color: ${({ primary, theme }) =>
    primary ? theme.color.white : theme.color.red};
`;

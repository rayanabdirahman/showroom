import styled from 'styled-components';
import { Props } from './index';
import { Card as AntCard } from 'antd';

const { Meta } = AntCard;

export const card: typeof AntCard = styled(AntCard)<Props>`
  border-color: transparent;
  width: 300px;
`;

export const meta: typeof Meta = styled(Meta)<Props>`
  display: flex;
  align-items: center;
`;

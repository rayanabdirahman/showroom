import React from 'react';
import { CardProps as AntCardProps, Avatar as AntAvatar } from 'antd';

import * as styled from './styled';

export type Props = AntCardProps & {
  image: string;
  avatar: string;
  title: string;
};

const Card: React.FC<Props> = (props): JSX.Element => (
  <styled.card size="small" cover={<img alt="example" src={props.image} />}>
    <styled.meta avatar={<AntAvatar src={props.avatar} />} />
  </styled.card>
);

export default Card;

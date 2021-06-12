import React from 'react';
import { LinkProps } from 'react-router-dom';
import * as styled from './styled';

export type Props = LinkProps;

const Link: React.FC<Props> = (props): JSX.Element => (
  <styled.link {...props}>{props.children}</styled.link>
);

export default Link;

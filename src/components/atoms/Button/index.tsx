import React from 'react';
import * as styled from './styled';

export type Props = { primary?: boolean };

const Button: React.FC<Props> = (props): JSX.Element => (
  <styled.button {...props}>{props.children}</styled.button>
);

export default Button;

import React from 'react';
import * as styled from './styled';

export type Props = { bold?: boolean };

const Text: React.FC<Props> = (props): JSX.Element => (
  <styled.text {...props}>{props.children}</styled.text>
);

export default Text;

import React from 'react';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';

const HomePage = (): JSX.Element => (
  <React.Fragment>
    <h1>Hello HomePage</h1>
    <Text>This is a test for all the paragraphs</Text>
    <Link to="/signin">Sign in</Link>
    <Link to="/signup">Sign up</Link>
  </React.Fragment>
);

export default HomePage;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: 'Poppins_Medium';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Medium.ttf');
  }

  @font-face {
    font-family: 'Poppins_Bold';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Bold.ttf');
  }

  @font-face {
    font-family: 'Poppins_Black';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Black.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.font.regular};
    line-height: ${({ theme }) => theme.font.lineheight.base};
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export default GlobalStyle;

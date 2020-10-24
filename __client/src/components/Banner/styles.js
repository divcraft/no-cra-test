import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  max-width: 600px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 80%;
  max-width: 300px;
`;

export const Header = styled.h1`
  font-size: 32px;
  color: #518bff;
`;

export const Describe = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;

export const Footer = styled.div`
  font-size: 20px;
  font-family: monospace;
  color: #dddddd;
  & div a {
    color: #dddddd;
    text-decoration: none;
  }
`;

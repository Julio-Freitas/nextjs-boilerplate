'use client';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: aliceblue;
  padding: 0.85rem;
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #195762;
    transition: ease-in-out 0.5s;
    &:hover {
      font-weight: bold;
    }
  }
`;

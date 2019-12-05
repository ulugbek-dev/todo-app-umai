import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin-left: 34px;
    padding: 4px 0;
    position: relative;
  }
  a.active {
    border-bottom: 2px solid #37bd95;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    a {
      margin: 0 15px;
    }
  }
`
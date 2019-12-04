import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    ${props => props.navbar ? (
        css`padding: 0 30px;`
    ) : (
        css`padding: 40px 30px;`
    )}
`
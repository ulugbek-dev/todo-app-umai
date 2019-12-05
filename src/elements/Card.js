import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 0px;
    margin: 10px 0;
    border: 1px solid transparent;
    border-radius: 8px;
    transform: scale(1);
    transition: .2s;
    :hover {
        background: rgba(0, 0, 0, .4);
        padding: 14px 20px;
        transform: scale(1.08);
    }
    h2 {
        color: #f3f3f3;
        font-size: 22px;
        font-weight: 500;
        margin: 0;
        margin-bottom: 8px;
    }
    p {
        color: #b3b3b3;
        margin: 2px 0;
        font-size: 12px;
        display: flex;
        span {
            padding-left: 8px;
            color: #f3f3f3;
            flex: 1;
            text-align: right;
        }
    }
    svg, a{
        height: 18px;
        cursor: pointer;
        margin-left: 18px;
        path {
            fill: #fff;
            transition: .2s;
        }
        :hover > path{
            fill: #37bd95;
        }
    }
    svg.trash:hover > path {
        fill: red;
    }
    svg.undone ,
    svg.restore {
        display: none;
    }
    @media(max-width: 512px) {
        border-bottom: 1px solid #37bd95;
        border-radius: 0;
        :hover {
            background: transparent;
            padding: 14px 0px;
            transform: scale(1);
        }
    }
`
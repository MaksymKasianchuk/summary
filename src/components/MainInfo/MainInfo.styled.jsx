import styled from '@emotion/styled';

export const MainInfoWrap = styled.div`
    margin-bottom: 40px;
    &>span{
        display: block;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 20px;
        color: ${props => props.theme.colors.lightText};
    }
    &>h1{
        font-size: 45px;
        font-weight: 700;
        color: ${props => props.theme.colors.textColor};
    }
    &>p{
        color: ${props => props.theme.colors.textColor};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        margin-top: 10px;
        &:first-of-type{
            margin-top: 25px;
        }
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

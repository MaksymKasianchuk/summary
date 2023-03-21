import styled from '@emotion/styled';

export const MainInfoWrap = styled.div`
    margin-bottom: 60px;
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
        line-height: 24px;
        margin-top: 25px;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

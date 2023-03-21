import styled from '@emotion/styled';

export const SkilsListWrapp = styled.div`
    margin-top: 60px;
    padding: 0 40px;
    & ul{
        padding: 0;
        margin: 0;
    }
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        & ul{
            list-style: none;
        }
    }
`;

export const SkilsListItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${props => props.theme.colors.accentColor};
    margin-left: 15px;
    &>span{
        color: ${props => props.theme.colors.whiteText};
    }
`;
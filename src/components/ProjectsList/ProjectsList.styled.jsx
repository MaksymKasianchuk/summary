import styled from '@emotion/styled';

export const ProjectsWrapper = styled.div`
    &>ol{
        padding: 0;
        margin: 0;
    }
`;

export const ProjectsItem = styled.li`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${props => props.theme.colors.textColor};
    margin: 5px 0 0 17px;
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    & a{
        color: ${props => props.theme.colors.accentColor};
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-decoration: underline;
        transition: all 250ms linear;
        &:hover{
            color: ${props => props.theme.colors.accentColor};
            opacity: 0.6;
        }
    }
    & .dots{
        display: inline-block;
        flex-grow: 2;
        margin: 0 10px;
        border-bottom: dotted 1px ${props => props.theme.colors.textColor};
    }
    & .tech-stack{
        color: ${props => props.theme.colors.lightText};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    @media screen and (max-width: 768px) {
        margin: 20px 0 0 17px;
    }
`;
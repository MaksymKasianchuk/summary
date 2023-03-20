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
    color: #000000;
    margin: 5px 0 0 17px;
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & a{
        color: #595959;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-decoration: underline;
        transition: all 250ms linear;
        &:hover{
            color: #595959;
            opacity: 0.6;
        }
    }
    & .dots{
        display: inline-block;
        flex-grow: 2;
        margin: 0 10px;
        border-bottom: dotted 1px #000000;
    }
    & .tech-stack{
        color: #595959;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;
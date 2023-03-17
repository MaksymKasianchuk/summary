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
    margin-left: 17px;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    $>a{
        color: #595959;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: none;
        transition: all 250ms linear;
        &:hover{
            color: #595959;
            opacity: 0.6;
        }
    }
    & .tech-stack{
        color: #595959;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;
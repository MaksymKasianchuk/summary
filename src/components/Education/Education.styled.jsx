import styled from '@emotion/styled';

export const EducationWrap = styled.div`
  
`;

export const EducationItem = styled.div`
    &>h3{
        color: ${props => props.theme.colors.accentColor};
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        margin: 20px 0 10px 0;
    }
    &>p{
        line-height: 24px;
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 10px 0;
        color: ${props => props.theme.colors.textColor};
    }
    &>span{
        color: ${props => props.theme.colors.lightText};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;

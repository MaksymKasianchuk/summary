
import styled from '@emotion/styled';

export const ExperienceWrap = styled.div`
    & ul{
        padding: 0;
        margin: 10px 0 0 0;
        &>li{
            color: ${props => props.theme.colors.lightText};
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin-left: 17px;
        }
    }
`;

export const ProfTitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin: 10px 0;
    color: ${props => props.theme.colors.textColor};
`;

export const ProfCompany = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${props => props.theme.colors.accentColor};
`;

export const ProfPeriod = styled.p`
    color: ${props => props.theme.colors.lightText};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export const ProfDescription = styled.p`
    color: ${props => props.theme.colors.textColor};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;
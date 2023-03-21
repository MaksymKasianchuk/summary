import styled from '@emotion/styled';

// border: 2px solid ${props => props.theme.colors.whiteText};
export const Wrapper = styled.div`
    background: #fff;
    margin: 0 auto;
    box-shadow: ${props => props.theme.colors.boxShadow};
    display: flex;
    max-width: 1200px;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.aside`
    background: ${props => props.theme.colors.sidebarBg};
    padding: 0 0 90px 0;
    @media screen and (max-width: 992px) {
        & img{
            width: 300px;
            height: auto;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 40px 0;
        text-align: center;
        & img{
            width: 250px;
            height: auto;
            display: block;
            border-radius: 10px;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 430px) {
        padding: 0 0 40px 0;
        & img{
            width: 100%;
            border-radius: 0;
        }
    }
`;

export const MainContent = styled.div`
    padding: 90px;
    @media screen and (max-width: 1150px) {
        padding: 40px;
    }
`;


export const SidebarTitle = styled.h3`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: ${props => props.theme.colors.whiteText};
`;


export const ContentTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
    margin-top: 40px;
    color: ${props => props.theme.colors.textColor};
    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }
`;

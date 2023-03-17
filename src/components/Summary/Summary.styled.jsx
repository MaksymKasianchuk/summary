import styled from '@emotion/styled';

// border: 2px solid ${props => props.theme.colors.whiteText};
export const Wrapper = styled.div`
    background: #fff;
    margin: 0 auto;
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    max-width: 1200px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Sidebar = styled.aside`
    background: #1e2939;
    padding: 0 0 30px 0;
`;

export const MainContent = styled.div`
    padding: 110px 90px;
`;


export const SidebarTitle = styled.h3`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
`;


export const ContentTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
`;

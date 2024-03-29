import styled from '@emotion/styled';

export const ContactsWrapper = styled.div`
    margin-top: 60px;
    padding: 0 40px;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const ContactItem = styled.div`
    margin-top: 10px;
    white-space: nowrap;
    &>span{
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    &>a{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #ebebeb;
        transition: all 250ms linear;
        &:hover{
            opacity: 0.6;
        }
    }
`;
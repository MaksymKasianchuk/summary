import styled from '@emotion/styled';

export const ContactsWrapper = styled.div``;

export const ContactItem = styled.div`
    &>span{
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
    }
    &>a{
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        color: #656d78;
        transition: all 250ms linear;
        &:hover{
            opacyty: 0.8;
        }
    }
`;
import { ContactsWrapper, ContactItem } from './ContactsList.styled';
import { SidebarTitle } from 'components/Summary/Summary.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const ContactsList = () => {
    return (
        <ContactsWrapper>
            <SidebarTitle>Contacts</SidebarTitle>
            <ContactItem>
                <span><FontAwesomeIcon icon={faPhone}/> </span>
                <a href="tel:380978525447">+38 097 852 54 47</a>
            </ContactItem>
            <ContactItem>
                <span>Email: </span>
                <a href="mailto:mfkasyanchuk@meta.ua">maxthebest1906@gmail.com</a>
            </ContactItem>
            <ContactItem>
                <span>LinkedIn: </span>
                <a href="https://www.linkedin.com/in/maksym-kasianchuk-782693228">Maksym Kasianchuk</a>
            </ContactItem>
        </ContactsWrapper>
    )
}
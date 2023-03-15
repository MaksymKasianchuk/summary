import { ContactsWrapper, SidebarTitle, ContactItem } from './ContactsList.styled';

const ContactsList = () => {
    return (
        <ContactsWrapper>
            <SidebarTitle>Contacts</SidebarTitle>
            <ContactItem>
                <span>Phone:</span>
                <a href="tel:380978525447">+38 097 852 54 47</a>
            </ContactItem>
            <ContactItem>
                <span>Email:</span>
                <a href="mailto:mfkasyanchuk@meta.ua">maxthebest1906@gmail.com</a>
            </ContactItem>
        </ContactsWrapper>
    )
}

export default ContactsList

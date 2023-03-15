import myPhoto from 'img/me.jpg';
import { Wrapper, Sidebar, MainContent } from './Summary.styled';
import ContactsList from 'components/ContactsList';
import SkilsList from 'components/SkilsList/SkilsList';

const Summary = () => {
    return (
       <Wrapper>
            <Sidebar>
                <img width="370" height="460" src={myPhoto} alt="my selfie" />
                
                <ContactsList />

                <SkilsList title="Tech Skills" list={[{name: 'HTML', id: 't1'}]} />

                <SkilsList title="Soft Skills" list={[{name: 'Scrum', id: 's1'}]} />
            </Sidebar>
            
            <MainContent>
                {/* about me main info */}

                {/* projects container */}

                {/* work expirience */}

                {/* education */}
            </MainContent>
        </Wrapper>
    );
}

export default Summary;

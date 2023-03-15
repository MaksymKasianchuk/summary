import ContactsList from 'components/ContactsList';
import { Wrapper, Sidebar, MainContent } from './Summary.styled';

const Summary = () => {
    return (
       <Wrapper>
            <Sidebar>
                {/* contacts */}
                <ContactsList />
                {/* tech skills */}

                {/* soft skills */}

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

import myPhoto from 'img/me.jpg';
import { Wrapper, Sidebar, MainContent } from './Summary.styled';
import { 
    Experience, 
    ContactsList,
    SkilsList,
    MainInfo,
    ProjectsList,
    Education 
} from 'components';

const Summary = () => {
    return (
       <Wrapper>
            <Sidebar>
                <img width="370" height="460" src={myPhoto} alt="my selfie" />
                
                <ContactsList />

                <SkilsList 
                    title="Tech Skills" 
                    list={[{name: 'HTML', id: 't1'}]} 
                />

                <SkilsList 
                    title="Soft Skills" 
                    list={[{name: 'Scrum', id: 's1'}]} 
                />
            </Sidebar>
            
            <MainContent>
                {/* about me main info */}
                <MainInfo 
                    profession={'profession'} 
                    name={'name'} 
                    aboutMe={'aboutMe'} 
                />

                {/* projects container */}
                <ProjectsList 
                    title="Projects"
                    projects={[
                        {
                            id: 'p1',
                            link: '#',
                            stack: 'HTML, CSS',
                        }
                    ]}
                />
                {/* work expirience */}
                <Experience
                    title="Work Experience" 
                    position={'position'} 
                    company={'company'} 
                    period={'period'} 
                    country={'country'} 
                    duties={[
                        {
                            id: 'd1',
                            text: 'txt'
                        }
                    ]} 
                    description={'description'}
                />
                {/* education */}
                <Education  title={'Education'} educationList={[
                    {
                        id: 'ed1',
                        place: 'VNTU',
                        specialty: 'Dibil',
                        period: 'Dovgo',
                    }
                ]}/>
            </MainContent>
        </Wrapper>
    );
}

export default Summary;

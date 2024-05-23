import myPhoto from 'img/me.webp';
import { Wrapper, Sidebar, MainContent } from './Summary.styled';
import { 
    Experience, 
    ContactsList,
    SkilsList,
    MainInfo,
    ProjectsList,
    Education 
} from 'components';
import {
    techSkils,
    softSkils,
    profession,
    name,
    aboutMe,
    comProjects,
    educProjects,
    expirience1,
    expirience2,
    educationList,
} from 'constants/data';


const Summary = () => {
    return (
       <Wrapper>
            <Sidebar>
                <img width="370" height="460" src={myPhoto} alt="my selfie" />
                
                <ContactsList />

                <SkilsList 
                    title="Tech Skills" 
                    list={ techSkils } 
                />

                <SkilsList 
                    title="Soft Skills" 
                    list={ softSkils } 
                />
            </Sidebar>
            
            <MainContent>
                {/* about me main info */}
                <MainInfo 
                    profession={ profession } 
                    name={ name } 
                    aboutMe={ aboutMe } 
                />

                {/* projects container */}
                <ProjectsList 
                    title="Commercial Projects"
                    projects={ comProjects }
                />
                <ProjectsList 
                    title="Educational Projects"
                    projects={ educProjects }
                />
                {/* work expirience */}
                <Experience
                    title="Work Experience" 
                    position={ expirience2.position } 
                    company={ expirience2.company } 
                    period={ expirience2.period } 
                    country={ expirience2.country } 
                    duties={ expirience2.duties } 
                    description={ expirience2.description }
                />
                <Experience
                    title=""
                    position={ expirience1.position } 
                    company={ expirience1.company } 
                    period={ expirience1.period } 
                    country={ expirience1.country } 
                    duties={ expirience1.duties } 
                    description={ expirience1.description }
                />
               
                {/* education */}
                <Education  title={'Education'} educationList={ educationList }/>
            </MainContent>
        </Wrapper>
    );
}

export default Summary;

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
import {
    techSkils,
    softSkils,
    profession,
    name,
    aboutMe,
    comProjects,
    educProjects,
    company,
    period,
    position,
    country,
    duties,
    description,
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
                    position={ position } 
                    company={ company } 
                    period={ period } 
                    country={ country } 
                    duties={ duties } 
                    description={ description }
                />
                {/* education */}
                <Education  title={'Education'} educationList={ educationList }/>
            </MainContent>
        </Wrapper>
    );
}

export default Summary;

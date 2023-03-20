import { ProjectsWrapper, ProjectsItem } from './ProjectsList.styled';
import { ContentTitle } from 'components/Summary/Summary.styled';

export const ProjectsList = ({ title, projects }) => {
    return (
        <ProjectsWrapper>
            {
                title && 
                <ContentTitle>{title}</ContentTitle>
            }
            <ol>
                {
                    projects.map((item) => (
                        <ProjectsItem key={item.id}>
                            <div>
                                <a href={item.linkUrl}>{item.linkName}</a>
                                <span className='dots'></span>
                                <span><b>[</b> <span className="tech-stack">{item.stack}</span> <b>]</b></span>
                            </div>
                        </ProjectsItem>
                    ))
                }
            </ol>
        </ProjectsWrapper>
    )
}
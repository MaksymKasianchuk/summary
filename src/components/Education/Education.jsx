import { EducationWrap, EducationItem } from './Education.styled';
import { ContentTitle } from "components/Summary/Summary.styled";

const Education = ({ title, educationList }) => {
    return (
        <EducationWrap>
            {
                title &&
                <ContentTitle>{title}</ContentTitle>
            }
            {  
                educationList.map(({ place, specialty, period }) => (
                    <EducationItem>
                        <h3>{ place }</h3>
                        <p>{ specialty }</p>
                        <span>{ period }</span>
                    </EducationItem>
                ))
            }
        </EducationWrap>
    )
}

export default Education

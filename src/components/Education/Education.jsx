import { EducationWrap, EducationItem } from './Education.styled';
import { ContentTitle } from "components/Summary/Summary.styled";

export const Education = ({ title, educationList }) => {
    return (
        <EducationWrap>
            {
                title &&
                <ContentTitle>{title}</ContentTitle>
            }
            {  
                educationList.map(({ id, place, specialty, period }) => (
                    <EducationItem key={id}>
                        <h3>{ place }</h3>
                        <p>{ specialty }</p>
                        <span>{ period }</span>
                    </EducationItem>
                ))
            }
        </EducationWrap>
    )
}
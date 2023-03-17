import { ContentTitle } from "components/Summary/Summary.styled";
import { 
    ExperienceWrap, 
    ProfTitle, 
    ProfCompany, 
    ProfPeriod, 
    ProfDescription
} from './Experience.styled';

export const Experience = ({ title, position, company, period, country, duties = [], description = '' }) => {
    return (
        <ExperienceWrap>
             {
                title &&
                <ContentTitle>{title}</ContentTitle>
            }
            <ProfTitle>{position} <ProfCompany>{company}</ProfCompany></ProfTitle>
            <ProfPeriod>{period} | {country}</ProfPeriod>
            {
                duties && (
                    <ul className="profession-duties">
                        {
                            duties.map((item) => (
                                <li key={item.id}>
                                    {item.text}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            { description && <ProfDescription>{description}</ProfDescription> }
        </ExperienceWrap>
    )
}
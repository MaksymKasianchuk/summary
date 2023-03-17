import { SkilsListWrapp, SkilsListItem } from './SkilsList.styled'
import { SidebarTitle } from 'components/Summary/Summary.styled';

export const SkilsList = ({ title, list }) => {
    return (
        <SkilsListWrapp>
            <SidebarTitle>{title}</SidebarTitle>
                <ul>
                    {
                        list.map(( { id, name } ) => (
                            <SkilsListItem key={id} className="skills-item"><span>{name}</span></SkilsListItem>
                        ))
                    }
                </ul>
        </SkilsListWrapp>
    );
}

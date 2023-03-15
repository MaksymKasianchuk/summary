import { SkilsListWrapp, SkilsListItem } from './SkilsList.styled'
import { SidebarTitle } from 'components/Summary/Summary.styled';

const SkilsList = ({ title, list }) => {
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

export default SkilsList;

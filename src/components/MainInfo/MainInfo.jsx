import { MainInfoWrap } from './MainInfo.styled';

export const MainInfo = ({profession, name, aboutMe}) => {
    return (
        <MainInfoWrap>
            <span>{profession}</span>
            <h1>{name}</h1>
           
            {aboutMe.map(({id, txt}) => (
                <p key={id}>
                    {txt}
                </p>
            ))}
        </MainInfoWrap>
    )
}
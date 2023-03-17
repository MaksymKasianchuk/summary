import { MainInfoWrap } from './MainInfo.styled';

const MainInfo = ({profession, name, aboutMe}) => {
    return (
        <MainInfoWrap>
            <span>{profession}</span>
            <h1>{name}</h1>
            <p>
                {aboutMe}
            </p>
        </MainInfoWrap>
    )
}

export default MainInfo;

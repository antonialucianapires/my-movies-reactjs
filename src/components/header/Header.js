import { Brand } from "../../styles/header/Brand";
import { HeaderContainer } from "../../styles/header/HeaderContainer";
import { MainMenu } from "./MainMenu";

export const Header = () =>  (
    <HeaderContainer>
        <Brand>My Movies</Brand>
        <MainMenu/>
    </HeaderContainer>
);
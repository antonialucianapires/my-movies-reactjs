import { MainMenuContainer } from "../../styles/header/MainMenuContainer";
import { Link } from "react-router-dom";

export const MainMenu = () => (
  <MainMenuContainer>
    <ul>
      <Link to="/" className="linkItem">HOME</Link>
      <Link to="/about" className="linkItem">SOBRE</Link>
    </ul>
  </MainMenuContainer>
);

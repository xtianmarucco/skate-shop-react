import { HomePageStyle, DirectoryMenu } from "./styles";
import MenuItem from "../MenuItem/MenuItem";

const HomePage = () => {
  return (
    <HomePageStyle>
      <DirectoryMenu>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem /> <MenuItem />
      </DirectoryMenu>
    </HomePageStyle>
  );
};
export default HomePage;

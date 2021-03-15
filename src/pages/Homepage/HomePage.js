import { HomePageStyle } from "./styles";
import Directory from "../../components/DirectoryMenu/DirectoryMenu";

const HomePage = ({ history }) => {
  return (
    <HomePageStyle>
      <Directory history={history} />
    </HomePageStyle>
  );
};
export default HomePage;

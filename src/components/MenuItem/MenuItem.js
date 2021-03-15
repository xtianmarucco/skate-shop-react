import { MenuItem, MenuItemContent, Title, SubTitle } from "./styles";
import { withRouter } from "react-router-dom";

const MenuItemComponent = ({ title, imageUrl, history, linkUrl, match }) => (
  <MenuItem
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemContent>
      <Title>{title.toUpperCase()}</Title>
      <SubTitle>SHOP NOW</SubTitle>
    </MenuItemContent>
  </MenuItem>
);
export default withRouter(MenuItemComponent);

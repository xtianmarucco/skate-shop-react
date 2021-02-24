import { MenuItem, MenuItemContent, Title, SubTitle } from "./styles";

const MenuItemComponent = ({ title, imageUrl }) => (
  <MenuItem style={{ backgroundImage: `url(${imageUrl})` }}>
    <MenuItemContent>
      <Title>{title.toUpperCase()}</Title>
      <SubTitle>SHOP NOW</SubTitle>
    </MenuItemContent>
  </MenuItem>
);
export default MenuItemComponent;

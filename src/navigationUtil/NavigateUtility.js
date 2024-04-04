import { Home } from "../components/Home";
import { Product } from "../components/Product";
import { Checkout } from "../components/Checkout";
import { StackNavigator } from "./StackNavigator";

export const StackScreen = () => {
  const Screens = {
    Home: Home,
    Product: Product,
    Checkout: Checkout,
  };
  return (
    <StackNavigator screens={Screens} firstScreenName="Home">
      <Home />
      <Product />
    </StackNavigator>
  );
};

import { GlobalStyles } from "@/styles/GlobalStyles";
import { Theme } from "@/styles/Theme";

import { Header } from "./components/Header/Header";
const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
    </Theme>
  );
};

export default App;

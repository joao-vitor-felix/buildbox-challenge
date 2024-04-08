import { GlobalStyles } from "@/styles/GlobalStyles";
import { Theme } from "@/styles/Theme";

import CardList from "./components/CardList/CardList";
import Container from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { CardContextProvider } from "./contexts/CardContext";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Container>
        <CardContextProvider>
          <Form />
          <CardList />
        </CardContextProvider>
      </Container>
    </Theme>
  );
};

export default App;

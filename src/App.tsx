import { GlobalStyles } from "@/styles/GlobalStyles";
import { Theme } from "@/styles/Theme";

import Container from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Container>
        <Form />
      </Container>
    </Theme>
  );
};

export default App;

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import { WeatherProvider } from "../Context/main";

function App() {
  return (
    <>
      <WeatherProvider>
        <Header />

        <Container />

        <Footer />
      </WeatherProvider>
    </>
  );
}

export default App;

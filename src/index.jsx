//Creating a small, working React App

import { createRoot } from 'react-dom/client';
import { MainView } from "./components/main-view/main-view";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Container from "react-bootstrap/Container"

const MyFlixApplication = () => {   //<-- Will go on to be the main component
   return (
      <Container>
            <MainView />
      </Container>
   );
};

const container = document.querySelector("#root"); //<-- Finds the root of the app
const root = createRoot(container);

root.render(<MyFlixApplication />) //<-- Tells React to render app in root DOM element
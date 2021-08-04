import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Header from "./common/Header";
import SessionPage from "./pages/SessionPage";
import SpeakerPage from "./pages/SpeakerPage";
import SpeakerDetails from "./components/SpeakerDetails";

//initialize apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql", //graphQL server link
  }),
  credentials: "same-origin",
});

function AppRouter() {
  const { url, path } = useRouteMatch();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${path}/`} component={HomePage} />
        <Route exact path="/sessions" component={SessionPage} />
        <Route exact path="/speakers" component={SpeakerPage} />
        <Route exact path="/speaker/:speaker_id" component={SpeakerDetails} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </Router>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import styled from "styled-components";
import GlobalStyle from "../globalStyle";
import RepoList from "../components/RepoList";

const App = () => {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 600px;
    height: 600px;
    margin: 80px auto;
    padding: 20px;

    border-radius: 10px;
    background-color: transparent;
  `;

  const CardTitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    color: #121127;
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    p {
      font-size: 1.2rem;
      color: #121127;
    }
  `;

  return (
    <Provider store={store}>
      <GlobalStyle />
      <CardContainer>
        <CardTitle>Search for NPM Package</CardTitle>
        <CardContent>
          <RepoList />
        </CardContent>
      </CardContainer>
    </Provider>
  );
};
export default App;

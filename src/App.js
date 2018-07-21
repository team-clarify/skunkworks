import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import CohortSummary from "./CohortSummary";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    width: 100%;
    height: 800px;
`;

class App extends Component {
    render() {
        return (
            <AppContainer>
                <CohortSummary />
            </AppContainer>
        );
    }
}

export default App;

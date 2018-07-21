import React, { Component } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import BoxChart from "./BoxChart";
import _ from "lodash";
import { Button } from "@material-ui/core";

const CardContainer = styled.div`
    width: 300px;
    height: 230px;
    box-shadow: 0 3px 2px #777;
    background: white;
    display: flex;
    flex-direction: column;
`;

const CardInfoContainer = styled.div`
    width: 100%;
    padding: 15px;
`;

const CohortSummaryHeading = styled.div`
    font-size: 1.1em;
    font-weight: 800;
    color: ${darken(0.2, "#7c8495")};
    margin: 5px 0;
`;

const SummarySubheading = styled.div`
    font-size: 0.7em;
    font-style: italic;
    padding: 0 0.8em;
    color: ${lighten(0.68, "black")};
`;

const Footer = styled.div`
    background: ${lighten(0.4, "gray")};
    height: 42px;
    font-size: 10px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    color: ${darken(0.05, "white")}
    margin-top: auto;
`;

const NewButtonWrapper = styled.div`
    align-items: center;
    margin-left: auto;
`;

const dataGen = () =>
    "ABCDF"
        .split("")
        .map(letter => ({ label: letter, value: _.max([Math.round(Math.random() * 10), 4]) }));

class CohortSummary extends Component {
    constructor() {
        super();
        this.state = { data: dataGen() };
        this.newData = this.newData.bind(this);
    }

    newData() {
        this.setState({ data: dataGen() });
    }

    getTotalStudents() {
        return this.state.data.reduce((accum, current) => accum + current.value, 0);
    }

    render() {
        return (
            <CardContainer>
                <BoxChart data={this.state.data} />
                <CardInfoContainer>
                    <CohortSummaryHeading>Period 1 Science</CohortSummaryHeading>
                    <SummarySubheading>{this.getTotalStudents()} students</SummarySubheading>
                </CardInfoContainer>
                <Footer>
                    <NewButtonWrapper>
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={this.newData}
                        >
                            New Data
                        </Button>
                    </NewButtonWrapper>
                </Footer>
            </CardContainer>
        );
    }
}

export default CohortSummary;

import React from "react";
import styled from "styled-components";
import { adjustHue, saturate, lighten } from "polished";
import { Tooltip } from "@material-ui/core";

const COLOR_GRADIENTS = ["#FAD961", "#61B3FA", "#C261FA", "#BFFA61", "#F7351B"].map(baseColor => [
    baseColor,
    adjustHue(10, saturate(0.2, baseColor))
]);

const BoxChartContainer = styled.div`
    width: 100%;
    height: 38px;
    background-color: red;
    display: flex;
`;

const SingleBox = styled.div`
    height: 100%;
    min-width: 5px;
    transition: width 0.3s;
`;

const BoxChartAxisContainer = styled.div`
    height: 12px;
    display: flex;
    align-items: center;
    background: ${lighten(0.3, "black")};
    width: 100%;
`;

const BoxChartAxisLabel = styled.div`
    font-size: 9px;
    color: white;
    font-weight: 400;
    text-align: center;
    transition: width 0.3s;
`;

const BoxChart = props => {
    const { data } = props;
    const sum = data.reduce((accum, current) => accum + current.value, 0);
    let width = 100;
    const widthMap = data.reduce((accum, current, i, arr) => {
        const fraction = Math.round((current.value / sum) * 100);
        const lastItem = i === arr.length - 1;
        const itemWidth = lastItem ? width : fraction;
        if (!lastItem) width -= fraction;
        accum[current.label] = itemWidth;
        return accum;
    }, {});

    return (
        <div>
            <BoxChartContainer>
                {data.map((cell, i) => (
                    <Tooltip title={`${cell.value} students`} placement="top">
                        <SingleBox
                            key={i}
                            style={{
                                width: `${widthMap[cell.label]}%`,
                                background: `linear-gradient(${COLOR_GRADIENTS[i].join(", ")}`
                            }}
                        />
                    </Tooltip>
                ))}
            </BoxChartContainer>
            <BoxChartAxisContainer>
                {data.map((cell, i) => (
                    <BoxChartAxisLabel key={i} style={{ width: `${widthMap[cell.label]}%` }}>
                        {cell.label}
                    </BoxChartAxisLabel>
                ))}
            </BoxChartAxisContainer>
        </div>
    );
};

export default BoxChart;

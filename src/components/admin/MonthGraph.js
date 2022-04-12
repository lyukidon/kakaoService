import React, { useEffect, useMemo, useRef } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";

const Graph = styled.div`
    display: inline-block;
`;
const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemebr",
];

function MonthGraph() {
    const canvasDom = useRef([]);

    useEffect(() => {
        const canvasDom_0 = canvasDom.current[0];

        const ctx = canvasDom.current[0].getContext("2d");

        new Chart(ctx, {
            data: {
                datasets: [
                    {
                        type: "line",
                        label: "방문자 수",
                        data: [
                            30, 20, 80, 30, 100, 20, 40, 50, 60, 90, 10, 120,
                        ],
                        borderColor: "orange",
                        fill: true,
                        tension: 0.25,
                    },
                ],
                labels: month,
            },
        });
    }, []);

    useEffect(() => {
        const canvasDom_1 = canvasDom.current[1];
        const ctx = canvasDom.current[1].getContext("2d");

        new Chart(ctx, {
            data: {
                datasets: [
                    {
                        type: "line",
                        label: "문의 수",
                        data: [2, 3, 4, 8, 10, 15, 30, 20, 45, 10, 15, 50],
                        borderColor: "#f9e01a",
                        fill: true,
                        tension: 0.25,
                    },
                ],
                labels: month,
            },
        });
    }, []);

    useEffect(() => {
        const canvasDom_2 = canvasDom.current[2];
        const ctx = canvasDom.current[2].getContext("2d");

        new Chart(ctx, {
            data: {
                datasets: [
                    {
                        type: "bar",
                        label: "서비스 별 문의 수",
                        data: [2, 3, 4],
                        borderColor: "rgba(54, 162, 235)",
                        borderWidth: 1,
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        fill: true,
                        tension: 0.25,
                    },
                ],
                labels: ["카카오톡", "카카오계정", "카카오 이모티콘"],
            },
        });
    }, []);

    return (
        <div>
            <Graph>
                <canvas ref={(element) => (canvasDom.current[0] = element)} />
            </Graph>
            <Graph>
                <canvas ref={(element) => (canvasDom.current[1] = element)} />
            </Graph>
            <Graph>
                <canvas ref={(element) => (canvasDom.current[2] = element)} />
            </Graph>
        </div>
    );
}

export default MonthGraph;

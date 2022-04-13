import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";

const Canv = styled.div`
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
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function Graph() {
    const canvasDom = useRef([]);

    useEffect(() => {
        const ctx0 = canvasDom.current[0].getContext("2d");
        const ctx1 = canvasDom.current[1].getContext("2d");
        const ctx2 = canvasDom.current[2].getContext("2d");
        const ctx3 = canvasDom.current[3].getContext("2d");

        new Chart(ctx0, {
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
        new Chart(ctx1, {
            data: {
                datasets: [
                    {
                        type: "line",
                        label: "문의 수",
                        data: [2, 3, 4, 8, 10, 15, 30, 20, 45, 10, 15, 50],
                        borderColor: "#f9e01a",
                        fill: true,
                        tension: 0.15,
                    },
                    {
                        type: "line",
                        label: "답변 수",
                        data: [2, 3, 4, 6, 6, 12, 29, 20, 30, 10, 15, 39],
                        borderColor: "blue",
                        fill: true,
                        tension: 0.1,
                    },
                ],
                labels: month,
            },
        });
        new Chart(ctx2, {
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
        new Chart(ctx3, {
            data: {
                datasets: [
                    {
                        type: "bar",
                        label: "서비스 별 사용자 수",
                        data: [10000000, 9000000, 5000000],
                        borderColor: [
                            "rgba(255, 159, 64)",
                            "rgba(255, 205, 86)",
                            "rgba(153, 102, 255)",
                        ],
                        borderWidth: 1,
                        backgroundColor: [
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                        ],
                        fill: true,
                        tension: 0.25,
                    },
                ],
                labels: ["카카오톡", "카카오계정", "카카오 이모티콘"],
            },
        });
    }, []);

    return (
        <div className="Box">
            <h4>트래픽 통계</h4>
            <Canv>
                <canvas ref={(element) => (canvasDom.current[0] = element)} />
            </Canv>
            <Canv>
                <canvas ref={(element) => (canvasDom.current[1] = element)} />
            </Canv>
            <Canv>
                <canvas ref={(element) => (canvasDom.current[2] = element)} />
            </Canv>
            <Canv>
                <canvas ref={(element) => (canvasDom.current[3] = element)} />
            </Canv>
        </div>
    );
}

export default Graph;

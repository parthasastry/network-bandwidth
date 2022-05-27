import React, { useState } from 'react';
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const getDenormalizedData = (data) => {

    const newData = data.map((d, i) => {
        let startDt = new Date(d["Start Date"])
        let endDt = new Date(d["End Date"])
        let output = []
        let record = {}
        while (startDt <= endDt) {
            record = { ...d, "cutover_date": new Date(startDt).toISOString().slice(0, 10) }
            output.push(record)
            record = {};
            startDt.setDate(startDt.getDate() + 1);
        }
        return output
    });
    return newData
}

const SizeChart = ({ data }) => {

    const [dataTransferMethod, setDataTransferMethod] = useState("All");
    const [dataCenter, setDatacenter] = useState("All");
    const [project, setProject] = useState("All")

    let dataTransferMethodList = [...new Set(data.map(d => d["Data Transfer Method"]))]
    dataTransferMethodList.unshift("All")

    let dataCenterList = [...new Set(data.map(d => d["Data Center"]))]
    dataCenterList.unshift("All")

    let projectList = [...new Set(data.map(d => d["Workstream"]))]
    projectList.unshift("All")

    let newData = data.filter(d => {
        return dataTransferMethod === "All" ? d : d["Data Transfer Method"] === dataTransferMethod

    }).filter(dc => {
        return dataCenter === "All" ? dc : dc["Data Center"] === dataCenter
    }).filter(p => {
        return project === "All" ? p : p["Workstream"] === project
    })

    let denormalizedData = getDenormalizedData(newData)

    let flattened = denormalizedData.reduce(
        (acc, curVal) => acc.concat(curVal),
        []
    );

    let sum = flattened.reduce((total, row) => {
        total[row["cutover_date"]] =
            (total[row["cutover_date"]] || 0) + Number(row["MB"]);
        return total;
    }, {});


    let dates = Object.keys(sum);
    let sizeMBPerDay = Object.values(sum)
    let mbpsPerDay = sizeMBPerDay.map(d => Number(((d * 8) / (24 * 60 * 60)).toFixed(2)))

    const sizeChartData = {
        labels: dates,
        datasets: [
            {
                label: "Total data transfer in MB/day",
                data: sizeMBPerDay,
                backgroundColor: ["rgba(0, 99, 132, 0.8)"],
                borderColor: ["rgba(0, 99, 132, 0.8)"],
            },
        ],
    };

    const mbpsChartData = {
        labels: dates,
        datasets: [
            {
                label: "Total data transfer in mpbs/day",
                data: mbpsPerDay,
                backgroundColor: ["rgba(99, 99, 132, 0.8)"],
                borderColor: ["rgba(99, 99, 132, 0.8)"],
            },
        ],
    };


    return (
        <div name="charts">
            <h2 className="text-2xl font-bold text-center uppercase">
                Charts
            </h2>
            <div className='m-auto p-2'>
                <div className="flex items-center text-sm border">
                    <div>
                        <label>Data Transfer Method: </label>
                        <select className="px-4 font-bold" onChange={(e) => setDataTransferMethod(e.target.value)}>
                            {dataTransferMethodList.map(method => <option key={method} value={method}>{method}</option>)}
                        </select>
                    </div>
                    <div className='m-4 px-4'>
                        <label>Data Center: </label>
                        <select className="px-4 font-bold" onChange={(e) => setDatacenter(e.target.value)}>
                            {dataCenterList.map(dc => <option key={dc} value={dc}>{dc}</option>)}
                        </select>
                    </div>
                    <div className='m-4 px-4'>
                        <label>Workstream: </label>
                        <select className="px-4 font-bold" onChange={(e) => setProject(e.target.value)}>
                            {projectList.map(project => <option key={project} value={project}>{project}</option>)}
                        </select>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div >
                    <h2 className="text-xl text-center">
                        Storage - MB/day
                    </h2>
                    <Bar
                        data={sizeChartData}
                        options={{
                            title: {
                                display: true,
                                text: "Size in GB",
                                fontSize: 20,
                            },
                            legend: {
                                display: true,
                                position: "right",
                            },
                        }}
                    />
                </div>
                <div>
                    <h2 className="text-xl text-center">
                        Bandwidth - mbps/Day
                    </h2>
                    <Bar
                        data={mbpsChartData}
                        options={{
                            title: {
                                display: true,
                                text: "Size in GB",
                                fontSize: 20,
                            },
                            legend: {
                                display: true,
                                position: "right",
                            },
                        }}
                    />
                </div>

            </div>

        </div>
    )
}

export default SizeChart
import React, { useState } from 'react';
import DisplayData from './DisplayData';
import SizeChart from './SizeChart';
import Download from "./Download";
import Instructions from './Instructions';

const Home = () => {
    const [csvFile, setCsvFile] = useState();
    const [data, setData] = useState([])

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            // console.log(text);
            processCSV(text);
        };
        reader.readAsText(file);
    };

    const processCSV = (str, delim = ",") => {
        const headers = str.slice(0, str.indexOf("\n")).split(delim);
        const trimHeader = headers.map((h) => h.trim());

        const rows = str.slice(str.indexOf("\n") + 1).split("\n");

        const newArray = rows.map((row) => {
            const values = row.split(delim);
            const eachRow = trimHeader.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {});
            return eachRow;
        });
        setData(newArray)
    };

    return (
        <div name="home" className="py-24">
            <div className='max-w-[1240px] m-auto'>
                <div className='mx-auto py-12 px-12 text-center'>
                    <p className='text-3xl font-bold'>Network Bandwidth Calculator</p>
                    <p className="text-sl py-2">
                        Understand network bandwidth needs for data migration of your customer
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <Instructions />
                    </div>
                    <div className="mx-auto text-center">
                        <h2 className="text-xl font-bold text-center uppercase">
                            Upload CSV File
                        </h2>
                        <p className='text-sm'>
                            Please choose csv file that has the data. The uploaded data will not
                            be persisted on the web app.
                        </p>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center py-2 border m-2 p-2">
                                <input
                                    className="w-full p-2 mr-4 rounded-md mb-4"
                                    type="file"
                                    id="formFile"
                                    accept=".csv"
                                    onChange={(e) => {
                                        setCsvFile(e.target.files[0]);
                                    }}
                                ></input>
                                <button
                                    className="py-3 px-6 sm:w-[60%] my-4 bg-orange-400 rounded-md border-none"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (csvFile) submit();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <Download />
                    </div>
                </div>
            </div>

            <div>
                {
                    data.length > 0 ? (
                        <div>
                            <SizeChart data={data} />
                            <DisplayData data={data} />

                        </div>) : null
                }

            </div>

        </div>
    )
}

export default Home
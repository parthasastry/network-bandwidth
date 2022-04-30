import React, { useState } from 'react'

const DisplayData = ({ data }) => {

    const [text, setText] = useState("");

    const newData = data.map((d) => {
        let mbps = Number(((d["MB"] * 8) / (d["Duration Hours"] * 60 * 60)).toFixed(2))
        return { ...d, "Mbps": mbps }
    })

    const headers = Object.keys(newData[0])

    const tableHeaders = headers.map((h) => {
        return (
            <td className="bg-blue-100 border font-bold px-8 py-4" key={h}>
                {h}
            </td>
        );
    });

    const tableData = newData.filter((d) => {
        let searchText = text.toLowerCase();
        return (
            d["Project"].toLowerCase().includes(searchText)
        );
    }).map((item, index) => {
        return (
            <tr key={index} className="bg-gray-100 border-b">
                {
                    headers.map((h, i) => {
                        return (
                            <td className="text-center" key={i}>{item[h]}</td>
                        )
                    })
                }
            </tr>
        )
    })

    return (
        <div name="details" className="p-4">

            <div className="mx-auto">
                <h2 className="text-3xl font-bold text-center uppercase">
                    Data you uploaded
                </h2>
                <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
                    <form>
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                            <input
                                onChange={(e) => setText(e.target.value)}
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Search Project..."
                            />
                        </div>
                    </form>
                </div>
                <table className='w-full my-5 text-xs'>
                    <thead>
                        <tr>{tableHeaders}</tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayData
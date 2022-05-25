import React from 'react'

const steps = ["Download template file from the website. This is a comma-separated file (csv).", "Update the downloaded file with your data. Data is mandatory for all fields in the file. Read FAQ for field level instructions.", "Upload your file to the website.", "Analyze the charts."]

const Instructions = () => {
    steps.map(s => console.log(s))
    return (
        <div>
            <div name="instructions">
                <div className="mx-auto text-center">
                    <h2 className="text-xl font-bold text-center uppercase">
                        Instructions
                    </h2>
                    <div className='text-left'>
                        {steps.map((s, i) => {
                            return (
                                <div key={i}>
                                    <p className="text-sm">
                                        <span className='font-bold uppercase'>Step {i + 1}:</span> {s}
                                    </p>
                                </div>
                            )
                        })}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Instructions
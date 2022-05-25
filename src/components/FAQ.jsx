import React from "react";

const data = [
    {
        "question": "What is the purpose of this website?",
        "answer": "The purpose of this site is to provide cloud migration teams a tool to calculate the bandwidth required (in Mbps - Million-bits-per-second)."
    },
    {
        "question": "Why should this website be used?",
        "answer": "Understanding the bandwidth required is a question asked by cloud migration teams. This tool is a simple facility to provide bandwidth calculation. Often teams use spreadsheets to do the calculations. It is not only cumbersome, but also requires the spreadsheet being sent over the wire to other team members and customers."
    },
    {
        "question": "How to use this website?",
        "answer": "Please read the instructions provided on the top of the webpage."
    },
    {
        "question": "What are the various views?",
        "answer": "There are two views. One, is a graphical view of size of data transferred per day, another is mbps requirement per day. There is also a facility provided to view and search data that is uploaded."
    },
    {
        "question": "Will my data be persisted?",
        "answer": "No, data uploaded is transient and is not persisted."
    },
    {
        "question": "Can I add more views?",
        "answer": "Yes, please reach the author to get guidance."
    },
]

const FAQ = () => {
    return (
        <div name="faq" className="w-full my-32">
            <div className="max-w-[1240px] mx-auto px-2">
                <h2 className="text-3xl font-bold text-center">
                    Frequently Asked Questions (FAQ)
                </h2>
                <div className="grid grid-cols-2 gap-4 p-10 px-2">
                    {data.map((d, i) => {
                        return (
                            <div key={i}>
                                <h3 className="font-bold text-lg">
                                    {d.question}
                                </h3>
                                <p className="text-lg pt-2 pb-4">
                                    {d.answer}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h3 className="font-bold text-lg">
                        What are the various fields and what do they signify?
                    </h3>
                    <p>
                        <span className="font-bold italic text-red-600">All fields are mandatory, please dont enter blanks for any field. For text fields use n/a and </span>
                    </p>
                    <p>
                        <span className="font-bold italic">Workstream:</span> [Text] Project Team responsible for a body of work
                    </p>
                    <p>
                        <span className="font-bold italic">AWS Account Number:</span> [Text or Number] AWS Account to which data is being migrated to
                    </p>
                    <p>
                        <span className="font-bold italic">Migration Name:</span> [Text] Unique identifier per migration. Ex: Oracle-DEV, Oracle-PROD, MyApp-QA
                    </p>
                    <p>
                        <span className="font-bold italic">Data Center:</span> [Text] On-premises Data Center from where the data is being migrated from
                    </p>
                    <p>
                        <span className="font-bold italic">Data Transfer Method:</span> [Text] Method used for Data Migration Ex: DataSync, Dump File
                    </p>
                    <p>
                        <span className="font-bold italic">Full or Incremental:</span> [Text] Bulk load or incremental
                    </p>
                    <p>
                        <span className="font-bold italic">MB:</span> [Number] Storage in Megabytes that is being transferred
                    </p>
                    <p>
                        <span className="font-bold italic">Duration Hours:</span> [Number] Duration in hours available for data transfer. Hours can be less than 24 if the migration needs to be done within a single day. Any migration that exceeds a day should have 24 hours as duration
                    </p>
                    <p>
                        <span className="font-bold italic">Start Date and End Date:</span> [Date in MM/DD/YYYY] Start and End dates of the migration. Both start and end date are included in the calculations
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
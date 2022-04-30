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
        "answer": "Please download the tenplate from the website, update the csv file with yoir data. Upload the file and analyze the visualization."
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
            </div>
        </div>
    );
};

export default FAQ;
import React from "react";

import { CSVLink } from "react-csv";

const csvData = `Workstream,AWS Account Number,Migration Name,Data Center,Data Transfer Method,Full or Incremental, MB ,Duration Hours,Start Date,End Date
AWS - DC-A prod traffic,MULTIPLE,AWS - DC-A -prod traffic phase 1,DC-A,prod network traffic,Inc,500000,24,1/1/21,3/31/21
AWS - DC-A prod traffic,MULTIPLE,AWS - DC-A -prod traffic phase 2,DC-A,prod network traffic,Inc,3000000,24,4/1/21,6/30/21
AWS - DC-A prod traffic,MULTIPLE,AWS - DC-B -prod traffic phase 2,DC-B,prod network traffic,Inc,2000000,24,4/1/21,6/30/21
AWS - DC-B prod traffic,MULTIPLE,AWS - DC-B -prod traffic phase 1,DC-B,prod network traffic,Inc,1000000,24,1/1/21,3/31/21
AWS - DDC prod traffic,MULTIPLE,AWS - DC-B -prod traffic phase 3,DC-B,prod network traffic,Inc,250000,24,7/1/21,9/30/21
AWS - NDH prod traffic,MULTIPLE,AWS - DC-A -prod traffic phase 3,DC-A,prod network traffic,Inc,500000,24,7/1/21,9/30/21
Project-001,Account-001,MSSQL-Prod (test),DC-A,DataSync-SMB,Full,500000,8,1/14/21,1/14/21
Project-001,Account-001,MSSQL-Prod,DC-A,DataSync-SMB,Full,500000,8,1/21/21,1/21/21
Project-001,Account-001,MSSQL-Prod-Incremental,DC-A,DataSync-SMB,Inc,150000,24,1/22/21,1/30/21
Project-002,Account-002,MSSQL-Prod,DC-B,DataSync-SMB,Full,5000000,16,4/2/21,4/2/21
Project-002,Account-002,MSSQL-Prod-Incremental,DC-B,DataSync-SMB,Inc,1000000,24,4/3/21,4/14/21
Project-010,Account-001,Oracle-dry run,DC-A,Copy Dump File,Full,3000000,24,4/7/21,4/7/21
Project-010,Account-001,Oracle-Integration,DC-A,Copy Dump File,Full,1500000,16,4/9/21,4/9/21
Project-010,Account-001,Oracle-Integration,DC-A,Copy Dump File,Full,1500000,16,4/16/21,4/16/21
Project-010,Account-003,Oracle-UAT,DC-B,DataSync-NFS,Full,400000,8,4/1/21,4/1/21
Project-010,Account-003,Oracle-Prod,DC-B,DataSync-NFS,Full,3000000,24,5/20/21,5/20/21
Project-010,Account-003,Oracle-Prod,DC-B,DataSync-NFS,Inc,400000,24,5/20/21,5/28/21
Project-020,Account-005,SMB-fileshare,DC-A,DataSync-SMB,Full,800000,24,3/15/21,3/19/21
Project-021,Account-005,SMB-fileshare,DC-A,DataSync-SMB,Full,200000,24,3/15/21,3/19/21
Project-022,Account-005,SMB-fileshare,DC-A,DataSync-SMB,Full,575000,24,6/11/21,6/18/21
Project-023,Account-006,others-fileshare,DC-B,DataSync-NFS,Full,571429,8,4/6/21,4/12/21
Project-024,Account-006,others-fileshare,DC-B,DataSync-NFS,Full,500000,8,5/14/21,5/21/21`;

const Download = () => {
    return (
        <div name="download">
            <div className="mx-auto text-center">
                <h2 className="text-xl font-bold text-center uppercase">
                    Download Template
                </h2>
                <p className="text-sm">
                    To assist with data upload, click below to get a csv template. Please
                    dont change column names (row 1)
                </p>

                <button className="py-3 px-6 my-4 bg-violet-400 rounded-md border-none">
                    <CSVLink data={csvData}>Download template</CSVLink>
                </button>

            </div>
        </div>
    );
};

export default Download;
'use client'
import * as React from "react"

//import { Progress } from "@/components/ui/progress"

import { ProgressListData,ProgressListDataType } from "./ProgressListData";
import ProgressDemo from "./Progress";

function ProgressListMap() {
    return (
        <div>
            {ProgressListData.map((i:ProgressListDataType)=>(
                <div key={i.id}>{i.label}<ProgressDemo score={i.progressScore}/></div>))};
        </div>
    );
}

export default ProgressListMap;
'use client'
import * as React from "react"
import { ProgressListData,ProgressListDataType } from "./ProgressListData";
import ProgressDemo from "./Progress";

interface Tabprops{
value:string,
}
function ProgressListMap(props:Tabprops
    ) {
    return (
        <div>
            {ProgressListData.filter(i => i.useFor===props.value).map((i:ProgressListDataType )=>(
             <div key={i.id}>{i.id}--{i.label}<ProgressDemo score={i.progressScore}/></div>))}
        </div>
    );
}

export default ProgressListMap;
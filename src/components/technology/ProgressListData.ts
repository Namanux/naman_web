export interface TabProgressListDataType {
    id:number;
    tabValue:string;
    tabLabel:string;
 };

 export interface ProgressListDataType {
    id: number;
    label:string;
    href:string;
    progressScore:number;
    useFor:string;
};

export const TabProgressListData:Array<TabProgressListDataType>=[
    {id:1,tabValue:"overview", tabLabel:"Overview"},
    {id:2,tabValue:"design", tabLabel:"UX / UI Design"},
    {id:3,tabValue:"projectManagement", tabLabel:"Project management"},
    {id:4,tabValue:"coding", tabLabel:"Coding Language "},
    {id:5,tabValue:"frameworks", tabLabel:"Frameworks"},
]


export const ProgressListData:Array<ProgressListDataType> = [
    //-----------------------------overview-----------------------------------//
    {id:1,label:"Zira",href: "/", progressScore:80,useFor:"overview"},
    {id:2,label:"Figma",href: "/", progressScore:90, useFor:"overview"},
    {id:3,label:"Github",href: "/", progressScore:75,useFor:"overview"},
    {id:4,label:"NextJS",href: "/", progressScore:90, useFor:"overview" },
    {id:5,label: "Javascript",href: "/", progressScore:85, useFor:"overview"},
    //-----------------------------design-----------------------------------//
    {id:16,label: "Figma",href: "/", progressScore:85, useFor:"design"},
    {id:12,label: "Adobe PHOTOSHOP",href: "/", progressScore:80, useFor:"design"},
    {id:13,label: "Adobe LIGHTROOM",href: "/", progressScore:95, useFor:"design"},
    {id:14,label: "Adobe Premierpro",href: "/", progressScore:70, useFor:"design"},
    {id:15,label: "InkScape",href: "/", progressScore:80, useFor:"design"},
    //-----------------------------projectManagement-----------------------------------//
    {id:21,label: "Zira",href: "/", progressScore:70,useFor:"projectManagement"},
    {id:22,label: "Github",href: "/", progressScore:75,useFor:"projectManagement"},
    {id:23,label: "Visual Studio Code",href: "/", progressScore:80,useFor:"projectManagement"},
    {id:24,label: "Miro",href: "/", progressScore:90,useFor:"projectManagement"},
    {id:25,label: "Postman",href: "/", progressScore:85,useFor:"projectManagement"},
    //-----------------------------coding-----------------------------------//
    {id:31,label: "HTML5",href: "/", progressScore:90, useFor:"coding"},
    {id:32,label: "CSS",href: "/", progressScore:80, useFor:"coding"},
    {id:33,label: "Javascript",href: "/", progressScore:85, useFor:"coding"},
    {id:34,label: "RESTAPI",href: "/", progressScore:65, useFor:"coding"},
    {id:35,label: "Graid & FlexBox",href: "/", progressScore:70, useFor:"coding"},
    //-----------------------------frameworks-----------------------------------//
    {id:46,label: "ReactJS",href: "/", progressScore:90, useFor:"frameworks" },
    {id:41,label: "NextJS",href: "/", progressScore:85, useFor:"frameworks" },
    {id:42,label: "TaildwindCSS",href: "/", progressScore:80, useFor:"frameworks"},
    {id:43,label: "ShadeCN",href: "/", progressScore:90,useFor:"frameworks"},
    {id:44,label: "Ridux",href: "/", progressScore:70,useFor:"frameworks"},
    {id:45,label: "Zustan",href: "/", progressScore:75,useFor:"frameworks"},
]
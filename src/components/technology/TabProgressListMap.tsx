"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {TabProgressListData,TabProgressListDataType,} from "./ProgressListData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressListMap from "./ProgressListMap";

export default function () {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-5">
          {TabProgressListData.map((i: TabProgressListDataType) => (
            <TabsTrigger key={i.id} value={i.tabValue}>
              {i.tabLabel}
            </TabsTrigger>
          ))}
        </TabsList>
        {TabProgressListData.map((i: TabProgressListDataType) => (
            <TabsContent key={i.id} value={i.tabValue}>
              <Card>
                <CardHeader>
                    <CardTitle>{i.tabLabel}</CardTitle>
                    <CardDescription>{i.tabLabel}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <ProgressListMap value={i.tabValue}/>
          </CardContent>
          <CardFooter>
          </CardFooter>
                </Card></TabsContent>
          ))}
      </Tabs>
    </div>
  );
}

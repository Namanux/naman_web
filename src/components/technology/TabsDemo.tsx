'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProgressListMap from "./ProgressListMap"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[700px]">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="account">top 5</TabsTrigger>
        <TabsTrigger value="design">Ui/UX Design</TabsTrigger>
        <TabsTrigger value="projectMenagment">Project Menagment</TabsTrigger>
        <TabsTrigger value="frontEnd">Front end</TabsTrigger>
        <TabsTrigger value="backEnd">Back-End</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          {/* <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="design">
        <Card>
          <CardHeader>
            <CardTitle>Designing tools</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProgressListMap /> 
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

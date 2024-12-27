"use client"
import Image from "next/image"
import contactUsBanner from "../img/contactus (1).jpeg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import anuj from "../img/anuj.jpeg"
import sanskriti from "../img/sanskriti.jpeg"
import nihal from "../img/nihal.jpeg"
import deepanshu from "../img/deepanshu.jpeg"

  

function Events() {
    const [tabActive, setTabActive] = useState("convenor")
  return (
    <div className="relative h-full p-8 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={contactUsBanner}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 "> </div>
      
      {/* Content */}
      <div className=" z-10 flex flex-col justify-center items-center bg-black bg-opacity-75 py-9 rounded-xl  min-h-[95vh]    w-full  px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#00EF38] uppercase font-bold text-start text-3xl">Contact Us</h2>
      <Tabs defaultValue="convenor" className="w-1/2 mt-7">
  <TabsList className="w-full p-5 flex flex-wrap h-auto bg-[linear-gradient(130deg,_#FF7F50,_#FFD700)] text-white text-2xl justify-evenly ">
    <TabsTrigger style={{ color: tabActive === "convenor" ? "#00EF38" : "white" }} onClick={() => setTabActive("convenor")} className={`font-bold`}  value="convenor">CONVENOR</TabsTrigger>
    <TabsTrigger style={{ color: tabActive === "secretaries" ? "#00EF38" : "white" }} onClick={() => setTabActive("secretaries")} className={`font-bold`} value="secretaries">SECRETARIES</TabsTrigger>
    <TabsTrigger style={{ color: tabActive === "coordinator" ? "#00EF38" : "white" }} onClick={() => setTabActive("coordinator")} className={`font-bold`} value="coordinator">CO-ORDINATER</TabsTrigger>
    <TabsTrigger style={{ color: tabActive === "team" ? "#00EF38" : "white" }} onClick={() => setTabActive("team")}    className={`font-bold`} value="team">TEAM MANAGING</TabsTrigger>
  </TabsList>
  <TabsContent className="min-h-[35vh] " value="convenor">
      
  <Card className="lg:col-span-1 md:col-span-1 grid justify-center items-center  w-fit px-4 mx-auto mt-4  bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten">
              <CardHeader className="flex flex-col items-center">
                       
                <CardDescription className="text-center text-lg font-bold text-white">PROF. VARUN KUMAR</CardDescription>
        
              </CardHeader>
              <Separator className="bg-white mb-5"/>
              {/* <Image src="/" alt="convener" width={200} height={200} className="rounded-full"/> */}
              <CardContent>
                <p className=" text-center text-[#00EF38] text-md "> Mobile : 7895902755</p>
              </CardContent>
            </Card>
  </TabsContent>
  <TabsContent className="min-h-[35vh] lg:grid-cols-2  grid-cols-1 " value="secretaries">
          
  <Card className="col-span-1 grid justify-center items-center  w-fit px-4 mx-auto mt-4  bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten">
              <CardHeader className="flex flex-col items-center">
                       
                <CardDescription className="text-center text-lg font-bold text-white"> ANUJ KUMAR PACHAURI</CardDescription>
        
              </CardHeader>
              <Separator className="bg-white mb-5"/>
              <Image src={anuj} alt="convener"  className="w-[200px] h-[268px] rounded-md mx-auto my-2"/>
              <CardContent>
                <p className=" text-center text-[#00EF38] text-md "> Mobile : 8755336299</p>
              </CardContent>
            </Card>
    </TabsContent>
    <TabsContent className="min-h-[35vh] " value="coordinator">
    
    </TabsContent>
    <TabsContent className="min-h-[35vh] grid lg:grid-cols-2  grid-cols-1 " value="team">
    <Card className=" col-span-1  w-fit px-4 mx-auto mt-4  bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten">
              <CardHeader className="flex flex-col items-center">
                       
                <CardDescription className="text-center text-lg font-bold text-white"> SANSKRITI GOYAL</CardDescription>
        
              </CardHeader>
              <Separator className="bg-white mb-5"/>
              <Image src={sanskriti} alt="convener"  className="w-[200px] h-[268px] rounded-md mx-auto my-2"/>
              <CardContent>
                <p className=" text-center text-[#00EF38] text-md "> Mobile : 9058894258</p>
              </CardContent>
            </Card>
            <Card className=" col-span-1 w-fit px-4 mx-auto mt-4  bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten">
              <CardHeader className="flex flex-col items-center">
                       
                <CardDescription className="text-center text-lg font-bold text-white"> NIHAL NITIN SINGH</CardDescription>
        
              </CardHeader>
              <Separator className="bg-white mb-5"/>
              <Image src={nihal} alt="convener"  className="w-[200px] h-[268px] rounded-md mx-auto my-2"/>
              <CardContent>
                <p className=" text-center text-[#00EF38] text-md "> Mobile : 9120834888</p>
              </CardContent>
            </Card>
            <Card className=" col-span-1 w-fit px-4 mx-auto mt-4  bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten">
              <CardHeader className="flex flex-col items-center">
                       
                <CardDescription className="text-center text-lg font-bold text-white">DEEPANSHU PANDEY</CardDescription>
        
              </CardHeader>
              <Separator className="bg-white mb-5"/>
              <Image src={deepanshu} alt="convener"  className="w-[200px] h-[268px] rounded-md mx-auto my-2"/>
              <CardContent>
                <p className=" text-center text-[#00EF38] text-md "> Mobile : 9555793012</p>
              </CardContent>
            </Card>
    </TabsContent>
 
</Tabs>

      </div>
        

  
    </div>
  )
}

export default Events
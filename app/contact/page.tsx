"use client";
import Image, { StaticImageData } from "next/image";
import contactUsBanner from "../img/contactus.jpeg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import alisha from "../img/alisha.jpeg"
import anuj from "../img/anujkumar_modify.jpg"
import sarthak from "../img/sarkthak_img.jpg"
import sanskriti from "../img/sanskriti.jpeg";
import nihal from "../img/nihal.jpeg";
import deepanshu from "../img/deepanshu.jpeg";
import aditya from "../img/aditya.jpeg";
import shruti from "../img/shruit.jpg";
import varunSir from "../img/varun_sir.jpg"
import spSir from "../img/sp_sir2.jpg"
import manasvi from "../img/manashvi2.jpg"
// Sample Data
type TeamDataKey = 'convenor' | 'secretaries' | 'coordinator' | 'managing team';
type TeamData  = { name: string; phone: string; image?: StaticImageData };
const teamData: Record<TeamDataKey, TeamData[]> | Record<string, TeamData[]> = {
  convenor: [
    { name: "PROF. VARUN KUMAR", phone: "7895902755", image : varunSir },
    { name: "PROF. SP GANGWAR", phone: " 8765890822", image : spSir },
  ],
  secretaries: [
    { name: "ALISHA GUPTA", phone: "9112570427", image: alisha },
    { name: "ANUJ KUMAR PACHAURI", phone: "8755336299", image: anuj },
  ],
  coordinator: [
    {name : "SHRUTI DUTTA", phone: "8765465904", image : shruti},
    { name: "SARTHAK PANDEY", phone: "9058894258", image: sarthak }
   
  ],
  "managing team": [
    { name: "MANASHVI SWAROOP", phone: "8726711567", image: manasvi },
    { name: "SANSKRITI GOYAL", phone: "9058894258", image: sanskriti },
    { name: "NIHAL NITIN SINGH", phone: "9120834888", image: nihal },
    { name: "DEEPANSHU PANDEY", phone: "9555793012", image: deepanshu },
    { name: "ADITYA VERMA", phone: "9368891933", image: aditya },
  


  ],
};

function Events() {
  const [tabActive, setTabActive] = useState("convenor");

  return (
    <div className="relative h-full p-4 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={contactUsBanner}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="z-10 flex flex-col justify-center items-center bg-black bg-opacity-75 py-9 rounded-xl w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#00EF38] uppercase font-bold text-start text-3xl">
          Contact Us
        </h2>
        <Tabs defaultValue="convenor" className="lg:w-[80%] w-full mt-7">
          <TabsList className="w-full p-5 flex flex-wrap h-auto bg-[linear-gradient(130deg,_#FF7F50,_#FFD700)] text-white text-2xl justify-evenly">
            {Object.keys(teamData).map((key) => (
              <TabsTrigger
                key={key}
                style={{
                  color: tabActive === key ? "#FF7F50" : "white",
                }}
                onClick={() => setTabActive(key)}
                className="font-bold"
                value={key}
              >
                {key.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(teamData).map((key) => (
            <TabsContent key={key} className="min-h-[35vh]" value={key}>
              <div
                className={`grid lg:grid-cols-3 w-full grid-cols-1 gap-4`}
              >
                {(teamData[key as TeamDataKey] as TeamData[]).map((member : TeamData , index : number) => (
                  <Card
                    key={index}
                    className="w-fit px-4 mx-auto mt-4 bg-[linear-gradient(287.99deg,_rgba(26,_28,_26,_0.91)_3.5%,_rgba(53,_60,_57,_0.91)_49.45%,_rgba(38,_51,_51,_0.91)_99.43%)] bg-blend-lighten"
                  >
                    <CardHeader className="flex flex-col items-center">
                      <CardDescription className="text-center text-md font-bold text-white">
                        {member.name}
                      </CardDescription>
                    </CardHeader>
                    <Separator className="bg-white mb-5" />
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={`${member.name}'s image`}
                        className="w-[200px] object-cover h-[268px] rounded-md mx-auto my-2"
                      />
                    )}
                    <CardContent>
                      <p className="text-center text-[#FF7F50] text-md">
                        Mobile No. : {member.phone}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Events;

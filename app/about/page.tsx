"use client"
import aboutusBanner from "../img/abouts (1).jpeg"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,

} from "@/components/ui/card"
import { TeacherCard } from "@/components/ui/teacher-card";
import Image from "next/image";
import dirSir from "../img/dirctorSir.jpg"
import sujeetSir from "../img/csa_chairman.jpg"
import samirSir from "../img/sameersir.jpg"


const teachers  = [
  {
    name: "DR. R.K UPADHYAYA",
    role: "DIRECTOR, KNIT SULTANPUR",
    imageUrl: dirSir,
    socialLinks: [
      
      { type: 'linkedin', url: 'https://www.linkedin.com/in/rajeev-kumar-upadhyay-8b0202190/' },
      { type: 'email', url: 'dirctor@knit.ac.in' }
    ]
  },
  {
    name: "DR. SUJEET AGRAWAL",
    role: "CHAIRMAN-CSA, KNIT SULTANPUR",
    imageUrl: sujeetSir,
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/sujeet-agarwal-33791572/' },
      { type: 'email', url: 'tvaran@knit.ac.in' }
    ]
  },
  {
    name: "PROF. SAMEER SRIVASTAVA",
    role: "DEAN OF STUDENT OF WELFARE",
    imageUrl: samirSir,
    socialLinks: [
      { type: "linkedin", url: 'https://www.linkedin.com/in/samir-srivastava-0774b213/' },
      { type: 'email', url: 'tvaran@knit.ac.in' }
    ]
  },
]

function Sponsors() {
  return (
    <div className="relative h-full py-8 lg:px-12 px-4 flex flex-col gap-7 items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={aboutusBanner}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0   bg-black opacity-65"> </div>

      {/* Content */}
      <div className=" z-10 flex  flex-col   w-full  lg:px-8">
        <div className="w-full">
          <h2 className="text-[#00EF38]  font-bold text-start text-3xl">Abouts Us</h2>
        </div>
        <div className="flex flex-row flex-wrap rounded-md  lg:rounded-lg mt-7 p-7 gap-6 bg-gray-900 bg-opacity-85 items-center justify-center">
          <div>
            <p className="text-center">
              Kamla Nehru Institute of Technology, Sultanpur is a renowned technical institution that provides high-quality education and research opportunities in the field of engineering and technology. The institute offers a conducive environment for the overall growth of students. It attracts talented students for undergraduate and postgraduate courses and emphasizes the importance of ethical values in the academic community of students and teachers. The institute is affiliated with Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <p className="mt-5">
              The Sports Council of KNIT Sultanpur is dedicated to fostering a vibrant and inclusive sports culture that complements the academic growth of our students by promoting physical excellence, teamwork, and sportsmanship. The Sports Council aims to instill core values like discipline, respect, and fair play, encouraging students of all skill levels to participate and grow.          </p>
          </div>
          <div className="grid  my-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} name={teacher.name} role={teacher.role} imageUrl={teacher.imageUrl} socialLinks={teacher.socialLinks} />
          ))}
        </div>
          <h2 className=" text-[#00EF38] font-semibold text-start lg:text-4xl text-2xl ">About us</h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <Card className="lg:col-span-1 bg-black md:col-span-1 grid justify-center items-center  w-full  ">
              <CardHeader className="flex flex-col items-center">

                <CardDescription className="text-center text-lg font-bold text-[#6AA3FF]">National-Level Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-center text-md ">Tvaran is the premier sports fest of KNIT Sultanpur, celebrated with enthusiasm and attracting participants from colleges nationwide. </p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1  bg-black md:col-span-1 grid justify-center items-center  w-full  ">
              <CardHeader className="flex flex-col items-center">

                <CardDescription className="text-center text-lg font-bold text-[#6AA3FF]">Diverse
                  Sports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-center text-md ">The fest features a variety of sports, including cricket, football, basketball, volleyball, badminton, table tennis, and athletics. </p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1  bg-black md:col-span-1 grid justify-center items-center  w-full  ">
              <CardHeader className="flex flex-col items-center">

                <CardDescription className="text-center text-lg font-bold text-[#6AA3FF]">Resilience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-center text-md ">Challenges and setbacks are part of the journey. This fest inspires athletes to rise stronger, overcome obstacles, and never give up. </p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1  bg-black md:col-span-1 grid justify-center items-center  w-full  ">
              <CardHeader className="flex flex-col items-center">

                <CardDescription className="text-center text-lg font-bold text-[#6AA3FF]">Beyond
                  Competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-center text-md "> In addition to sports, the event includes cultural performances and fun activities, creating a well-rounded celebration.</p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1  bg-black md:col-span-1 grid justify-center items-center  w-full  ">
              <CardHeader className="flex flex-col items-center">

                <CardDescription className="text-center text-lg font-bold text-[#6AA3FF]">Holistic
                  Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" text-center text-md ">Tvaran provides students with opportunities to showcase talent, develop life skills, and create lasting memories </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>








      {/* background: #6AA3FF;
 */}
    </div>
  )
}

export default Sponsors;


{/* </Card>
<Card className="lg:col-span-1 md:col-span-1 grid justify-center items-center  w-full  bg-gray-900">
  <CardHeader className="flex flex-col items-center">
    <CardTitle className="text-center "><Megaphone className="size-16" /></CardTitle>
    <CardDescription className="text-center text-xl font-bold text-[#00EF38]">Hype Around Spardha</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="font-semibold">For starters, 2024 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.</p>
  </CardContent>
</Card> */}
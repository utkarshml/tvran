


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Megaphone } from "lucide-react";
  
function Sponsors() {
  return (
    <div className="relative h-full py-8 px-12 flex flex-col gap-7 items-center justify-center overflow-hidden">
         <div >
            <h1 className="text-center text-3xl font-bold  uppercase text-[#00EF38] mb-4">About us</h1>
            <div className="bg-gray-900 px-7 py-7  p-4 rounded-xl ">
                <p className="text-white text-justify text-md font-semibold">
                Spardha is the annual sports festival of IIT (BHU), Varanasi. In its glorious history of over 38 years, Spardha has grown to become the largest and one of the most awaited sports festival of northern India where athletic competition is drawn from throughout the country. Each year, over a thousand participants compete in an array of sports like hockey, basketball, cricket, boxing, tennis and many more, creating a stunning spectacle of exceptional fervidness in athletic talent. The event, embraced by one of the best gatherings of celebrated sports personalities and spirited audience, has always enthused a zest for continuously scaling new zeniths in the pursuit of excellence and vibrancy among one and all. At present, Spardha has a team of over 500 and is also associated with numerous renowned firms and sports organizations. These exhilarating days have many resounding experiences for participants and supporters alike, creating a lifetime of memories. Gear up yourself to witness the thrilling and frolicsome SPARDHA.
                </p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full   gap-3 ">
         <Card className="lg:col-span-1 md:col-span-1 grid justify-center items-center  w-full  bg-gray-900">
  <CardHeader className="flex flex-col items-center">
    <CardTitle className="text-center "><Megaphone className="size-16" /></CardTitle>
    <CardDescription className="text-center text-xl font-bold text-[#00EF38]">Hype Around Spardha</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="font-semibold">For starters, 2024 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.</p>
  </CardContent>
</Card>
<Card className="lg:col-span-1 md:col-span-1 grid justify-center items-center  w-full  bg-gray-900">
  <CardHeader className="flex flex-col items-center">
    <CardTitle className="text-center "><Megaphone className="size-16" /></CardTitle>
    <CardDescription className="text-center text-xl font-bold text-[#00EF38]">Hype Around Spardha</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="font-semibold">For starters, 2024 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.</p>
  </CardContent>
</Card>
<Card className="lg:col-span-1 md:col-span-1 grid justify-center items-center  w-full  bg-gray-900">
  <CardHeader className="flex flex-col items-center">
    <CardTitle className="text-center "><Megaphone className="size-16" /></CardTitle>
    <CardDescription className="text-center text-xl font-bold text-[#00EF38]">Hype Around Spardha</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="font-semibold">For starters, 2024 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.</p>
  </CardContent>
</Card>






         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full   gap-3 ">

         </div>
         
  </div>
  )
}

export default Sponsors;
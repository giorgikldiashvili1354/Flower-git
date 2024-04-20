import Navbar from "@/components/NavBar";
import Body from "@/components/body";
import Card from "@/components/card";
import Section5 from "@/components/ertiori";
import Jiz from "@/components/jiz";
import Lomk from "@/components/lomk";
import Nav from "@/components/nav";


export default function Home() {

return (
  
  <>
  
  <Nav />
  <div className="mx-auto border-t-2 w-5/6  "></div>
  <Navbar/>
  <Body/>
  <Section5/>
  <Card/>
  <Lomk/>
  <Jiz/>
  </>
)
}

import Aboutsection from "./components/Aboutsection";
import Blogsection from "./components/Blogsection";
import Contactsection from "./components/Contactsection";
import Footersection from "./components/Footersection";
import Headersection from "./components/Headersection";
import Herosection from "./components/Herosection";


export default function Home() {
  return (
    <div className="">
      <Headersection/>
      <Herosection/>
      <Aboutsection/>
      <Blogsection/>
      <Contactsection/>
      <Footersection/>
    </div>
  );
}

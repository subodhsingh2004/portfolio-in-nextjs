import Hello from "@/components/Hello";
import Details from "@/components/Details";
import Facts from "@/components/Facts";


export default function Home() {

  return (
    <div className="w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[48%] relative border-x border-[#202020] flex flex-col items-center justify-center space-y-6">

      <Hello />

      {/* <p className={`${robotoMono.className} text-gray-400 text-center text-sm px-6 md:w-[800px]`}>
        Hey! I'm a full-stack developer who loves turning ideas into clean, functional code. From slick frontends to solid backends, I build stuff that works and looks good. I level up through lines of code and battle bugs daily.
      </p> */}

      <Details />


      <div className="flex items-center justify-center absolute bottom-2 w-full border-t border-[#202020]">
        <Facts/>
      </div>

    </div>

  );
}

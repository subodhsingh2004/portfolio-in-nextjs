import Hello from "@/components/Hello";
import { Geist, Geist_Mono, Roboto_Mono, DM_Sans, Poppins } from "next/font/google";
import Details from "@/components/Details";
import Facts from "@/components/Facts";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const facts = [
  "The first website launched in 1991.",
  "Octopuses have three hearts and blue blood.",
  "The moon experiences small moonquakes regularly.",
  "Email was invented back in 1971.",
  "Strawberries aren't berries, but bananas are.",
  "Lightning is five times hotter than sun.",
  "The Eiffel Tower grows in summer heat.",
  "Ants never sleep throughout their lives.",
  "Honey stays good forever without expiring.",
  "Sharks existed millions of years before trees.",
  "Venus spins slower than it orbits sun.",
  "Wombats produce perfectly cube-shaped poop.",
  "Humans share DNA with bananas (60%).",
  "Sloths hold breath longer than dolphins.",
  "A sneeze can exceed 100 miles/hour.",
  "More stars exist than grains of sand.",
  "Octopuses have nine brains, three hearts too.",
  "Cows have best friends and get stressed.",
  "Scotland’s national animal is a unicorn.",
  "Tigers’ skin is striped, not just fur.",
  "Cats can be allergic to humans too.",
  "The dot on 'i' is a tittle.",
  "Fake flamingos outnumber real ones worldwide.",
  "First computer mouse was made of wood.",
  "Group of flamingos is called flamboyance.",
  "Snails can sleep for three whole years.",
  "Some jellyfish can technically live forever.",
  "You can't hum while holding your nose.",
  "Butterflies can taste with their feet.",
  "A jiffy equals 1/100th of a second.",
  "Rain contains vitamin B12 naturally occurring."
];



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

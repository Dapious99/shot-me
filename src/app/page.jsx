import Link from "next/link";
import { FaCamera } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen px-20 py-11">
      <p className="text-center text-2xl">
        Welcome to <span className="italic">shotMe</span>
      </p>
      <div className="flex gap-4">
        <Link href="/picture" className="">
          <FaCamera className="size-60 text-amber-900 hover:animate-ping" />
          <p className="inline-flex items-center gap-1 font-medium mt-2">
            Click here to take your shot! <IoIosArrowForward />
          </p>
        </Link>
        <Link href="/video" className="">
          <BsFillCameraReelsFill className="size-56 text-amber-900 hover:animate-ping" />
          <p className="inline-flex items-center gap-1 font-medium mt-6">
            Click here to record a video! <IoIosArrowForward />
          </p>
        </Link>
        <div></div>
      </div>
    </main>
  );
}

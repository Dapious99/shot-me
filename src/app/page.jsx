import Link from "next/link";
import { FaCamera } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 px-8 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold italic mb-4">
          Welcome to <span className="text-amber-600">shotMe</span>
        </h1>
        <p className="text-lg">Capture your moments with us.</p>
      </section>
      <div className="flex flex-col md:flex-row gap-8">
        <Link
          href="/picture"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
        >
          <FaCamera
            className="text-6xl text-amber-900 hover:animate-pulse"
            aria-label="Take a picture"
          />
          <p className="mt-4 text-lg font-medium inline-flex items-center gap-1">
            Take a shot! <IoIosArrowForward />
          </p>
        </Link>
        <Link
          href="/video"
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
        >
          <BsFillCameraReelsFill
            className="text-6xl text-amber-900 hover:animate-pulse"
            aria-label="Record a video"
          />
          <p className="mt-4 text-lg font-medium inline-flex items-center gap-1">
            Record a video! <IoIosArrowForward />
          </p>
        </Link>
      </div>
    </main>
  );
}

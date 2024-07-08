import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-20 py-11">
      <p className="text-center text-2xl">
        Welcome to <span className="italic">shotMe</span>
      </p>
      <div>
        <Link href="/picture" className="">
          <p>Click here to take your shot!</p>
        </Link>
        <div></div>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#fdf6f0]">
      <Image
        // src="/cute-404.png"
        alt="Cute 404 Illustration"
        width={400}
        height={400}
        className="mb-6"
      />
      <h1 className="text-6xl font-bold text-indigo-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Uh-oh! You're a little lost.
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        It seems the page you're looking for wandered off. Let's get you back on track.
      </p>
      <Link href="/">
        <Button className="bg-indigo-600 hover:bg-purple-600 text-white px-6 py-2 rounded-xl transition-colors duration-200">
          Return Home
        </Button>
      </Link>
    </div>
  );
}

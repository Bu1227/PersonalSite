import avatar from "@/public/avatar.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:flex-row">
      {/* 左側文字區塊 */}
      <div className="flex flex-col items-start justify-center w-full mb-8 lg:w-1/2 lg:mb-0">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-left">
          Welcome to My Personal Site
        </h1>
        <p className="mb-8 text-xl text-left text-gray-600">
          Hi, I'm Bu!
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* 右側圖片區塊 */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="relative w-64 h-64 bg-gray-200 rounded-lg">
          {/* 替換為您的圖片 */}
          <Image
            src={avatar} // 確保這個路徑是正確的
            alt="Personal Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
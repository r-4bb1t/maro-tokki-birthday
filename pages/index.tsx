import { useState } from "react";
import Count from "@/components/Count";
import Person from "@/components/Person";

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <main className="w-full relative">
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div className="text-4xl lg:text-8xl mb-3 font-semibold">
          2023.08.25<sup>SAT</sup>
        </div>
        <Count />
        <div className="text-xl lg:text-4xl mt-12 font-semibold">
          COMING SOON
        </div>
      </section>
      <Person />
      <section className="py-48 flex flex-col w-full items-center justify-center text-center font-bold text-2xl lg:text-3xl">
        두 사람의 귀한 생일파티에,
        <br />
        누추한 여러분을 초대합니다.
      </section>
      <section className="py-48 flex flex-col w-full items-center justify-center">
        <div className="w-full max-w-2xl px-8 flex flex-col gap-2">
          <div className="chat chat-end">
            <div className="chat-bubble bg-gray-300 text-black">
              어디로 가면 되나요?
            </div>
          </div>
          <div className="chat chat-start mb-12">
            <div className="chat-bubble bg-gray-600 text-white">
              서울시 영등포구 도신로36 4층 디투입니다.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble bg-gray-300 text-black">
              준비물이 있나요?
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble bg-gray-600 text-white">
              1. 15,000원(대관료)
              <br />
              834-910139-65907 하나 나마로
              <br />
              <br />
              2. 생일선물
              <br />
              두손은 무겁게 마음은 가볍게, 술 환영
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full text-center py-6 absolute bottom-0 text-xs">
        Made by
        <a
          href="https://r4bb1t.dev/"
          className="inline-block ml-1 bg-black text-white px-1 rounded"
        >
          @r-4bb1t
        </a>
      </footer>
    </main>
  );
}

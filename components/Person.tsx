export default function Person() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-48 py-24">
      <div className="w-full px-12 max-w-5xl flex flex-col items-center lg:items-start gap-12 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="w-56 h-56">
          <img
            className="mask mask-hexagon w-full h-full object-cover"
            src="/maro.png"
          />
        </div>
        <div className="w-full max-w-xl text-center lg:text-left">
          <div className="text-2xl font-bold">Maro Na</div>
          <div className="text-lg font-medium">AI Engineer</div>
          <div>1997.08.25</div>
          <div className="my-4 font-bold text-2xl">
            “고대에서 가장 유명한 사람”
          </div>
          <ul className="mt-4 list-disc list-inside w-full text-left">
            <li>
              Korea University
              <ul className="list-disc text-sm list-inside ml-8 w-full lg:w-[400px]">
                <li>Sejong Campus, Major in Big Data Science</li>
                <li>
                  Seoul Campus, Interdisciplinary Major in Artificial
                  Intelligence
                </li>
                <li>
                  Sejong Campus, Artificial Intelligence Association BIG_PY
                  founded and 1st and 2nd President (21.12-)
                </li>
                <li>Seoul Campus, KUCC President (20.12-21.8)</li>
                <li>
                  Sejong Campus, Director of the Information Management Bureau
                  of the Press and Public Relations Bureau of the Student
                  Council (19.12-20.12)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-12 max-w-5xl flex flex-col items-center lg:items-start gap-12 lg:gap-0 lg:flex-row-reverse lg:justify-between">
        <div className="w-56 h-56">
          <img
            className="mask mask-hexagon w-full h-full object-cover"
            src="/tokki.jpeg"
          />
        </div>
        <div className="w-full max-w-xl flex flex-col lg:items-end text-center">
          <div className="text-2xl font-bold">Hyunchae Kim</div>
          <div className="text-lg font-medium">Software Engineer</div>
          <div>2000.08.21</div>
          <div className="my-4 font-bold text-2xl">“고려대 일찐짱”</div>
          <ul className="mt-4 list-disc list-inside w-full lg:w-[400px] text-left">
            <li>
              Korea University
              <ul className="list-disc text-sm list-inside ml-8">
                <li>Seoul Campus, Major in Health and Environmental Science</li>
                <li>
                  Seoul Campus, Interdisciplinary Major in Software Technology &
                  Entrepreneurship
                </li>
                <li>Seoul Campus, KUCC President (20.7-20.12, 22.1-22.12)</li>
              </ul>
            </li>
            <li>
              KakaoBrain
              <ul className="list-disc text-sm list-inside ml-8">
                <li>Pathfinder Internship Program (23.6-)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import teamPhoto from "../images/team.png";
export function About() {
  return (
    <section className="py-20 md:px-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-[#F0813C] text-sm mb-2">
              WELCOME TO REGISTERKARO.IN
            </p>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-[#F0813C]">Register Karo</span>
            </h2>

            <p className="text-gray-600 mb-6">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I'm
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone's expectations.
            </p>

            <p className="text-gray-600 mb-8">
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>

            <button className="bg-[#1C4670] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-opacity-90 transition-colors">
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <Image
              src={teamPhoto}
              alt="Register Karo Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

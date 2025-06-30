"use client";

import Mockup from "./mockup";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="gap-16 pt-32 pb-6 lg:grid-cols-2">
          {/* Section header */}
          <div className="pb-6 text-center">
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Prompt your data to life
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-4 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Design data visualizations using AI.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Prompt + CSV <span className="items-center text-2xl">→</span>{" "}
                clean chart exportable to SVG, PNG, or PDF.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#cta"
                  >
                    <span className="relative inline-flex items-center">
                      Join the waitlist{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Mockup />
        </div>
      </div>
    </section>
  );
}

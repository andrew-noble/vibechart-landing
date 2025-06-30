"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Mockup() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex w-48 flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center rounded-2xl bg-gray-100 p-4">
            {/* CSV File Icon */}
            <svg
              className="h-12 w-12 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 2v6h6" />
              {/* 4 cells in 2x2 grid - centered and more visible */}
              <path d="M8 10h3v3H8z" fill="white" />
              <path d="M13 10h3v3H13z" fill="white" />
              <path d="M8 15h3v3H8z" fill="white" />
              <path d="M13 15h3v3H13z" fill="white" />
            </svg>
            <div className="mt-2 text-center text-sm font-medium text-gray-700">
              CSV File
            </div>
          </div>

          {/* Plug/Connector Icon */}
          <div className="flex items-center justify-center">
            <svg
              className="h-8 w-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>

          <div className="w-full rounded-2xl bg-gray-100 p-4">
            <Typewriter
              words={[
                "Add a linear trendline",
                "Change the points to blue circles",
                "Increase the axes labels font size",
                "Add a legend",
                "Add gridlines",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-16">
          <svg
            className="h-8 w-8 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 9h14v2H5V9z" />
            <path d="M5 13h14v2H5V13z" />
          </svg>
        </div>

        <div className="flex items-center justify-center lg:w-128 lg:bg-gray-100">
          <Image
            src="/images/graph.svg"
            alt="Chart visualization"
            width={48}
            height={48}
            className="h-auto w-64 lg:w-128"
          />
        </div>
      </div>
    </div>
  );
}

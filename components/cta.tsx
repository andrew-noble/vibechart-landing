import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section id="cta" className="bg-slate-800 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left column - Blurb */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Get early access to VibeChart
            </h2>
            <p className="text-lg text-slate-300">
              I haven't built this yet, but I've built ones very technically
              similar.
              <br />
              <br />
              <p className="text-lg text-slate-300">
                I am trying to gauge interest in the tool, if this would be
                helpful for your workflow, please join the waitlist or email me
                directly with thoughts!{" "}
              </p>
            </p>
          </div>

          {/* Right column - Email form */}
          <div>
            <form
              action="https://formsubmit.co/aknoble.andrew@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="btn bg-blue-500 px-6 py-3 text-white shadow-sm hover:bg-blue-600"
              >
                Join Waitlist
              </button>

              {/* FormSubmit hidden fields */}
              <input
                type="hidden"
                name="_subject"
                value="New VibeChart Waitlist Subscriber"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for joining the VibeChart waitlist! We'll keep you posted. In the meantime, if you have any thoughts or specific use cases, don't hesistate to reach out! "
              />
            </form>

            <p className="mt-3 text-sm text-slate-400">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-8 py-8 sm:grid-cols-2 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* Company info */}
          <div className="space-y-4">
            <div className="max-w-md text-sm text-gray-600">
              <p>
                Data visualization made easy. Transform your CSV files into
                beautiful charts with simple AI prompts.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              © 2025 VibeChart. All rights reserved.
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:text-right">
            <h3 className="text-sm font-medium">Connect with us</h3>
            <ul className="flex gap-3 sm:justify-end">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://twitter.com/andrewrno"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="mailto:aknoble.andrew@gmail.com"
                  aria-label="Email"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M26 8H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM6 10l10 6 10-6v12H6V10z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <div className="text-sm text-gray-600">
              <p>Questions? Feedback? We'd love to hear from you.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

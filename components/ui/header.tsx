import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <span className="text-xl font-bold text-gray-900">VibeChart</span>
          </div>

          {/* Join waitlist button */}
          <div className="flex items-center">
            <a
              href="#cta"
              className="btn-sm bg-blue-600 text-white shadow-sm hover:bg-blue-700"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

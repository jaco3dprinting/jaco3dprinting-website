export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-10 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h3 className="font-bold text-xl">
              Jaco <span className="text-orange-400">3D Printing</span>
            </h3>

            <p className="text-gray-400">
              Bringing Your Ideas To Life, One Layer At A Time
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/Jaco3DPrinting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/jaco3dprinting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2026 Jaco 3D Printing
        </div>

      </div>
    </footer>
  );
}
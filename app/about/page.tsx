export default function About() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-8">
          About Jaco 3D Printing
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          Based in White River, Mpumalanga, Jaco 3D Printing provides
          professional 3D printing, CAD design and printer repair services
          for hobbyists, businesses and makers.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400">
              Bringing your ideas to life through quality 3D printing,
              practical design solutions and reliable service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              What We Offer
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>• FDM 3D Printing</li>
              <li>• Multi-Colour Printing</li>
              <li>• CAD Design & Modelling</li>
              <li>• Functional Parts & Prototyping</li>
              <li>• 3D Printer Repair & Maintenance</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}
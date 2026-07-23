export default function About() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-8">
          About Jaco 3D Printing
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          Based in White River, Mpumalanga, Jaco 3D Printing provides
          3D printing, CAD design and printer repair services
          for hobbyists, businesses and makers.
        </p>

        <p className="text-xl text-gray-300 mb-10">
          Jaco 3D Printing is a Small Startup that is run from home and 
          trying to building to a bigger more capable manufacturing business  
          with the support of you. My Goals are to supply my Customers with 
          High quality 3D Printed parts for a more reasonable price that 
          is affordable. Thank you to everyone that has supported my small
          business to grow to what it is now and I hope to grow the amount
          of customers as this 3D Printing company grows with you to be able
          to bring you more Filament options to print from.
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
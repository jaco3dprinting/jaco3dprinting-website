import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
    
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
           <Image
            src="/images/Logo.png"
            alt="Jaco 3D Printing"
            width={500}
            height={500}
            className="w-auto h-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
           />
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bringing Your Ideas To Life,
              <span className="text-orange-400"> One Layer At A Time</span>
            </h1>

            <div className="inline-block bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full mb-6">
              📍 White River & Nelspruit, Mpumalanga
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Professional 3D Printing, Multi-Colour Printing,
              CAD Design and 3D Printer Repair & Maintenance Services.
            </p>

            <div className="flex gap-4">
              <a
  href="https://wa.me/27731018848"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-center"
>
  Request a Quote
</a>

              <Link
  href="/gallery"
  className="border border-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-lg font-semibold text-center"
>
  View Gallery
</Link>
            </div>
          </div>

        </div>
      </section>


      {/* Services Section */}
<section className="bg-[#161B22] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Our Services
    </h2>

    <p className="text-center text-gray-400 mb-12">
      Professional 3D printing, design and repair services.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-[#0D1117] p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-3">🖨️ FDM 3D Printing</h3>
        <p className="text-gray-400">
          High-quality prints for prototypes, custom parts and hobby projects.
        </p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-3">🎨 Multi-Colour Printing</h3>
        <p className="text-gray-400">
          Bring designs to life with vibrant multi-colour prints.
        </p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-3">📐 CAD Design</h3>
        <p className="text-gray-400">
          From sketches and ideas to production-ready 3D models.
        </p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-3">⚙️ Prototyping</h3>
        <p className="text-gray-400">
          Functional parts and rapid prototype development.
        </p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-3">🔧 Printer Repair & Maintenance</h3>
        <p className="text-gray-400">
          Diagnostics, repairs, calibration and maintenance services.
        </p>
      </div>

    </div>

  </div>
</section>


{/* Featured Projects */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Featured Projects
    </h2>

    <p className="text-center text-gray-400 mb-12">
      Examples of recent work from Jaco 3D Printing.
    </p>

    <div className="grid md:grid-cols-2 gap-8">


{/* MultiColor Image on home screen */}
      <div className="bg-[#161B22] rounded-xl overflow-hidden border border-cyan-500/20">
        <Image
  src="/images/gallery/print6.jpg"
  alt="Multi-Colour Character Print"
  width={800}
  height={600}
  className="w-full h-64 object-contain"
/>


        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Multi-Colour Character Print
          </h3>

          <p className="text-gray-400">
            High-quality multi-colour printing showcasing detailed finishes and vibrant colours.
          </p>
        </div>
      </div>


{/* CAD Image on home screen */}
      <div className="bg-[#161B22] rounded-xl overflow-hidden border border-cyan-500/20">
        <Image
  src="/images/gallery/print15.jpg"
  alt="CAD Redesign Project"
  width={800}
  height={600}
  className="w-full h-64 object-contain"
/>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            CAD Redesign Project
          </h3>

          <p className="text-gray-400">
            Reverse-engineered and redesigned component created through CAD modeling.
          </p>
        </div>
      </div>
 
    </div>

  </div>
</section>

{/* How It Works */}
<section className="bg-[#161B22] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      How It Works
    </h2>

    <p className="text-center text-gray-400 mb-12">
      From idea to finished product in four simple steps.
    </p>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="text-center">
        <div className="text-5xl mb-4">💡</div>
        <h3 className="font-bold text-xl mb-2">1. Submit Your Idea</h3>
        <p className="text-gray-400">
          Send us your STL file or explain your project requirements.
        </p>
      </div>

      <div className="text-center">
        <div className="text-5xl mb-4">💬</div>
        <h3 className="font-bold text-xl mb-2">2. Receive A Quote</h3>
        <p className="text-gray-400">
          We'll review the project and provide a detailed quotation.
        </p>
      </div>

      <div className="text-center">
        <div className="text-5xl mb-4">🖨️</div>
        <h3 className="font-bold text-xl mb-2">3. Printing & Production</h3>
        <p className="text-gray-400">
          Your project is printed and inspected for quality.
        </p>
      </div>

      <div className="text-center">
        <div className="text-5xl mb-4">📦</div>
        <h3 className="font-bold text-xl mb-2">4. Collection / Delivery</h3>
        <p className="text-gray-400">
          Collect locally or arrange delivery.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Service Area */}
<section className="py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Service Area
    </h2>

    <div className="inline-block border border-cyan-500 rounded-full px-6 py-3 mb-8">
      📍 White River & Nelspruit, Mpumalanga
    </div>

    <p className="text-xl text-gray-300">
      Based in White River, Jaco 3D Printing proudly serves customers
      throughout White River, Nelspruit and surrounding areas with
      professional 3D printing, CAD design and printer repair services.
    </p>

  </div>
</section>

{/* Contact CTA */}
<section className="bg-[#161B22] py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Ready To Start Your Next Project?
    </h2>

    <p className="text-xl text-gray-300 mb-10">
      Whether you need a custom print, CAD design, prototype, or printer repair,
      we're ready to help.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-[#0D1117] p-6 rounded-xl">
        <h3 className="font-bold mb-2">📞 Phone / WhatsApp</h3>
        <p>073 101 8848</p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl">
        <h3 className="font-bold mb-2">✉️ Email</h3>
        <p>jaco3dprinting@gmail.com</p>
      </div>

      <div className="bg-[#0D1117] p-6 rounded-xl">
        <h3 className="font-bold mb-2">📍 Location</h3>
        <p>White River, Mpumalanga</p>
      </div>

    </div>

    <a
      href="https://wa.me/27731018848"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg"
    >
      Chat on WhatsApp
    </a>

  </div>
</section>

    </main>
  );
}
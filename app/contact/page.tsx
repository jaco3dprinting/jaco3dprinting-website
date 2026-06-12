export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contact Details
            </h2>

            <div className="space-y-4 text-lg">
              <p>📞 073 101 8848</p>
              <p>✉️ jaco3dprinting@gmail.com</p>
              <p>📍 White River, Mpumalanga</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
  Request a Quote
</h2>

<div className="bg-[#161B22] p-8 rounded-xl border border-cyan-500/20">
  <p className="text-gray-300 mb-6">
    The quickest way to get a quote is via WhatsApp. Send us your STL file,
    photos, sketches, or project details and we'll get back to you as soon as possible.
  </p>

  <a
    href="https://wa.me/27731018848"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg"
  >
    Chat on WhatsApp
  </a>
</div>

          </div>

        </div>

      </div>
    </main>
  );
}
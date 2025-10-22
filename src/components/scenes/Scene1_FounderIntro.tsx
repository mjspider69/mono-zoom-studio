export const Scene1_FounderIntro = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-8 py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-light text-center mb-16 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          Scene 1: Founder Intro
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              Aryaan Alam
            </h3>
            <p className="text-xl text-gray-600 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              Managing Director & Founder
            </p>
            <p className="text-lg text-gray-700 leading-relaxed drop-shadow-[0_0_12px_rgba(0,0,0,0.1)]">
              Visionary leader with a passion for innovation and strategic thinking.
              Aryaan drives the company's growth and ensures excellence in every project,
              transforming the digital marketing landscape through creativity and technology.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h4 className="text-2xl font-light mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              Company Story
            </h4>
            <p className="text-gray-700 leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Founded in 2018, gumming4u emerged from a vision to revolutionize digital marketing.
              What started as a small team of passionate creatives has grown into a full-service
              agency serving clients across 8+ industries. Our journey has been marked by innovation,
              dedication, and a commitment to delivering extraordinary outcomes for every client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

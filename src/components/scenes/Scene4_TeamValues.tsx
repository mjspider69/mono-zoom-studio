export const Scene4_TeamValues = () => {
  const values = [
    'Integrity', 'Creativity', 'Customer Focus',
    'Quality', 'Accountability', 'Passion'
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-8 py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-light text-center text-white mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
          Scene 4: The Team & Values
        </h2>

        <div className="bg-white/5 border border-white/10 p-10 rounded-lg mb-12">
          <h3 className="text-3xl font-light text-white mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            Isaac Vivian
          </h3>
          <p className="text-xl text-white/80 mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Marketing Director
          </p>
          <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Creative genius specializing in brand strategy and digital campaigns.
            Isaac leads our marketing initiatives with creativity and precision,
            crafting compelling narratives that resonate with audiences and drive results.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-light text-white text-center mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            Our Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-white/20 text-center"
              >
                <p className="text-2xl font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

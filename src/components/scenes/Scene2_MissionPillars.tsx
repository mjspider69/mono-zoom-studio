export const Scene2_MissionPillars = () => {
  const pillars = [
    { title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
    { title: 'Collaboration', description: 'Working together to achieve excellence' },
    { title: 'Excellence', description: 'Delivering quality in every project' }
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-8 py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-light text-center text-white mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
          Scene 2: Mission & Pillars
        </h2>

        <div className="bg-white/5 border border-white/10 p-10 rounded-lg mb-12">
          <h3 className="text-3xl font-light text-white mb-6 text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            Our Mission
          </h3>
          <p className="text-xl text-white/90 text-center leading-relaxed drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            To empower businesses through strategic digital marketing, creative excellence,
            and cutting-edge technology, transforming ordinary ideas into extraordinary outcomes.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-light text-white text-center mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            Three Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-white/20 text-center"
              >
                <h4 className="text-2xl font-light text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                  {pillar.title}
                </h4>
                <p className="text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

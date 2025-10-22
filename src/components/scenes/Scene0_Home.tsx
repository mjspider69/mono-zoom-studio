export const Scene0_Home = ({ onExplore }: { onExplore?: () => void }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.9)] animate-pulse-glow">
          Welcome to gumming4u
        </h1>
        <p className="text-2xl text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] max-w-3xl mx-auto">
          Transform Ordinary Ideas Into Extraordinary Outcomes
        </p>
        <button
          onClick={onExplore}
          className="mt-8 px-10 py-4 text-xl bg-white text-black hover:bg-gray-200 transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] rounded font-light"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

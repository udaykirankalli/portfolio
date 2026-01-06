"use client";

import { useEffect, useState } from 'react';

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    // Generate mock contribution data (52 weeks × 7 days)
    const weeks = 52;
    const days = 7;
    const data: number[][] = [];

    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < days; day++) {
        // Random contribution count (0-10)
        weekData.push(Math.floor(Math.random() * 11));
      }
      data.push(weekData);
    }

    setContributions(data);
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count <= 2) return 'bg-blue-900/50';
    if (count <= 5) return 'bg-blue-700/70';
    if (count <= 8) return 'bg-blue-500/80';
    return 'bg-blue-400';
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GitHub Contributions
          </h2>
          <p className="text-gray-400 text-lg">
            Consistent coding and open source contributions
          </p>
        </div>

        <div className="p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl overflow-x-auto shadow-2xl">
          <div className="min-w-max">
            <div className="flex gap-1">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((count, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm ${getColor(count)} border border-white/10 hover:border-white/30 transition-all cursor-pointer`}
                      title={`${count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-6 justify-end">
              <span className="text-gray-400 text-sm">Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-white/5 border border-white/10" />
                <div className="w-3 h-3 rounded-sm bg-blue-900/50 border border-white/10" />
                <div className="w-3 h-3 rounded-sm bg-blue-700/70 border border-white/10" />
                <div className="w-3 h-3 rounded-sm bg-blue-500/80 border border-white/10" />
                <div className="w-3 h-3 rounded-sm bg-blue-400 border border-white/10" />
              </div>
              <span className="text-gray-400 text-sm">More</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl text-center hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">850+</div>
            <div className="text-gray-400 text-sm">Contributions</div>
          </div>
          <div className="p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl text-center hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
            <div className="text-gray-400 text-sm">Repositories</div>
          </div>
          <div className="p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl text-center hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="text-3xl font-bold text-teal-400 mb-2">3</div>
            <div className="text-gray-400 text-sm">Major Projects</div>
          </div>
          <div className="p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl text-center hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
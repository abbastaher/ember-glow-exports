import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const FireParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(25 100% 50%)",
      "hsl(355 83% 41%)",
      "hsl(46 100% 50%)",
      "hsl(25 100% 60%)",
      "hsl(15 100% 45%)",
    ];

    const generated: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-transparent z-10" />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-ember-drift"
          style={{
            left: `${p.x}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Ambient glow spots */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 animate-flicker"
        style={{
          background: "radial-gradient(circle, hsl(25 100% 50% / 0.3), transparent)",
          top: "30%",
          left: "20%",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full opacity-15 animate-flicker"
        style={{
          background: "radial-gradient(circle, hsl(355 83% 41% / 0.3), transparent)",
          top: "50%",
          right: "15%",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-10 animate-flicker"
        style={{
          background: "radial-gradient(circle, hsl(46 100% 50% / 0.2), transparent)",
          bottom: "20%",
          left: "50%",
          animationDelay: "2s",
        }}
      />
    </div>
  );
};

export default FireParticles;

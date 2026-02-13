import { BentoCard } from "./components/ui/BentoCard";

function App() {
  return (
    <main className="flex flex-col gap-10 mx-auto p-6 md:p-12 max-w-7xl min-h-screen">
      <header>
        <h1 className="font-black text-4xl md:text-6xl italic tracking-tighter">
          <span className="text-white">PORTFOLIO</span>
          <span className="ml-4 text-primary">2026</span>
        </h1>
      </header>

      {/* Grille Bento - 4 colonnes sur PC */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4 auto-rows-[180px]">
        
        {/* Tech Stack - Vertical (2 lignes) */}
        <div className="md:col-span-1 md:row-span-2">
          <BentoCard title="Tech Stack" className="border-primary border-l-4 h-full">
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'Node.js', 'Tailwind', 'Vite'].map(t => (
                <span key={t} className="bg-primary/10 px-2 py-1 border border-primary/20 rounded-full text-[10px] text-primary">{t}</span>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Projets - Large (2 colonnes) */}
        <div className="md:col-span-2">
          <BentoCard title="Projets" className="border-secondary border-t-4 h-full">
            <p className="font-light text-gray-400 text-lg">Exploration d'interfaces futuristes.</p>
          </BentoCard>
        </div>

        {/* Mobile - Petit carré */}
        <div className="md:col-span-1">
          <BentoCard title="Mobile" className="flex justify-center items-center opacity-50 h-full">
            <span className="text-xs uppercase tracking-widest rotate-90">Soon</span>
          </BentoCard>
        </div>

        {/* Backend - Petit carré */}
        <div className="md:col-span-1">
          <BentoCard title="Backend" className="border-secondary border-b-4 h-full">
            <p className="font-bold text-secondary">Spring Boot</p>
          </BentoCard>
        </div>

        {/* Code Snippet - Large (2 colonnes) */}
        <div className="md:col-span-2">
          <BentoCard title="Code Snippet" className="border-primary border-b-4 h-full">
            <pre className="font-mono text-[10px] text-primary/70 italic">
              {`{ status: "Building", year: 2026 }`}
            </pre>
          </BentoCard>
        </div>

      </div>
    </main>
  );
}

export default App;
import { BentoCard } from './components/ui/BentoCard';

function App() {
  return (
    <main className="mx-auto p-8 max-w-7xl min-h-screen">
      <header className="mb-12">
        <h1 className="bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-transparent text-4xl">
          Portfolio 2026
        </h1>
      </header>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <BentoCard title="Tech Stack" className="md:row-span-2">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs glass">React</span>
            <span className="px-3 py-1 rounded-full text-xs glass">Node.js</span>
          </div>
        </BentoCard>

        <BentoCard title="Projets" className="md:col-span-2">
          <p className="font-light text-2xl">Exploration de projets innovants.</p>
        </BentoCard>

        <BentoCard title="Code Snippet">
          <pre className="font-mono text-[10px] text-primary/80">
            {`const dev = {
  name: 'Portfolio',
  version: '2026'
};`}
          </pre>
        </BentoCard>
        
        {/* Backend - Carré */}
        <BentoCard title="Backend">
          <div className="flex justify-around items-center h-full text-secondary">
             {/* Icônes ici plus tard */}
             <div className="bg-secondary/20 rounded-lg w-10 h-10 animate-pulse" />
          </div>
        </BentoCard>
      </div>
    </main>
  );
}

export default App;
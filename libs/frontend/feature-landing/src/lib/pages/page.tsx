import { Hero } from '../components/Hero';
import { TodoList } from '../components/TodoList';

export const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary-light/10 font-sans leading-relaxed antialiased box-border">
      {/* Hero Section */}
      <Hero />

      {/* Todo Section */}
      <section id="todo-section" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              See It In
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent ml-3">
                Action
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preview how your tasks will look in our beautiful interface.
              Simple, clean, and designed to help you focus on what matters.
            </p>
          </div>

          {/* Todo List Component */}
          <TodoList />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/50 mt-14 text-sm opacity-60">
        <p className="text-muted-foreground">
          Made with <span className="text-red-300 inline-block">❤️</span> using React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;

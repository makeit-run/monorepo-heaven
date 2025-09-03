'use client';
import { CheckCircle, ListTodo, Target, Zap } from 'lucide-react';
import { UiButton } from '@frontend/shared/ui/UiButton/UiButton';
import heroImage from '../assets/hero.jpg';
export const Hero = () => {
  const scrollToTodos = () => {
    document?.getElementById('todo-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans antialiased">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/10 to-background" />

      {/* Hero Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImage.src || (heroImage as any)}
          alt="Beautiful todo workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 box-border">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-none m-0 tracking-tight">
              Horse Medicine
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed m-0">
              Welcome to your productivity companion. Get organized and
              accomplish more with our elegant todo management solution.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 transition-all duration-150 ease-in-out">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 transition-all duration-150 ease-in-out hover:bg-green-100 hover:text-white box-border">
              <ListTodo className="h-4 w-4 text-primary transition-all duration-150 ease-in-out" />
              <span className="text-sm font-medium transition-all duration-150 ease-in-out">Organize Tasks</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 transition-all duration-150 ease-in-out hover:bg-green-100 hover:text-white box-border">
              <Target className="h-4 w-4 text-primary transition-all duration-150 ease-in-out" />
              <span className="text-sm font-medium transition-all duration-150 ease-in-out">Set Goals</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 transition-all duration-150 ease-in-out hover:bg-green-100 hover:text-white box-border">
              <CheckCircle className="h-4 w-4 text-success transition-all duration-150 ease-in-out" />
              <span className="text-sm font-medium transition-all duration-150 ease-in-out">Track Progress</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 transition-all duration-150 ease-in-out hover:bg-green-100 hover:text-white box-border">
              <Zap className="h-4 w-4 text-warning transition-all duration-150 ease-in-out" />
              <span className="text-sm font-medium transition-all duration-150 ease-in-out">Boost Productivity</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <UiButton
              onClick={scrollToTodos}
              size="large"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 shadow-2xl hover:shadow-primary/40 hover:scale-105"
            >
              View Sample Todos
            </UiButton>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <CheckCircle className="h-12 w-12 text-success animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <ListTodo className="h-10 w-10 text-primary animate-bounce" />
      </div>
    </section>
  );
};

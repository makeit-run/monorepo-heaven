import { UiButton } from '@frontend/shared/ui/UiButton/UiButton';
import { TodoList } from '../components/TodoList';
import { ArrowLeft } from 'lucide-react';
import { redirect } from 'next/navigation';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary-light/10">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <UiButton
            onClick={() => redirect('/')}
            variant="ghost"
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </UiButton>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            My Todo App
          </h1>
          <div /> {/* Spacer for centering */}
        </div>

        {/* Todo App */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Manage Your Tasks
            </h2>
            <p className="text-lg text-muted-foreground">
              Create, edit, complete, and organize your todos with ease
            </p>
          </div>

          <TodoList />
        </div>
      </div>
    </div>
  );
};

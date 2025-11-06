import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ThemeSwitcher />
      <h1 className="mb-4 text-5xl font-bold tracking-tight">
        Portfolio
      </h1>
      <p className="mb-8 text-muted-foreground">
        Système de thèmes élaboré et extensible ✨
      </p>
      <div className="flex gap-3">
        <Button>Bouton Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  );
}

export default App;

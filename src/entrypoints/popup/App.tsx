import Button from "@/components/Button";

import { ClipboardText, Pen } from "@phosphor-icons/react";

function App() {
  return (
    <main className="flex flex-col items-center gap-2 px-2 py-4 min-w-80">
      <header className="text-center">
        <h1 className="font-semibold">FlashNotes</h1>
        <p className="text-md">
          Write notes while you browse, as quick as a flash &#x26A1;
        </p>
      </header>
      <div className="flex flex-row gap-2">
        <Button icon={Pen} label="New note" />
        <Button icon={ClipboardText} label="Your notes" />
      </div>
      <footer className="text-sm">
        Made by <a href="https://github.com/dougdomingos">@dougdomingos</a>
      </footer>
    </main>
  );
}

export default App;

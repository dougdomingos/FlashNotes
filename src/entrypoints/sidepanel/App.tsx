import { NoteCard, NoteCardProps } from "@/components/NoteCard";

function App() {
  const notes: NoteCardProps[] = [
    {
      noteId: Date.now(),
      title: "Teste",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi error sed obcaecati illo eos magni voluptates provident voluptatem enim!",
    },
  ];

  return (
    <main className="p-3.5">
      <h1>FlashNotes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 gap-2.5">
        {notes.map(note => (<li><NoteCard {...note} /></li>))}
      </ul>
    </main>
  );
}

export default App;

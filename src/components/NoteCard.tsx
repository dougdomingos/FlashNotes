interface NoteCardProps {
  noteId: number;
  title: string;
  content: string;
}

function NoteCard({ noteId, title, content }: NoteCardProps) {
  return (
    <div
      id={noteId.toString()}
      className="relative group bg-zinc-800 rounded-xl px-4 py-2.5 transition-[box-shadow] hover:ring-2 hover:ring-blue-500"
    >
      <h2 className="font-semibold mb-1">{title}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
}

export { NoteCard, NoteCardProps };

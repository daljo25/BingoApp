import { numberWords } from "@/lib/numbers"

interface NumberTextProps {
  number: number | undefined
}

export default function NumberText({ number }: NumberTextProps) {
  if (number === undefined) return null;

  const word = numberWords[number];

  return (
    <div className="text-xl font-semibold mt-2 capitalize">
      {word}
    </div>
  );
}


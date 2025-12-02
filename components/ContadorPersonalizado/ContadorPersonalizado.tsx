"use client";

import { useEffect, useState } from "react";

type ContadorPersonalizadoProps = {
  title: string;
};

export default function ContadorPersonalizado({ title }: ContadorPersonalizadoProps) {
  const [likes, setLikes] = useState(0);

  const storageKey = `likes_${title}`;

  useEffect(() => {
    const valor = localStorage.getItem(storageKey);
    if (valor !== null) {
      setLikes(Number(valor));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(likes));
  }, [likes, storageKey]);

  const handleClick = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 border rounded text-sm"
    >
      👍 {likes} like{likes !== 1 ? "s" : ""}
    </button>
  );
}
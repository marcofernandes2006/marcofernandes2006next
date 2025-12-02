"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatar = (d: Date) =>
    d.toLocaleTimeString("pt-PT", { hour12: false });

  return <span>{formatar(hora)}</span>;
}
import {
  ArrowUturnLeftIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

let intervalId: number;

export const Pomodoro = () => {
  const [minutos, setMinutos] = useState(25);
  const [segundos, setSegundos] = useState(0);
  const [tempo, setTempo] = useState("25:00");
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    setTempo(
      `${minutos.toString().padStart(2, "0")}:${segundos
        .toString()
        .padStart(2, "0")}`
    );
    console.log('atualizando')
  }, [minutos, segundos]);

  const iniciarTempo = () => {
    if (!rodando) {
      setRodando(true);
      intervalId = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos === 0) {
            if (minutos === 0) {
              clearInterval(intervalId);
              setRodando(false);
              return 0;
            } else {
              setMinutos((prevMinutos) => prevMinutos - 1);
              return 59
            }
          } else {
            console.log(prevSegundos)
            return prevSegundos - 1;
          }
        });
      }, 1000);
    }
  };

  const pausarTempo = () => {
    setRodando(false);
    clearInterval(intervalId);
  };

  const reiniciarTempo = () => {
    setRodando(false);
    clearInterval(intervalId);
    setMinutos(25);
    setSegundos(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex-col flex items-center p-6 gap-5">
      <div className="flex">
        <span className="bg-zinc-950 bg-opacity-50 p-4 rounded-xl text-white font-semibold text-4xl">
          {tempo}
        </span>
      </div>
      <div className="flex gap-10">
        <button onClick={iniciarTempo}>
          <PlayIcon className="w-8 text-white" />
        </button>
        <button onClick={pausarTempo}>
          <PauseIcon className="w-8 text-white" />
        </button>
        <button onClick={reiniciarTempo}>
          <ArrowUturnLeftIcon className="w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

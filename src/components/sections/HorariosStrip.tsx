export interface Horario {
  dia: string;
  hora: string;
  culto: string;
}

const FALLBACK: Horario[] = [
  { dia: "Domingo", hora: "11:00", culto: "Culto General" },
  { dia: "Miércoles", hora: "19:30", culto: "Reunión de Oración" },
  { dia: "Viernes", hora: "20:00", culto: "Jóvenes" },
  { dia: "Sábado", hora: "10:00", culto: "Escuela Dominical" },
];

interface Props {
  horarios?: Horario[];
}

export function HorariosStrip({ horarios }: Props) {
  const items = horarios && horarios.length > 0 ? horarios : FALLBACK;

  return (
    <div
      className="flex items-center justify-center flex-wrap gap-y-5 px-6 py-5"
      style={{ background: "oklch(0.47 0.22 25)", color: "white" }}
    >
      {items.map((item, index) => (
        <div key={item.dia} className="flex items-center">
          <div className="flex flex-col items-center text-center px-8 sm:px-10">
            <span
              className="text-[10px] font-bold tracking-[0.12em] uppercase mb-1"
              style={{ opacity: 0.75 }}
            >
              {item.dia}
            </span>
            <span
              className="font-bold leading-none mb-1"
              style={{ fontFamily: "var(--font-heading)", fontSize: 22 }}
            >
              {item.hora}
            </span>
            <span className="text-[13px]" style={{ opacity: 0.85 }}>
              {item.culto}
            </span>
          </div>

          {index < items.length - 1 && (
            <div
              className="hidden sm:block w-px h-10 shrink-0"
              style={{ background: "rgba(255,255,255,0.3)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

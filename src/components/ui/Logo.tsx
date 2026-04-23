import { cn } from "@/lib/utils";

type LogoVariant = "full" | "icon" | "horizontal";
type LogoTheme = "dark" | "light" | "gold";

interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  size?: number;
}

/**
 * Logo vectorizado IUMP Lo Hermida
 * variant: "full" = ícono + nombre completo apilado
 *          "icon" = solo el símbolo
 *          "horizontal" = ícono + nombre en línea
 * theme:   "dark"  = sobre fondos claros (navy/dorado)
 *          "light" = sobre fondos oscuros (blanco/dorado)
 *          "gold"  = monocromático dorado
 */
export function Logo({
  variant = "full",
  theme = "dark",
  className,
  size = 48,
}: LogoProps) {
  const colors = {
    dark: {
      primary: "#1B2E5E",   // navy
      accent: "#C9A84C",    // dorado
      text: "#1B2E5E",
      textSub: "#6B7280",
    },
    light: {
      primary: "#FFFFFF",
      accent: "#C9A84C",
      text: "#FFFFFF",
      textSub: "rgba(255,255,255,0.65)",
    },
    gold: {
      primary: "#C9A84C",
      accent: "#C9A84C",
      text: "#C9A84C",
      textSub: "#C9A84C",
    },
  }[theme];

  const Icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Círculo base */}
      <circle cx="50" cy="50" r="48" fill={colors.primary} />

      {/* Cruz — brazo vertical */}
      <rect x="44" y="22" width="12" height="56" rx="3" fill="white" />
      {/* Cruz — brazo horizontal */}
      <rect x="26" y="38" width="48" height="12" rx="3" fill="white" />

      {/* Llama izquierda (pequeña) */}
      <path
        d="M43 22 C43 22 36 14 40 8 C40 8 38 16 43 18 C41 13 45 9 46 6 C46 6 44 14 43 22Z"
        fill={colors.accent}
        opacity="0.9"
      />
      {/* Llama central (grande) */}
      <path
        d="M50 21 C50 21 41 10 46 3 C46 3 44 13 50 16 C47 10 52 5 54 1 C54 1 51 11 50 21Z"
        fill={colors.accent}
      />
      {/* Llama derecha (pequeña) */}
      <path
        d="M57 22 C57 22 64 14 60 8 C60 8 62 16 57 18 C59 13 55 9 54 6 C54 6 56 14 57 22Z"
        fill={colors.accent}
        opacity="0.9"
      />

      {/* Punto brillante en llama central */}
      <circle cx="50" cy="10" r="2" fill="white" opacity="0.6" />

      {/* Borde dorado sutil */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke={colors.accent}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        fill="none"
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={cn("inline-flex shrink-0", className)}>
        {Icon}
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("inline-flex items-center gap-3", className)}>
        {Icon}
        <div className="flex flex-col leading-tight">
          <span
            className="font-bold tracking-wide"
            style={{ color: colors.text, fontSize: size * 0.28 }}
          >
            IMP Lo Hermida
          </span>
          <span
            className="font-medium tracking-widest uppercase"
            style={{ color: colors.accent, fontSize: size * 0.175 }}
          >
            IUMP · Chile
          </span>
        </div>
      </div>
    );
  }

  // variant === "full"
  return (
    <div className={cn("inline-flex flex-col items-center gap-2 text-center", className)}>
      {Icon}
      <div className="flex flex-col leading-tight">
        <span
          className="font-bold tracking-wide"
          style={{ color: colors.text, fontSize: size * 0.28 }}
        >
          IMP Lo Hermida
        </span>
        <span
          className="font-medium tracking-widest uppercase"
          style={{ color: colors.accent, fontSize: size * 0.175 }}
        >
          IUMP · Chile
        </span>
      </div>
    </div>
  );
}

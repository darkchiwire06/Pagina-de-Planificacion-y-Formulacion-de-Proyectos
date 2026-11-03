import * as m from 'motion/react-m';
import { useReducedMotion } from 'motion/react';
import { EscenaPortada } from './Ilustraciones';

const CURVA_SALIDA: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Portada editorial equilibrada que conecta directamente con la barra de navegación y el contenido
export function Portada() {
  const reducirMovimiento = useReducedMotion();

  const animacionEntrada = (retrasoSegundos: number) => ({
    initial: reducirMovimiento
      ? { opacity: 0 }
      : { opacity: 0, transform: 'translate(0px, 16px)' },
    animate: reducirMovimiento
      ? { opacity: 1 }
      : {
          opacity: 1,
          transform: 'translate(0px, 0px)',
          transitionEnd: { transform: 'none' },
        },
    transition: {
      duration: reducirMovimiento ? 0.2 : 0.52,
      delay: retrasoSegundos,
      ease: CURVA_SALIDA,
    },
  });

  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 relleno-seguro-superior pb-24 sm:px-8 sm:pb-20">
      {/* Iluminación radial orgánica de fondo sin costo de desenfoque en GPU */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 18%, rgba(52, 211, 153, 0.16) 0%, rgba(12, 28, 21, 0.05) 48%, transparent 75%), radial-gradient(circle at 85% 82%, rgba(251, 191, 36, 0.09) 0%, transparent 52%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-[clamp(1rem,2.5svh,1.6rem)] py-3">
        {/* Materia y titular editorial en la parte superior */}
        <div className="space-y-2.5 sm:space-y-3">
          <m.p
            {...animacionEntrada(0.03)}
            className="text-xs sm:text-[0.8rem] font-semibold uppercase tracking-[0.09em] text-esmeralda"
          >
            Formulación y evaluación de proyectos
          </m.p>

          <m.h1
            {...animacionEntrada(0.08)}
            className="font-display text-[clamp(2rem,8vw,2.9rem)] leading-[1.08] tracking-tight text-bruma font-semibold text-balance"
          >
            Campaña de concientización sobre la gestión de residuos
          </m.h1>
        </div>

        {/* Ilustración central panorámica con proporción adaptable al alto de pantalla móvil */}
        <m.div {...animacionEntrada(0.13)}>
          <EscenaPortada />
        </m.div>
      </div>

      {/* Autores en la esquina inferior derecha */}
      <m.div
        {...animacionEntrada(0.18)}
        className="z-10 absolute right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:right-8 sm:bottom-7 text-right leading-snug"
      >
        <p className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-[0.08em] text-esmeralda/90">
          Realizado por:
        </p>
        <div className="mt-1 space-y-0.5 text-xs sm:text-sm font-medium text-bruma/95">
          <p>Alvarado, Juan</p>
          <p>Goncalves, Valentina</p>
        </div>
      </m.div>
    </header>
  );
}

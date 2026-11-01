import * as m from 'motion/react-m';
import { useReducedMotion } from 'motion/react';
import { EscenaPortada } from './Ilustraciones';

const CURVA_SALIDA: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Portada limpia y equilibrada que conecta directamente con la barra de navegación y el contenido
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
    <header className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 relleno-seguro-superior pb-7 sm:px-8 sm:pb-10">
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
        {/* Titular editorial y subtítulo */}
        <m.h1
          {...animacionEntrada(0.03)}
          className="font-display text-[clamp(2.2rem,9.2vw,3rem)] leading-[1.08] tracking-tight text-bruma sm:text-5xl font-semibold max-w-[19ch]"
        >
          De lo que descartamos a lo que permanece
        </m.h1>

        <m.p
          {...animacionEntrada(0.1)}
          className="text-[1.02rem] sm:text-lg leading-[1.6] text-liquen max-w-[56ch]"
        >
          Descubre cómo distinguir un residuo aprovechable de un desecho, qué diferencia la
          reutilización del reciclaje y cómo funciona el ciclo real de la basura.
        </m.p>

        {/* Ilustración central panorámica con proporción adaptable al alto de pantalla móvil */}
        <m.div {...animacionEntrada(0.17)}>
          <EscenaPortada />
        </m.div>
      </div>
    </header>
  );
}

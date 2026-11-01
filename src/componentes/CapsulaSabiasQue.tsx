import * as m from 'motion/react-m';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import type { NotaSabiasQue } from '../datos/contenidoResiduos';
import { TextoEnriquecido } from './TextoEnriquecido';

interface PropiedadesCapsulaSabiasQue {
  nota: NotaSabiasQue;
  claveConcepto: string;
  direccion?: 1 | -1;
}

const CURVA_SALIDA: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Cápsula "¿Sabías que…?" vinculada dinámicamente al concepto activo con altura adaptable
export function CapsulaSabiasQue({
  nota,
  claveConcepto,
  direccion = 1,
}: PropiedadesCapsulaSabiasQue) {
  const reducirMovimiento = useReducedMotion();

  return (
    <aside
      aria-label={nota.titulo}
      className="mt-4 rounded-3xl border border-ambar/32 bg-[#17140a] p-4 sm:p-5 overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle at 92% 12%, rgba(251, 191, 36, 0.14) 0%, rgba(23, 20, 10, 0) 58%)',
      }}
    >
      {/* Cabecera limpia de la nota correspondiente al concepto actual */}
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-ambar/35 bg-ambar/15 text-ambar">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
        </span>
        <h4 className="font-display text-lg sm:text-xl font-semibold text-ambar leading-none">
          {nota.titulo}
        </h4>
      </div>

      {/* Transición suave sincronizada al cambiar entre Relleno sanitario y Vertedero a cielo abierto */}
      <div className="mt-3.5">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={claveConcepto}
            initial={
              reducirMovimiento
                ? { opacity: 0 }
                : { opacity: 0, transform: `translate(${direccion * 14}px, 0px)` }
            }
            animate={
              reducirMovimiento
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    transform: 'translate(0px, 0px)',
                    transitionEnd: { transform: 'none' },
                  }
            }
            exit={
              reducirMovimiento
                ? { opacity: 0 }
                : { opacity: 0, transform: `translate(${direccion * -14}px, 0px)` }
            }
            transition={{ duration: 0.22, ease: CURVA_SALIDA }}
            className="space-y-3 border-l-2 border-ambar/50 pl-3.5 text-[0.95rem] sm:text-base leading-relaxed text-bruma/92"
          >
            {nota.parrafos.map((parrafo, indice) => (
              <p key={indice}>
                <TextoEnriquecido
                  segmentos={parrafo}
                  claseResaltado="font-semibold text-ambar"
                />
              </p>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}

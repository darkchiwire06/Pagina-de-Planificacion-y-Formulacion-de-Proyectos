import { useRef, useState } from 'react';
import * as m from 'motion/react-m';
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { DATOS_CICLO_BASURA, type EtapaCiclo } from '../datos/contenidoResiduos';
import { IconoEtapa } from './IlustracionesConceptos';
import { ReveladoScroll } from './ReveladoScroll';
import { TextoEnriquecido } from './TextoEnriquecido';

// Calcula qué etapa (1 a 5) está activa según el avance continuo del scroll
function calcularEtapaPorProgreso(progreso: number): number {
  if (progreso < 0.18) return 1;
  if (progreso < 0.38) return 2;
  if (progreso < 0.58) return 3;
  if (progreso < 0.78) return 4;
  return 5;
}

interface PropiedadesFilaEtapa {
  etapa: EtapaCiclo;
  indice: number;
  totalEtapas: number;
  etapaActiva: number;
  progresoSeccion: MotionValue<number>;
}

// Renderiza una etapa con su conector estrictamente separado entre cajas (sin solaparse nunca con los números)
function FilaEtapaCiclo({
  etapa,
  indice,
  totalEtapas,
  etapaActiva,
  progresoSeccion,
}: PropiedadesFilaEtapa) {
  const referenciaFila = useRef<HTMLLIElement | null>(null);
  const reducirMovimiento = useReducedMotion();

  const esActiva = etapaActiva === etapa.numero;
  const fueRecorrida = etapa.numero < etapaActiva;
  const esUltima = indice === totalEtapas - 1;

  // Aparición y desaparición progresiva natural vinculada al movimiento del scroll
  const { scrollYProgress: progresoEntrada } = useScroll({
    target: referenciaFila,
    offset: ['start 96%', 'start 76%'],
  });

  const entradaSuave = useSpring(progresoEntrada, {
    stiffness: 120,
    damping: 25,
    mass: 0.48,
    restDelta: 0.0005,
  });

  const opacidadFila = useTransform(entradaSuave, [0, 0.35, 1], [0, 0.45, 1]);
  const transformacionFila = useTransform(entradaSuave, (progreso) => {
    if (progreso >= 0.994) return 'none';
    const dy = Math.round(20 * (1 - progreso) * 2) / 2;
    return `translate(0px, ${dy}px)`;
  });

  // Progreso individual del tramo de línea que une esta etapa con la siguiente
  const inicioTramo = indice * 0.21;
  const finTramo = inicioTramo + 0.21;
  const rellenoTramo = useTransform(progresoSeccion, [inicioTramo, finTramo], [0, 1]);

  return (
    <m.li
      ref={referenciaFila}
      style={
        reducirMovimiento
          ? undefined
          : {
              opacity: opacidadFila,
              transform: transformacionFila,
            }
      }
      className="grid grid-cols-[48px_1fr] gap-x-3.5 sm:gap-x-4"
    >
      {/* Columna izquierda: número con fondo 100% sólido + conector aislado únicamente en el espacio entre cajas */}
      <div className="flex flex-col items-center">
        <div
          aria-hidden="true"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold transition-[background-color,border-color,color] duration-300 ${
            esActiva
              ? 'border-esmeralda bg-esmeralda text-dosel'
              : fueRecorrida
                ? 'border-esmeralda/55 bg-[#10261d] text-esmeralda'
                : 'border-bruma/15 bg-musgo text-helecho'
          }`}
        >
          {etapa.numero}
        </div>

        {/* Tramo conector que nace 6px debajo del número actual y termina 6px antes del siguiente */}
        {!esUltima && (
          <div
            aria-hidden="true"
            className="my-1.5 w-[2px] flex-1 min-h-[20px] rounded-full bg-bruma/12 overflow-hidden"
          >
            <m.div
              className="h-full w-full bg-esmeralda origin-top rounded-full"
              style={reducirMovimiento ? undefined : { scaleY: rellenoTramo }}
            />
          </div>
        )}
      </div>

      {/* Columna derecha: tarjeta descriptiva que se ilumina suavemente al quedar seleccionada */}
      <div className={esUltima ? 'pb-0' : 'pb-4'}>
        <article
          className={`rounded-2xl border p-4 sm:p-5 text-left transition-[transform,background-color,border-color,opacity] duration-300 ${
            esActiva
              ? 'border-esmeralda/50 bg-hoja-alta opacity-100 translate-x-1'
              : fueRecorrida
                ? 'border-esmeralda/22 bg-hoja opacity-95'
                : 'border-bruma/10 bg-musgo/85 opacity-75'
          }`}
          style={
            esActiva
              ? {
                  backgroundImage:
                    'radial-gradient(circle at 92% 18%, rgba(52, 211, 153, 0.15) 0%, rgba(25, 53, 41, 0) 60%)',
                }
              : undefined
          }
        >
          <div className="flex items-center justify-between gap-3">
            <span
              className={`text-xs font-semibold transition-colors duration-250 ${
                esActiva || fueRecorrida ? 'text-esmeralda' : 'text-helecho'
              }`}
            >
              Etapa {etapa.numero} · {etapa.tituloCorto}
            </span>
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-250 ${
                esActiva
                  ? 'border-esmeralda/40 bg-esmeralda/16 text-esmeralda'
                  : fueRecorrida
                    ? 'border-esmeralda/20 bg-dosel/60 text-esmeralda/85'
                    : 'border-bruma/8 bg-dosel/50 text-helecho'
              }`}
            >
              <IconoEtapa nombre={etapa.icono} />
            </span>
          </div>

          <p className="mt-2.5 text-[0.98rem] sm:text-base leading-relaxed text-bruma/92">
            <TextoEnriquecido
              segmentos={etapa.descripcion}
              claseResaltado="font-semibold text-esmeralda"
            />
          </p>
        </article>
      </div>
    </m.li>
  );
}

// Sección completa del Ciclo de la basura sincronizada de forma continua con el scroll
export function LineaTiempoCiclo() {
  const referenciaLista = useRef<HTMLOListElement | null>(null);
  const [etapaActiva, setEtapaActiva] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: referenciaLista,
    offset: ['start 68%', 'end 74%'],
  });

  const progresoSeccionSuave = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.45,
  });

  useMotionValueEvent(scrollYProgress, 'change', (valorActual) => {
    const siguienteEtapa = calcularEtapaPorProgreso(valorActual);
    setEtapaActiva((anterior) => (anterior === siguienteEtapa ? anterior : siguienteEtapa));
  });

  return (
    <section id={DATOS_CICLO_BASURA.id} className="scroll-mt-20 py-7 sm:py-10">
      <ReveladoScroll direccion="subir" clase="mb-7">
        <h2 className="font-display text-[1.75rem] sm:text-3xl font-semibold text-bruma leading-tight">
          {DATOS_CICLO_BASURA.encabezado}
        </h2>
        <p className="mt-2.5 text-base leading-relaxed text-liquen max-w-[58ch]">
          {DATOS_CICLO_BASURA.introduccion}
        </p>
      </ReveladoScroll>

      <ol ref={referenciaLista} className="pl-1 sm:pl-2">
        {DATOS_CICLO_BASURA.etapas.map((etapa, indice) => (
          <FilaEtapaCiclo
            key={etapa.numero}
            etapa={etapa}
            indice={indice}
            totalEtapas={DATOS_CICLO_BASURA.etapas.length}
            etapaActiva={etapaActiva}
            progresoSeccion={progresoSeccionSuave}
          />
        ))}
      </ol>
    </section>
  );
}

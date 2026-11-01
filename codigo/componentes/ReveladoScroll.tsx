import { useRef, type ReactNode } from 'react';
import * as m from 'motion/react-m';
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

type DireccionRevelado = 'subir' | 'escalar' | 'izquierda' | 'derecha';

interface PropiedadesReveladoScroll {
  children: ReactNode;
  retraso?: number;
  direccion?: DireccionRevelado;
  clase?: string;
}

// Animación continua vinculada al scroll sin escalado de texturas ni subpíxeles residuales para mantener nitidez total en textos
export function ReveladoScroll({
  children,
  direccion = 'subir',
  clase = '',
}: PropiedadesReveladoScroll) {
  const referencia = useRef<HTMLDivElement | null>(null);
  const reducirMovimiento = useReducedMotion();

  // Rango en el cuarto inferior de la pantalla para que incluso el cierre final llegue al 100% de visibilidad
  const { scrollYProgress } = useScroll({
    target: referencia,
    offset: ['start 96%', 'start 75%'],
  });

  // Resorte suave con umbral fino para asentarse exactamente en 1 sin deriva decimal
  const progresoSuave = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.48,
    restDelta: 0.0005,
  });

  const inicioX = direccion === 'izquierda' ? -18 : direccion === 'derecha' ? 18 : 0;
  const inicioY = direccion === 'escalar' ? 16 : 22;

  const opacidad = useTransform(progresoSuave, [0, 0.3, 1], [0, 0.42, 1]);

  // Libera por completo el transform ('none') al asentarse para que el navegador renderice fuentes vectoriales nativas sin borrosidad
  const transformacion = useTransform(progresoSuave, (progreso) => {
    if (progreso >= 0.994) return 'none';
    const restante = 1 - progreso;
    const dx = Math.round(inicioX * restante * 2) / 2;
    const dy = Math.round(inicioY * restante * 2) / 2;
    return `translate(${dx}px, ${dy}px)`;
  });

  if (reducirMovimiento) {
    return (
      <div ref={referencia} className={clase}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      ref={referencia}
      style={{
        opacity: opacidad,
        transform: transformacion,
      }}
      className={clase}
    >
      {children}
    </m.div>
  );
}

// Conector botánico vertical que se extiende progresivamente al bajar y se recoge con suavidad al subir
export function ConectorSeccion() {
  const referencia = useRef<HTMLDivElement | null>(null);
  const reducirMovimiento = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: referencia,
    offset: ['start 94%', 'start 76%'],
  });

  const progresoSuave = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  const opacidadNodo = useTransform(progresoSuave, [0.4, 1], [0, 1]);

  return (
    <div ref={referencia} aria-hidden="true" className="flex flex-col items-center py-2">
      <m.div
        style={
          reducirMovimiento
            ? undefined
            : {
                scaleY: progresoSuave,
                opacity: progresoSuave,
              }
        }
        className="h-10 w-[2px] origin-top rounded-full bg-gradient-to-b from-esmeralda/10 via-esmeralda/50 to-esmeralda/15"
      />
      <m.span
        style={reducirMovimiento ? undefined : { opacity: opacidadNodo, scale: opacidadNodo }}
        className="mt-1 h-2 w-2 rounded-full bg-esmeralda/65"
      />
    </div>
  );
}

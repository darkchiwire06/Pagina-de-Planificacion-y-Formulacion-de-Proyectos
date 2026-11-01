import { ArrowUp } from 'lucide-react';
import { DATOS_CICLO_BASURA } from '../datos/contenidoResiduos';
import { ReveladoScroll } from './ReveladoScroll';
import { TextoEnriquecido } from './TextoEnriquecido';

// Bloque final de reflexión integral animado suavemente al llegar al final de la lectura
export function Cierre() {
  const volverAlInicio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-4 relleno-seguro-inferior">
      <ReveladoScroll direccion="escalar">
        <div
          className="relative overflow-hidden rounded-3xl border border-esmeralda/32 bg-hoja p-6 sm:p-8"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 15%, rgba(52, 211, 153, 0.16) 0%, rgba(19, 41, 31, 0) 60%), radial-gradient(circle at 88% 88%, rgba(251, 191, 36, 0.1) 0%, transparent 55%)',
          }}
        >
          <div className="space-y-4">
            <p className="font-display text-xl sm:text-2xl font-medium leading-snug text-bruma">
              <TextoEnriquecido
                segmentos={DATOS_CICLO_BASURA.parrafosCierre[0]}
                claseResaltado="font-semibold text-esmeralda"
              />
            </p>

            <p className="text-[0.98rem] sm:text-base leading-relaxed text-liquen">
              <TextoEnriquecido segmentos={DATOS_CICLO_BASURA.parrafosCierre[1]} />
            </p>
          </div>

          <div className="mt-7 pt-5 border-t border-bruma/12 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-helecho">
              Ciudad Guayana · Educación ambiental para una gestión responsable
            </p>

            <button
              type="button"
              onClick={volverAlInicio}
              className="presionable inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-bruma/16 bg-dosel/80 px-4 py-2 text-xs font-semibold text-bruma"
            >
              <ArrowUp className="w-3.5 h-3.5 text-esmeralda" aria-hidden="true" />
              Volver al inicio
            </button>
          </div>
        </div>
      </ReveladoScroll>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import * as m from 'motion/react-m';
import { useScroll } from 'motion/react';
import { SECCIONES_NAVEGACION } from '../datos/contenidoResiduos';

// Barra superior fija con indicador de lectura en GPU y navegación horizontal táctil
export function BarraProgresoNavegacion() {
  const { scrollYProgress } = useScroll();
  const [idActivo, setIdActivo] = useState<string>(SECCIONES_NAVEGACION[0].id);

  useEffect(() => {
    const elementos = SECCIONES_NAVEGACION.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elementos.length === 0) return;

    // Detecta la sección visible sin escuchar el evento scroll en cada fotograma
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setIdActivo(entrada.target.id);
          }
        }
      },
      {
        rootMargin: '-22% 0px -60% 0px',
        threshold: 0.05,
      }
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 border-b border-bruma/10 bg-dosel/95 relleno-seguro-superior">
      {/* Barra de progreso acelerada por hardware mediante scaleX sin re-renderizar React */}
      <m.div
        aria-hidden="true"
        className="h-[2.5px] w-full bg-esmeralda origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        aria-label="Secciones de lectura"
        className="sin-barra-scroll mx-auto flex max-w-3xl items-center gap-2 overflow-x-auto px-4 py-2 sm:px-8"
        style={{ touchAction: 'pan-x pan-y' }}
      >
        {SECCIONES_NAVEGACION.map((item) => {
          const estaActiva = idActivo === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={estaActiva ? 'true' : undefined}
              className={`presionable shrink-0 inline-flex min-h-[40px] items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
                estaActiva
                  ? 'bg-esmeralda/18 text-esmeralda border border-esmeralda/40'
                  : 'bg-musgo/70 text-liquen border border-transparent'
              }`}
            >
              {item.etiqueta}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

import { Fragment } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { SECCIONES_COMPARATIVAS } from './datos/contenidoResiduos';
import { PortadaBotanica } from './componentes/PortadaBotanica';
import { BarraProgresoNavegacion } from './componentes/BarraProgresoNavegacion';
import { TarjetaComparativa } from './componentes/TarjetaComparativa';
import { LineaTiempoCiclo } from './componentes/LineaTiempoCiclo';
import { CierreManifiesto } from './componentes/CierreManifiesto';
import { ConectorSeccion } from './componentes/ReveladoScroll';

// Componente raíz que integra todas las secciones en un flujo vertical continuo y ligero
export function Aplicacion() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-[100svh] bg-dosel text-bruma selection:bg-esmeralda/25 selection:text-bruma">
        <PortadaBotanica />
        <BarraProgresoNavegacion />

        <main className="mx-auto max-w-3xl px-5 sm:px-8 pt-2">
          {SECCIONES_COMPARATIVAS.map((seccion) => (
            <Fragment key={seccion.id}>
              <TarjetaComparativa seccion={seccion} />
              <ConectorSeccion />
            </Fragment>
          ))}

          <LineaTiempoCiclo />
          <ConectorSeccion />
          <CierreManifiesto />
        </main>
      </div>
    </LazyMotion>
  );
}

export default Aplicacion;

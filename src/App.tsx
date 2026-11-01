import { Fragment } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { SECCIONES_COMPARATIVAS } from './datos/contenidoResiduos';
import { Portada } from './componentes/Portada';
import { BarraNavegacion } from './componentes/BarraNavegacion';
import { TarjetaComparativa } from './componentes/TarjetaComparativa';
import { CicloBasura } from './componentes/CicloBasura';
import { Cierre } from './componentes/Cierre';
import { ConectorSeccion } from './componentes/ReveladoScroll';

// Componente raíz que integra todas las secciones en un flujo vertical continuo y ligero
export function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-[100svh] bg-dosel text-bruma selection:bg-esmeralda/25 selection:text-bruma">
        <Portada />
        <BarraNavegacion />

        <main className="mx-auto max-w-3xl px-5 sm:px-8 pt-2">
          {SECCIONES_COMPARATIVAS.map((seccion) => (
            <Fragment key={seccion.id}>
              <TarjetaComparativa seccion={seccion} />
              <ConectorSeccion />
            </Fragment>
          ))}

          <CicloBasura />
          <ConectorSeccion />
          <Cierre />
        </main>
      </div>
    </LazyMotion>
  );
}

export default App;


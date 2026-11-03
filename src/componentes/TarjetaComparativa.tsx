import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { CheckCircle2, Info, RotateCw } from 'lucide-react';
import type {
  LadoComparativo,
  SeccionComparativa,
  VarianteTono,
} from '../datos/contenidoResiduos';
import { IlustracionConcepto } from './Ilustraciones';
import { CapsulaSabiasQue } from './CapsulaSabiasQue';
import { ReveladoScroll } from './ReveladoScroll';
import { TextoEnriquecido } from './TextoEnriquecido';

// Devuelve las clases visuales correspondientes a cada tono semántico
function obtenerEstilosTono(tono: VarianteTono) {
  switch (tono) {
    case 'esmeralda':
      return {
        bordeTarjeta: 'border-esmeralda/30',
        resplandorTarjeta:
          'radial-gradient(circle at 90% 8%, rgba(52, 211, 153, 0.16) 0%, rgba(19, 41, 31, 0) 60%)',
        resaltado: 'font-semibold text-esmeralda',
        cajaEjemplo: 'border-esmeralda/22 bg-dosel/70',
        pastillaActiva: 'bg-esmeralda text-dosel',
        botonGiro: 'border-esmeralda/35 bg-esmeralda/14 text-esmeralda',
      };
    case 'terracota':
      return {
        bordeTarjeta: 'border-terracota/32',
        resplandorTarjeta:
          'radial-gradient(circle at 90% 8%, rgba(240, 100, 73, 0.16) 0%, rgba(19, 41, 31, 0) 60%)',
        resaltado: 'font-semibold text-[#ff8b73]',
        cajaEjemplo: 'border-terracota/24 bg-dosel/70',
        pastillaActiva: 'bg-terracota text-dosel',
        botonGiro: 'border-terracota/35 bg-terracota/14 text-[#ff9580]',
      };
    case 'turquesa':
      return {
        bordeTarjeta: 'border-[#2dd4bf]/30',
        resplandorTarjeta:
          'radial-gradient(circle at 90% 8%, rgba(45, 212, 191, 0.16) 0%, rgba(19, 41, 31, 0) 60%)',
        resaltado: 'font-semibold text-[#5eead4]',
        cajaEjemplo: 'border-[#2dd4bf]/22 bg-dosel/70',
        pastillaActiva: 'bg-[#2dd4bf] text-dosel',
        botonGiro: 'border-[#2dd4bf]/35 bg-[#2dd4bf]/14 text-[#5eead4]',
      };
  }
}

interface PropiedadesCaraConcepto {
  lado: LadoComparativo;
  tituloContraparte?: string;
  alVoltear?: () => void;
}

// Renderiza una cara ajustada exactamente a su contenido sin generar espacios muertos
function CaraConcepto({ lado, tituloContraparte, alVoltear }: PropiedadesCaraConcepto) {
  const estilos = obtenerEstilosTono(lado.tono);

  const manejarClicTarjeta = () => {
    if (!alVoltear) return;
    // Respeta si el usuario está seleccionando texto para copiar
    if (window.getSelection()?.toString()) return;
    alVoltear();
  };

  return (
    <article
      onClick={manejarClicTarjeta}
      className={`relative flex flex-col rounded-3xl border ${estilos.bordeTarjeta} bg-hoja p-5 sm:p-6 overflow-hidden ${alVoltear ? 'cursor-pointer' : ''}`}
      style={{ backgroundImage: estilos.resplandorTarjeta }}
    >
      {/* Escena vectorial panorámica adaptada a proporción natural sin bordes vacíos */}
      <IlustracionConcepto nombre={lado.ilustracion} clase="w-full h-auto" />

      <h3 className="mt-4 font-display text-2xl sm:text-[1.65rem] font-semibold text-bruma leading-tight">
        {lado.titulo}
      </h3>

      <div className="mt-3 space-y-3 text-[0.97rem] sm:text-base leading-[1.62] text-bruma/92">
        {lado.parrafos.map((parrafo, indice) => (
          <p key={indice}>
            <TextoEnriquecido segmentos={parrafo} claseResaltado={estilos.resaltado} />
          </p>
        ))}
      </div>

      {lado.ejemplo && (
        <div
          className={`mt-3.5 rounded-2xl border p-3.5 text-sm leading-relaxed text-liquen ${estilos.cajaEjemplo}`}
        >
          <TextoEnriquecido
            segmentos={lado.ejemplo}
            claseResaltado="font-semibold text-bruma"
          />
        </div>
      )}

      {/* Pie táctil en móvil pegado al flujo natural de la tarjeta sin huecos intermedios */}
      {tituloContraparte && alVoltear && (
        <div className="mt-4 pt-3.5 border-t border-bruma/10 flex justify-end md:hidden">
          <button
            type="button"
            onClick={(evento) => {
              evento.stopPropagation();
              alVoltear();
            }}
            className={`presionable inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold ${estilos.botonGiro}`}
          >
            <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
            Ver {tituloContraparte}
          </button>
        </div>
      )}
    </article>
  );
}

interface PropiedadesTarjetaComparativa {
  seccion: SeccionComparativa;
}

// Bloque comparativo con altura adaptable por cara en el giro 3D móvil y nitidez nativa en reposo
export function TarjetaComparativa({ seccion }: PropiedadesTarjetaComparativa) {
  const [indiceActivo, setIndiceActivo] = useState<0 | 1>(0);
  const [enMovimiento3D, setEnMovimiento3D] = useState(false);
  const [alturasCaras, setAlturasCaras] = useState<[number, number]>([0, 0]);
  const reducirMovimiento = useReducedMotion();

  const refCaraFrontal = useRef<HTMLDivElement | null>(null);
  const refCaraReverso = useRef<HTMLDivElement | null>(null);

  const cambiarCara = (nuevoIndice: 0 | 1) => {
    if (nuevoIndice === indiceActivo) return;
    if (!reducirMovimiento) {
      setEnMovimiento3D(true);
    }
    setIndiceActivo(nuevoIndice);
  };

  // Al concluir los 560ms del giro 3D, retira la perspectiva 3D para que el texto se dibuje con nitidez vectorial nativa
  useEffect(() => {
    if (!enMovimiento3D) return;
    const temporizador = window.setTimeout(() => {
      setEnMovimiento3D(false);
    }, 580);
    return () => window.clearTimeout(temporizador);
  }, [indiceActivo, enMovimiento3D]);

  // Mide la altura real de cada cara para ajustar el contenedor 3D sin dejar espacio vacío en la cara más corta
  useEffect(() => {
    const frontal = refCaraFrontal.current;
    const reverso = refCaraReverso.current;
    if (!frontal || !reverso) return;

    const actualizarAlturas = () => {
      const altoFrontal = frontal.offsetHeight;
      const altoReverso = reverso.offsetHeight;
      setAlturasCaras((previo) =>
        previo[0] === altoFrontal && previo[1] === altoReverso
          ? previo
          : [altoFrontal, altoReverso]
      );
    };

    actualizarAlturas();

    const observador = new ResizeObserver(actualizarAlturas);
    observador.observe(frontal);
    observador.observe(reverso);

    return () => observador.disconnect();
  }, []);

  // Control seguro de gesto horizontal para permitir voltear también deslizando el dedo
  const referenciaGesto = useRef<{
    idPuntero: number;
    inicioX: number;
    inicioY: number;
    tiempoInicio: number;
  } | null>(null);

  const manejarInicioToque = (evento: React.PointerEvent<HTMLDivElement>) => {
    if (referenciaGesto.current !== null) return;
    referenciaGesto.current = {
      idPuntero: evento.pointerId,
      inicioX: evento.clientX,
      inicioY: evento.clientY,
      tiempoInicio: Date.now(),
    };
  };

  const manejarFinToque = (evento: React.PointerEvent<HTMLDivElement>) => {
    const inicio = referenciaGesto.current;
    if (!inicio || inicio.idPuntero !== evento.pointerId) return;
    referenciaGesto.current = null;

    const desplazamientoX = evento.clientX - inicio.inicioX;
    const desplazamientoY = evento.clientY - inicio.inicioY;
    const tiempoTranscurrido = Math.max(1, Date.now() - inicio.tiempoInicio);
    const velocidad = Math.abs(desplazamientoX) / tiempoTranscurrido;

    if (
      Math.abs(desplazamientoX) > Math.abs(desplazamientoY) * 1.3 &&
      (Math.abs(desplazamientoX) >= 42 || velocidad > 0.28)
    ) {
      if (desplazamientoX < 0 && indiceActivo === 0) {
        cambiarCara(1);
      } else if (desplazamientoX > 0 && indiceActivo === 1) {
        cambiarCara(0);
      }
    }
  };

  const manejarCancelacionToque = () => {
    referenciaGesto.current = null;
  };

  const estaVolteada = indiceActivo === 1;
  const alturaActiva = estaVolteada ? alturasCaras[1] : alturasCaras[0];
  const ladoActivo = estaVolteada ? seccion.derecha : seccion.izquierda;
  const estilosTonoActivo = obtenerEstilosTono(ladoActivo.tono);

  return (
    <section id={seccion.id} className="scroll-mt-20 py-7 sm:py-10">
      {/* Encabezado animado al entrar en pantalla */}
      <ReveladoScroll direccion="subir" clase="mb-5">
        <h2 className="font-display text-[1.75rem] sm:text-3xl font-semibold text-bruma leading-tight">
          {seccion.encabezado}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-liquen leading-relaxed max-w-[56ch]">
          {seccion.subtitulo}
        </p>
      </ReveladoScroll>

      {/* EXPERIENCIA MÓVIL (< 768px): Selector superior + Tarjeta con giro real 3D y altura adaptable */}
      <ReveladoScroll direccion="escalar" retraso={0.06} clase="md:hidden">
        <div
          role="tablist"
          aria-label={seccion.encabezado}
          className="relative grid grid-cols-2 rounded-2xl border border-bruma/12 bg-musgo p-1.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!estaVolteada}
            onClick={() => cambiarCara(0)}
            className="presionable min-h-[46px] rounded-xl px-2.5 py-2 text-xs sm:text-sm font-semibold text-liquen text-center leading-tight"
          >
            {seccion.izquierda.titulo}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={estaVolteada}
            onClick={() => cambiarCara(1)}
            className="presionable min-h-[46px] rounded-xl px-2.5 py-2 text-xs sm:text-sm font-semibold text-liquen text-center leading-tight"
          >
            {seccion.derecha.titulo}
          </button>

          {/* Indicador sincronizado mediante clip-path */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-1.5 grid grid-cols-2 rounded-xl ${estilosTonoActivo.pastillaActiva}`}
            style={{
              clipPath: !estaVolteada
                ? 'inset(0 50% 0 0 round 12px)'
                : 'inset(0 0% 0 50% round 12px)',
              transition: reducirMovimiento
                ? 'none'
                : 'clip-path 260ms var(--curva-entrada-salida), background-color 240ms ease',
            }}
          >
            <span className="flex min-h-[46px] items-center justify-center px-2.5 py-2 text-xs sm:text-sm font-bold text-center leading-tight">
              {seccion.izquierda.titulo}
            </span>
            <span className="flex min-h-[46px] items-center justify-center px-2.5 py-2 text-xs sm:text-sm font-bold text-center leading-tight">
              {seccion.derecha.titulo}
            </span>
          </div>
        </div>

        {/* Escena 3D con liberación de textura en reposo para evitar texto o botones borrosos */}
        <div
          onPointerDown={manejarInicioToque}
          onPointerUp={manejarFinToque}
          onPointerCancel={manejarCancelacionToque}
          className={`escena-giro-nitido mt-4 ${enMovimiento3D ? 'en-movimiento-3d' : ''}`}
          style={{
            touchAction: 'pan-y',
            height: alturaActiva > 0 ? `${alturaActiva}px` : undefined,
            transition: reducirMovimiento
              ? 'none'
              : 'height 380ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            ref={refCaraFrontal}
            className="cara-giratoria"
            style={{
              pointerEvents: estaVolteada ? 'none' : 'auto',
              opacity: estaVolteada && !enMovimiento3D ? 0 : 1,
              backfaceVisibility: estaVolteada || enMovimiento3D ? 'hidden' : undefined,
              WebkitBackfaceVisibility: estaVolteada || enMovimiento3D ? 'hidden' : undefined,
              transform: estaVolteada
                ? 'rotateY(-180deg)'
                : enMovimiento3D
                  ? 'rotateY(0deg)'
                  : undefined,
            }}
            aria-hidden={estaVolteada}
          >
            <CaraConcepto
              lado={seccion.izquierda}
              tituloContraparte={seccion.derecha.titulo}
              alVoltear={() => cambiarCara(1)}
            />
          </div>

          <div
            ref={refCaraReverso}
            className="cara-giratoria"
            style={{
              pointerEvents: estaVolteada ? 'auto' : 'none',
              opacity: !estaVolteada && !enMovimiento3D ? 0 : 1,
              backfaceVisibility: !estaVolteada || enMovimiento3D ? 'hidden' : undefined,
              WebkitBackfaceVisibility: !estaVolteada || enMovimiento3D ? 'hidden' : undefined,
              transform: !estaVolteada
                ? 'rotateY(180deg)'
                : enMovimiento3D
                  ? 'rotateY(0deg)'
                  : undefined,
            }}
            aria-hidden={!estaVolteada}
          >
            <CaraConcepto
              lado={seccion.derecha}
              tituloContraparte={seccion.izquierda.titulo}
              alVoltear={() => cambiarCara(0)}
            />
          </div>
        </div>
      </ReveladoScroll>

      {/* "¿Sabías que…?" en móvil: cambia automáticamente según cuál concepto esté activo */}
      {ladoActivo.sabiasQue && (
        <ReveladoScroll direccion="subir" clase="md:hidden">
          <CapsulaSabiasQue
            nota={ladoActivo.sabiasQue}
            claveConcepto={ladoActivo.id}
            direccion={estaVolteada ? 1 : -1}
          />
        </ReveladoScroll>
      )}

      {/* EXPERIENCIA DE ESCRITORIO (>= 768px): Cada concepto muestra su propio "¿Sabías que…?" debajo */}
      <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-5">
        <div>
          <ReveladoScroll direccion="izquierda" retraso={0.05} clase="elevacion-cursor rounded-3xl">
            <CaraConcepto lado={seccion.izquierda} />
          </ReveladoScroll>
          {seccion.izquierda.sabiasQue && (
            <ReveladoScroll direccion="subir" retraso={0.08}>
              <CapsulaSabiasQue
                nota={seccion.izquierda.sabiasQue}
                claveConcepto={seccion.izquierda.id}
              />
            </ReveladoScroll>
          )}
        </div>

        <div>
          <ReveladoScroll direccion="derecha" retraso={0.12} clase="elevacion-cursor rounded-3xl">
            <CaraConcepto lado={seccion.derecha} />
          </ReveladoScroll>
          {seccion.derecha.sabiasQue && (
            <ReveladoScroll direccion="subir" retraso={0.14}>
              <CapsulaSabiasQue
                nota={seccion.derecha.sabiasQue}
                claveConcepto={seccion.derecha.id}
              />
            </ReveladoScroll>
          )}
        </div>
      </div>

      {/* Recuadro de comentario clave integrado con revelado al hacer scroll */}
      {seccion.comentario && (
        <ReveladoScroll direccion="subir" retraso={0.12}>
          <div className="mt-4 rounded-2xl border border-esmeralda/24 bg-musgo/90 p-4 sm:p-5 flex items-start gap-3.5">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-esmeralda/14 text-esmeralda">
              {seccion.id === 'reutilizacion-vs-reciclaje' ? (
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Info className="w-4 h-4" aria-hidden="true" />
              )}
            </span>
            <div className="space-y-2 text-[0.95rem] leading-relaxed text-bruma/92">
              {seccion.comentario.parrafos.map((parrafo, indice) => (
                <p key={indice}>
                  <TextoEnriquecido
                    segmentos={parrafo}
                    claseResaltado="font-semibold text-esmeralda"
                  />
                </p>
              ))}
            </div>
          </div>
        </ReveladoScroll>
      )}
    </section>
  );
}

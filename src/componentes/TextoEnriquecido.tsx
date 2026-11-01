import type { SegmentoTexto } from '../datos/contenidoResiduos';

interface PropiedadesTextoEnriquecido {
  segmentos: SegmentoTexto[];
  claseResaltado?: string;
}

// Renderiza fragmentos de texto respetando semánticamente negritas y cursivas
export function TextoEnriquecido({
  segmentos,
  claseResaltado = 'font-semibold text-bruma',
}: PropiedadesTextoEnriquecido) {
  return (
    <>
      {segmentos.map((segmento, indice) => {
        if (segmento.negrita && segmento.cursiva) {
          return (
            <strong key={indice} className={`italic ${claseResaltado}`}>
              {segmento.texto}
            </strong>
          );
        }
        if (segmento.negrita) {
          return (
            <strong key={indice} className={claseResaltado}>
              {segmento.texto}
            </strong>
          );
        }
        if (segmento.cursiva) {
          return (
            <em key={indice} className="italic text-bruma/95">
              {segmento.texto}
            </em>
          );
        }
        return <span key={indice}>{segmento.texto}</span>;
      })}
    </>
  );
}

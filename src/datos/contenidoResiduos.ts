// Definición de tipos y contenido estructurado a partir del documento raíz del proyecto

export type VarianteTono = 'esmeralda' | 'terracota' | 'turquesa';

export type NombreIlustracion =
  | 'botella'
  | 'basura'
  | 'frasco'
  | 'reciclaje'
  | 'capasControladas'
  | 'vertederoAbierto';

export type NombreIconoEtapa =
  | 'generacion'
  | 'separacion'
  | 'recoleccion'
  | 'tratamiento'
  | 'disposicion';

export interface SegmentoTexto {
  texto: string;
  negrita?: boolean;
  cursiva?: boolean;
}

export interface NotaSabiasQue {
  titulo: string;
  parrafos: SegmentoTexto[][];
}

export interface LadoComparativo {
  id: string;
  titulo: string;
  tono: VarianteTono;
  etiqueta: string;
  ilustracion: NombreIlustracion;
  parrafos: SegmentoTexto[][];
  ejemplo?: SegmentoTexto[];
  sabiasQue?: NotaSabiasQue;
}

export interface SeccionComparativa {
  id: string;
  etiquetaNavegacion: string;
  encabezado: string;
  subtitulo: string;
  izquierda: LadoComparativo;
  derecha: LadoComparativo;
  comentario?: {
    titulo: string;
    parrafos: SegmentoTexto[][];
  };
}

export interface EtapaCiclo {
  numero: number;
  tituloCorto: string;
  icono: NombreIconoEtapa;
  descripcion: SegmentoTexto[];
}

// Enlaces rápidos para la barra superior y los botones de portada
export const SECCIONES_NAVEGACION = [
  { id: 'residuo-vs-desecho', etiqueta: 'Residuo vs. Desecho' },
  { id: 'reutilizacion-vs-reciclaje', etiqueta: 'Reutilizar vs. Reciclar' },
  { id: 'relleno-vs-vertedero', etiqueta: 'Relleno vs. Vertedero' },
  { id: 'ciclo-basura', etiqueta: 'Ciclo de la basura' },
] as const;

// Bloques comparativos ("vs.") con el texto íntegro del documento
export const SECCIONES_COMPARATIVAS: SeccionComparativa[] = [
  {
    id: 'residuo-vs-desecho',
    etiquetaNavegacion: 'Residuo vs. Desecho',
    encabezado: 'Residuo vs. Desecho',
    subtitulo: 'No todo lo que descartamos pierde su valor: distinguirlos define su destino.',
    izquierda: {
      id: 'residuo',
      titulo: 'Residuo',
      tono: 'esmeralda',
      etiqueta: 'Conserva valor potencial',
      ilustracion: 'botella',
      parrafos: [
        [
          {
            texto:
              'Es todo aquel material que conserva valor potencial luego de ser usado; es decir, que puede ser ',
          },
          { texto: 'reciclado', negrita: true },
          { texto: '.' },
        ],
      ],
      ejemplo: [
        {
          texto:
            'Por ejemplo: Una botella de plástico limpia puede aprovecharse para fabricar nuevas botellas o para hacer manualidades.',
        },
      ],
    },
    derecha: {
      id: 'desecho',
      titulo: 'Desecho',
      tono: 'terracota',
      etiqueta: 'Sin revalorización',
      ilustracion: 'basura',
      parrafos: [
        [
          {
            texto:
              'Por otro lado, el desecho se considera inservible y sin potencial de revalorización luego de su uso. Debe ser ',
          },
          { texto: 'dispuesto correctamente', negrita: true },
          { texto: ' en un contenedor o cubo de basura.' },
        ],
      ],
      ejemplo: [
        {
          texto:
            'Por ejemplo: Servilletas de papel muy sucias no se pueden reciclar ya que pueden presentar riesgos higiénicos y biológicos.',
        },
      ],
    },
    comentario: {
      titulo: 'Comentario clave',
      parrafos: [
        [
          {
            texto:
              'Esta diferenciación es importante, para que la gestión de los residuos se oriente hacia el ',
          },
          { texto: 'aprovechamiento', negrita: true },
          { texto: ' y no solo hacia la disposición final.' },
        ],
      ],
    },
  },
  {
    id: 'reutilizacion-vs-reciclaje',
    etiquetaNavegacion: 'Reutilización vs. Reciclaje',
    encabezado: 'Reutilización vs. Reciclaje',
    subtitulo: 'Dos caminos de aprovechamiento con distinto impacto energético.',
    izquierda: {
      id: 'reutilizacion',
      titulo: 'Reutilización',
      tono: 'esmeralda',
      etiqueta: 'Sin proceso industrial',
      ilustracion: 'frasco',
      parrafos: [
        [
          {
            texto:
              'Consiste en darle un segundo uso a un producto, ya sea para su función original o para otra distinta, sin necesidad de un ',
          },
          { texto: 'proceso industrial', negrita: true },
          { texto: ' de transformación.' },
        ],
      ],
    },
    derecha: {
      id: 'reciclaje',
      titulo: 'Reciclaje',
      tono: 'turquesa',
      etiqueta: 'Transformación físico-química',
      ilustracion: 'reciclaje',
      parrafos: [
        [
          {
            texto:
              'Por otro lado, el reciclaje somete el residuo a un proceso físico-químico para obtener una ',
          },
          { texto: 'nueva materia prima', negrita: true },
          { texto: ' o ' },
          { texto: 'producto', negrita: true },
          { texto: ' con una finalidad similar a la original.' },
        ],
      ],
    },
    comentario: {
      titulo: 'Comentario clave',
      parrafos: [
        [
          {
            texto: 'La reutilización suele ser ambientalmente preferible porque ',
          },
          { texto: 'extiende', negrita: true },
          {
            texto:
              ' la vida útil del objeto y evita el gasto energético y de recursos asociado al reciclaje. ¡Reutiliza todo lo que puedas!',
          },
        ],
      ],
    },
  },
  {
    id: 'relleno-vs-vertedero',
    etiquetaNavegacion: 'Relleno vs. Vertedero',
    encabezado: 'Relleno sanitario vs. Vertedero a cielo abierto',
    subtitulo: 'La diferencia entre ingeniería sanitaria controlada y abandono ambiental.',
    izquierda: {
      id: 'relleno-sanitario',
      titulo: 'Relleno sanitario',
      tono: 'esmeralda',
      etiqueta: 'Obra de ingeniería controlada',
      ilustracion: 'capasControladas',
      parrafos: [
        [
          {
            texto:
              'Un relleno sanitario es una obra de ingeniería destinada a la disposición final de los residuos sólidos generados por las ciudades, bajo condiciones ',
          },
          { texto: 'controladas', negrita: true },
          {
            texto:
              ' que minimizan los efectos dañinos sobre el medio ambiente y el riesgo para la salud pública.',
          },
        ],
        [
          {
            texto:
              'Su diseño contempla la preparación del terreno, la impermeabilización, la compactación de los residuos en capas y su cobertura diaria con tierra, así como sistemas para el manejo de líquidos residuales tóxicos y gases emitidos por la basura.',
          },
        ],
      ],
      sabiasQue: {
        titulo: '¿Sabías que…?',
        parrafos: [
          [
            {
              texto: 'Expertos en el área ambiental afirman que en Venezuela ',
            },
            { texto: 'no existen', negrita: true },
            {
              texto:
                ' instalaciones que cumplan con los requisitos técnicos para ser considerados rellenos sanitarios.',
            },
          ],
          [
            {
              texto:
                'Al contrario, se estima que a lo largo del país existen más de 30 vertederos sin los controles técnicos sanitarios ni ambientales necesarios, lo cual incluye a Cañaveral, el “relleno sanitario” de nuestra Ciudad Guayana.',
            },
          ],
        ],
      },
    },
    derecha: {
      id: 'vertedero-cielo-abierto',
      titulo: 'Vertedero a cielo abierto',
      tono: 'terracota',
      etiqueta: 'Sin control técnico ni sanitario',
      ilustracion: 'vertederoAbierto',
      parrafos: [
        [
          {
            texto:
              'Conocido también como botadero, es en cambio un sitio al aire libre donde se depositan residuos sólidos de forma ',
          },
          { texto: 'indiscriminada', negrita: true },
          { texto: ' y sin ' },
          { texto: 'control técnico ni sanitario', negrita: true },
          { texto: '.' },
        ],
        [
          {
            texto:
              'Esta forma de disposición contribuye a la proliferación de plagas, la contaminación de aguas por líquidos residuales y emisiones significativas de gases de efecto invernadero.',
          },
        ],
      ],
      sabiasQue: {
        titulo: '¿Sabías que…?',
        parrafos: [
          [
            {
              texto:
                'En muchos casos, dichos vertederos se convierten en el lugar de trabajo de recicladores informales, de modo que estas personas quedan expuestas a condiciones peligrosas sin protección alguna.',
            },
          ],
        ],
      },
    },
  },
];

// Datos secuenciales de las 5 etapas del ciclo de la basura y reflexión de cierre
export const DATOS_CICLO_BASURA = {
  id: 'ciclo-basura',
  encabezado: 'Ciclo de la basura',
  introduccion:
    'Es el conjunto de etapas por las que atraviesan los residuos sólidos desde su origen hasta su destino final, lo cual incluye:',
  etapas: [
    {
      numero: 1,
      tituloCorto: 'Generación',
      icono: 'generacion',
      descripcion: [{ texto: 'Generación en hogares, industrias y comercios.' }],
    },
    {
      numero: 2,
      tituloCorto: 'Separación en origen',
      icono: 'separacion',
      descripcion: [{ texto: 'Almacenamiento temporal y la separación en la fuente.' }],
    },
    {
      numero: 3,
      tituloCorto: 'Recolección',
      icono: 'recoleccion',
      descripcion: [{ texto: 'Recolección y transporte.' }],
    },
    {
      numero: 4,
      tituloCorto: 'Tratamiento',
      icono: 'tratamiento',
      descripcion: [{ texto: 'Tratamiento mediante reciclaje, compostaje o valorización.' }],
    },
    {
      numero: 5,
      tituloCorto: 'Disposición final',
      icono: 'disposicion',
      descripcion: [
        { texto: 'Disposición final de los materiales no aprovechables, ' },
        { texto: 'idealmente en un relleno sanitario', negrita: true, cursiva: true },
        { texto: '.' },
      ],
    },
  ] satisfies EtapaCiclo[],
  parrafosCierre: [
    [
      { texto: 'La basura ' },
      { texto: 'no desaparece', negrita: true },
      { texto: ', sino que sigue un flujo que debe gestionarse de manera integral para ' },
      { texto: 'minimizar los impactos ambientales y sanitarios', negrita: true },
      { texto: '.' },
    ],
    [
      {
        texto:
          'Al hablar de gestión de residuos, contemplamos el ciclo completo; no solo la etapa de recolección o abandono.',
      },
    ],
  ] satisfies SegmentoTexto[][],
};

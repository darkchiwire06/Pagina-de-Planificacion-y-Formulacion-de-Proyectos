import { useId } from 'react';
import type { NombreIconoEtapa, NombreIlustracion } from '../datos/contenidoResiduos';

interface PropiedadesIlustracion {
  nombre: NombreIlustracion;
  clase?: string;
}

/**
 * Ilustraciones editoriales multicapa en SVG puro con iluminación volumétrica,
 * perspectiva y coreografía en el compositor GPU (0 KB en imágenes externas).
 */
export function IlustracionConcepto({
  nombre,
  clase = 'w-full h-auto',
}: PropiedadesIlustracion) {
  const uid = useId().replace(/:/g, '');

  switch (nombre) {
    case 'botella':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-esmeralda/24 bg-[#071610] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <radialGradient id={`${uid}-foco`} cx="50%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.28" />
              <stop offset="55%" stopColor="#0D281D" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#071610" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-cristal`} x1="154" y1="22" x2="206" y2="124" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#34D399" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id={`${uid}-hojaViva`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill="#071610" />
            <rect width="360" height="156" fill={`url(#${uid}-foco)`} />

            {/* Haz de luz cenital suave */}
            <polygon points="132,0 228,0 264,156 96,156" fill="#34D399" fillOpacity="0.04" />

            {/* Suelo en perspectiva y plataforma luminosa de revalorización */}
            <line x1="0" y1="128" x2="360" y2="128" stroke="#34D399" strokeOpacity="0.2" strokeWidth="1" />
            <ellipse cx="180" cy="130" rx="68" ry="11" fill="#34D399" fillOpacity="0.12" stroke="#34D399" strokeOpacity="0.38" strokeWidth="1.2" />
            <ellipse cx="180" cy="130" rx="42" ry="6" fill="#34D399" fillOpacity="0.2" />

            {/* Materiales limpios secundarios a la izquierda (cartón plegado y lata limpia) */}
            <g opacity="0.88">
              <ellipse cx="78" cy="128" rx="34" ry="6" fill="#040D09" fillOpacity="0.7" />
              {/* Lámina de cartón limpio plegado */}
              <polygon points="44,124 68,112 96,118 72,130" fill="#163829" stroke="#6EE7B7" strokeOpacity="0.55" strokeWidth="1.3" strokeLinejoin="round" />
              <polygon points="44,119 68,107 96,113 72,125" fill="#1E4735" stroke="#A7F3D0" strokeOpacity="0.65" strokeWidth="1.3" strokeLinejoin="round" />
              {/* Envase cilíndrico limpio */}
              <rect x="82" y="88" width="22" height="34" rx="5" fill="#133325" stroke="#6EE7B7" strokeOpacity="0.7" strokeWidth="1.4" />
              <ellipse cx="93" cy="90" rx="9" ry="2.5" fill="#34D399" fillOpacity="0.35" />
              <line x1="87" y1="96" x2="87" y2="116" stroke="#ECF5EF" strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round" />
            </g>

            {/* Anillo orbital energético simétrico detrás de la botella */}
            <g className="animar-orbita-horario">
              <circle cx="180" cy="76" r="56" fill="none" />
              <circle
                cx="180"
                cy="76"
                r="52"
                stroke="#34D399"
                strokeOpacity="0.34"
                strokeWidth="1.3"
                strokeDasharray="6 6"
              />
              <circle cx="180" cy="24" r="3.4" fill="#6EE7B7" />
              <circle cx="232" cy="76" r="3.2" fill="#FBBF24" />
              <circle cx="180" cy="128" r="3.4" fill="#34D399" />
              <circle cx="128" cy="76" r="3.2" fill="#2DD4BF" />
            </g>

            {/* Brotes botánicos a la derecha anclados en su tallo inferior izquierdo */}
            <g className="animar-brisa-izquierda">
              <path
                d="M236 126 C244 96 266 72 298 58 C296 90 274 116 236 126 Z"
                fill={`url(#${uid}-hojaViva)`}
                fillOpacity="0.32"
                stroke="#34D399"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M242 122 C258 100 274 82 292 64" stroke="#A7F3D0" strokeOpacity="0.7" strokeWidth="1.3" strokeLinecap="round" />
              <path
                d="M254 128 C272 114 294 104 316 104 C306 122 284 130 254 128 Z"
                fill="#34D399"
                fillOpacity="0.22"
                stroke="#6EE7B7"
                strokeOpacity="0.75"
                strokeWidth="1.4"
              />
            </g>

            {/* Botella PET limpia volumétrica en levitación central */}
            <g className="animar-levitacion">
              {/* Tapa y anillo de seguridad */}
              <rect x="169" y="16" width="22" height="8" rx="3" fill="#34D399" stroke="#ECF5EF" strokeWidth="1.5" />
              <rect x="167" y="24" width="26" height="4" rx="2" fill="#059669" stroke="#A7F3D0" strokeWidth="1.2" />

              {/* Cuerpo translúcido con volumen cilíndrico */}
              <path
                d="M170 28 H190 L204 48 V112 C204 118.6 198.6 124 192 124 H168 C161.4 124 156 118.6 156 112 V48 L170 28 Z"
                fill={`url(#${uid}-cristal)`}
                stroke="#ECF5EF"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Pliegues estructurales y reflejo especular de envase limpio */}
              <path d="M163 50 V112" stroke="#ECF5EF" strokeOpacity="0.72" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M168 52 V106" stroke="#ECF5EF" strokeOpacity="0.28" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M157 62 Q180 66 203 62" stroke="#A7F3D0" strokeOpacity="0.45" strokeWidth="1.2" />
              <path d="M157 98 Q180 102 203 98" stroke="#A7F3D0" strokeOpacity="0.45" strokeWidth="1.2" />

              {/* Emblema luminoso central de valor aprovechable */}
              <circle cx="180" cy="80" r="13" fill="#071A12" fillOpacity="0.78" stroke="#6EE7B7" strokeWidth="1.5" />
              <path
                d="M180 71 L183 77 L189 78 L184.5 82.2 L185.8 88.5 L180 85.2 L174.2 88.5 L175.5 82.2 L171 78 L177 77 Z"
                fill="#34D399"
              />
            </g>

            {/* Partículas ascendentes de valor recuperado */}
            <circle cx="138" cy="54" r="3" fill="#6EE7B7" className="animar-ascenso-1" />
            <circle cx="224" cy="48" r="2.8" fill="#FBBF24" className="animar-ascenso-2" />
            <circle cx="282" cy="38" r="2.5" fill="#34D399" className="animar-luciernaga-1" />
            <circle cx="62" cy="44" r="2.2" fill="#A7F3D0" className="animar-luciernaga-2" />
          </g>
        </svg>
      );

    case 'basura':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-terracota/26 bg-[#140B09] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <radialGradient id={`${uid}-resplandor`} cx="58%" cy="46%" r="60%">
              <stop offset="0%" stopColor="#F06449" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#2A120E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#140B09" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-metalContenedor`} x1="176" y1="36" x2="262" y2="128" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F06449" stopOpacity="0.42" />
              <stop offset="48%" stopColor="#3B1914" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#1F0D0A" stopOpacity="0.98" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill="#140B09" />
            <rect width="360" height="156" fill={`url(#${uid}-resplandor)`} />

            {/* Piso de contención sanitaria */}
            <rect x="0" y="128" width="360" height="28" fill="#0D0605" />
            <line x1="0" y1="128" x2="360" y2="128" stroke="#F06449" strokeOpacity="0.32" strokeWidth="1.3" />

            {/* Zona izquierda: servilletas muy sucias con riesgo higiénico/biológico */}
            <g>
              <ellipse cx="86" cy="126" rx="44" ry="7" fill="#F06449" fillOpacity="0.1" stroke="#F06449" strokeOpacity="0.35" strokeDasharray="4 3" />

              {/* Servilleta arrugada contaminada 1 */}
              <path
                d="M48 118 L58 96 L78 102 L92 92 L106 108 L98 124 L62 125 Z"
                fill="#2E1B17"
                stroke="#F5B5A8"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Manchas orgánicas no reciclables */}
              <circle cx="72" cy="112" r="5.5" fill="#F06449" fillOpacity="0.55" />
              <circle cx="86" cy="108" r="3.8" fill="#FBBF24" fillOpacity="0.48" />
              <path d="M60 116 L76 106" stroke="#F06449" strokeOpacity="0.5" strokeWidth="1.2" />

              {/* Servilleta arrugada 2 */}
              <path
                d="M88 122 L98 106 L116 110 L122 124 Z"
                fill="#3A1D17"
                stroke="#F06449"
                strokeOpacity="0.75"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />

              {/* Partículas de riesgo biológico contenidas */}
              <g className="animar-humo-1">
                <circle cx="68" cy="84" r="3" fill="#F06449" fillOpacity="0.75" />
                <circle cx="94" cy="78" r="2.4" fill="#FBBF24" fillOpacity="0.7" />
              </g>
            </g>

            {/* Flecha animada indicando disposición obligatoria en contenedor */}
            <g className="animar-flujo-cinta">
              <path d="M128 96 H156" stroke="#F06449" strokeWidth="2" strokeLinecap="round" />
              <path d="M150 90 L158 96 L150 102" stroke="#ECF5EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Derecha: Contenedor hermético robusto para disposición correcta */}
            <g>
              <ellipse cx="222" cy="131" rx="54" ry="8" fill="#060302" fillOpacity="0.85" />

              {/* Tapa domo sellada con asa */}
              <path
                d="M206 24 C206 19.5 209.5 17 214 17 H230 C234.5 17 238 19.5 238 24"
                stroke="#ECF5EF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M174 36 C174 28 192 24 222 24 C252 24 270 28 270 36 Z"
                fill="#F06449"
                fillOpacity="0.45"
                stroke="#ECF5EF"
                strokeWidth="1.7"
              />
              <rect x="170" y="35" width="104" height="8" rx="4" fill="#2B120E" stroke="#ECF5EF" strokeWidth="1.7" />

              {/* Cuerpo volumétrico acanalado del cubo de basura */}
              <path
                d="M178 43 H266 L256 122 C255.4 126.5 251.5 130 247 130 H197 C192.5 130 188.6 126.5 188 122 L178 43 Z"
                fill={`url(#${uid}-metalContenedor)`}
                stroke="#ECF5EF"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Asas laterales */}
              <path d="M178 52 H171 V64 H180" stroke="#F06449" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M266 52 H273 V64 H264" stroke="#F06449" strokeWidth="1.7" strokeLinejoin="round" />

              {/* Costillas estructurales con relieve */}
              <line x1="196" y1="52" x2="201" y2="120" stroke="#ECF5EF" strokeOpacity="0.32" strokeWidth="2" strokeLinecap="round" />
              <line x1="248" y1="52" x2="243" y2="120" stroke="#F06449" strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" />

              {/* Escudo central de contención higiénica segura */}
              <circle cx="222" cy="85" r="20" fill="#F06449" fillOpacity="0.18" className="animar-pulso-halo" />
              <path
                d="M222 68 L236 74 V85 C236 94.5 229.8 101.5 222 104 C214.2 101.5 208 94.5 208 85 V74 L222 68 Z"
                fill="#190B09"
                stroke="#F06449"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M216 85 L220.5 89.5 L229 80.5"
                stroke="#ECF5EF"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      );

    case 'frasco':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-esmeralda/24 bg-[#071711] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <radialGradient id={`${uid}-haloTerrario`} cx="72%" cy="52%" r="54%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.28" />
              <stop offset="55%" stopColor="#FBBF24" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#071711" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-vidrio`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECF5EF" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#34D399" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.24" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill="#071711" />
            <rect width="360" height="156" fill={`url(#${uid}-haloTerrario)`} />
            <line x1="0" y1="132" x2="360" y2="132" stroke="#34D399" strokeOpacity="0.22" strokeWidth="1.2" />

            {/* Izquierda: Primer uso (frasco de vidrio limpio vacío) */}
            <g opacity="0.9">
              <ellipse cx="74" cy="132" rx="28" ry="5" fill="#030A07" fillOpacity="0.75" />
              <rect x="57" y="54" width="34" height="7" rx="2.5" fill="#183A2B" stroke="#A7F3D0" strokeWidth="1.4" />
              <rect x="50" y="61" width="48" height="68" rx="10" fill={`url(#${uid}-vidrio)`} stroke="#A7F3D0" strokeOpacity="0.8" strokeWidth="1.5" />
              <path d="M57 70 V118" stroke="#ECF5EF" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
              <rect x="58" y="84" width="32" height="18" rx="3" fill="#0C2219" fillOpacity="0.65" stroke="#34D399" strokeOpacity="0.35" strokeWidth="1" />
            </g>

            {/* Puente central: Paso directo a segundo uso SIN fábrica ni gasto energético */}
            <path
              d="M110 88 C134 44 188 44 214 84"
              stroke="#34D399"
              strokeOpacity="0.45"
              strokeWidth="1.7"
              strokeDasharray="5 4"
            />
            <g className="animar-flujo-cinta">
              <circle cx="162" cy="55" r="4" fill="#FBBF24" />
            </g>

            {/* Medallón "Sin industria": silueta de fábrica tachada */}
            <g>
              <circle cx="162" cy="96" r="19" fill="#0C2118" stroke="#34D399" strokeOpacity="0.55" strokeWidth="1.4" />
              <path
                d="M151 105 V94 L158 98 V94 L165 98 V88 H171 V105 Z"
                fill="#34D399"
                fillOpacity="0.2"
                stroke="#9BB5A6"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <line x1="149" y1="108" x2="175" y2="84" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Derecha: Segundo uso directo (terrario/maceta viva luminosa) */}
            <g>
              <ellipse cx="272" cy="133" rx="46" ry="7" fill="#34D399" fillOpacity="0.16" />

              {/* Planta botánica frondosa creciendo del frasco reutilizado */}
              <g className="animar-brote-vivo">
                <path d="M272 102 V28" stroke="#ECF5EF" strokeWidth="2.2" strokeLinecap="round" />
                {/* Hojas inferiores */}
                <path
                  d="M272 64 C248 62 232 46 236 28 C256 30 268 44 272 64 Z"
                  fill="#059669"
                  fillOpacity="0.7"
                  stroke="#6EE7B7"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M242 34 L268 58" stroke="#ECF5EF" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />

                <path
                  d="M272 58 C296 56 312 40 308 22 C288 24 276 38 272 58 Z"
                  fill="#10B981"
                  fillOpacity="0.7"
                  stroke="#6EE7B7"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M302 28 L276 52" stroke="#ECF5EF" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />

                {/* Brote central superior */}
                <path
                  d="M272 34 C265 24 267 14 272 10 C277 14 279 24 272 34 Z"
                  fill="#FBBF24"
                  fillOpacity="0.85"
                  stroke="#ECF5EF"
                  strokeWidth="1.3"
                />
              </g>

              {/* Boca y cuerpo ancho de cristal del frasco reutilizado */}
              <rect x="244" y="50" width="56" height="9" rx="3.5" fill="#1E4635" stroke="#ECF5EF" strokeWidth="1.7" />
              <rect
                x="234"
                y="59"
                width="76"
                height="72"
                rx="14"
                fill={`url(#${uid}-vidrio)`}
                stroke="#ECF5EF"
                strokeWidth="1.8"
              />

              {/* Capas naturales internas: piedras de drenaje + sustrato fértil + musgo vivo */}
              <path
                d="M236 116 H308 V119 C308 125 303 129 297 129 H247 C241 129 236 125 236 119 V116 Z"
                fill="#9BB5A6"
                fillOpacity="0.35"
              />
              <path d="M236 100 Q272 95 308 100 V117 H236 V100 Z" fill="#173829" />
              <path d="M236 99 Q254 93 272 98 T308 98" stroke="#34D399" strokeWidth="2.4" strokeLinecap="round" />

              {/* Brillos del vidrio y luciérnagas internas */}
              <path d="M243 68 V116" stroke="#ECF5EF" strokeOpacity="0.65" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="256" cy="82" r="2.6" fill="#FBBF24" className="animar-luciernaga-1" />
              <circle cx="290" cy="78" r="2.4" fill="#6EE7B7" className="animar-luciernaga-2" />
            </g>
          </g>
        </svg>
      );

    case 'reciclaje':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-[#2dd4bf]/28 bg-[#051416] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <radialGradient id={`${uid}-nucleoReactor`} cx="50%" cy="50%" r="56%">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.34" />
              <stop offset="55%" stopColor="#0D3338" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#051416" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-camaraQuimica`} x1="144" y1="26" x2="216" y2="124" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.34" />
              <stop offset="50%" stopColor="#0F3A3E" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#115E59" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id={`${uid}-productoNuevo`} x1="286" y1="42" x2="324" y2="118" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.58" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.32" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill="#051416" />
            <rect width="360" height="156" fill={`url(#${uid}-nucleoReactor)`} />

            {/* Retícula técnica industrial sutil */}
            <line x1="0" y1="38" x2="360" y2="38" stroke="#2DD4BF" strokeOpacity="0.07" strokeWidth="1" />
            <line x1="0" y1="82" x2="360" y2="82" stroke="#2DD4BF" strokeOpacity="0.07" strokeWidth="1" />
            <line x1="0" y1="128" x2="360" y2="128" stroke="#2DD4BF" strokeOpacity="0.24" strokeWidth="1.3" />
            <rect x="0" y="128" width="360" height="28" fill="#030C0E" />

            {/* === ETAPA 1 (IZQUIERDA): TOLVA TRITURADORA DE RESIDUOS === */}
            <g>
              {/* Residuos entrando a la tolva */}
              <g className="animar-goteo-1">
                <rect x="48" y="16" width="12" height="18" rx="3" transform="rotate(-14 48 16)" fill="#2DD4BF" fillOpacity="0.35" stroke="#ECF5EF" strokeWidth="1.3" />
                <polygon points="68,18 78,14 80,25 70,27" fill="#5EEAD4" fillOpacity="0.45" stroke="#ECF5EF" strokeWidth="1.2" />
              </g>

              {/* Embudo industrial metálico */}
              <path
                d="M30 36 H96 L80 68 H46 L30 36 Z"
                fill="#0D292C"
                stroke="#5EEAD4"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <rect x="26" y="32" width="74" height="5" rx="2.5" fill="#2DD4BF" fillOpacity="0.4" stroke="#ECF5EF" strokeWidth="1.3" />

              {/* Cámara de molienda y rodillos trituradores */}
              <rect x="40" y="68" width="46" height="52" rx="6" fill="#091E21" stroke="#2DD4BF" strokeOpacity="0.7" strokeWidth="1.6" />
              <g className="animar-orbita-horario">
                <circle cx="55" cy="88" r="8" fill="#134E4A" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
              <g className="animar-orbita-antihorario">
                <circle cx="71" cy="88" r="8" fill="#134E4A" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
              <rect x="34" y="120" width="58" height="8" rx="3" fill="#11383C" stroke="#2DD4BF" strokeOpacity="0.5" strokeWidth="1.2" />
            </g>

            {/* Conducto presurizado 1: escamas trituradas hacia el reactor */}
            <rect x="86" y="78" width="56" height="14" rx="4" fill="#082226" stroke="#2DD4BF" strokeOpacity="0.6" strokeWidth="1.4" />
            <g className="animar-flujo-cinta">
              <polygon points="100,85 106,81 111,86 104,89" fill="#5EEAD4" />
              <polygon points="116,83 122,81 125,87 118,88" fill="#ECF5EF" />
            </g>
            <g className="animar-flujo-cinta-tardio">
              <polygon points="104,84 110,81 114,87 107,89" fill="#2DD4BF" />
            </g>

            {/* === ETAPA 2 (CENTRO): REACTOR DE TRANSFORMACIÓN FÍSICO-QUÍMICA === */}
            <g>
              {/* Tuberías superiores de energía y control */}
              <path d="M164 26 V16 H196 V26" stroke="#5EEAD4" strokeOpacity="0.7" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="180" cy="16" r="5" fill="#082226" stroke="#ECF5EF" strokeWidth="1.4" />
              <line x1="180" y1="16" x2="183" y2="13" stroke="#FBBF24" strokeWidth="1.4" strokeLinecap="round" />

              {/* Cuerpo principal del reactor químico */}
              <rect
                x="140"
                y="26"
                width="80"
                height="94"
                rx="18"
                fill={`url(#${uid}-camaraQuimica)`}
                stroke="#ECF5EF"
                strokeWidth="1.9"
              />
              {/* Brida superior e inferior del reactor */}
              <line x1="142" y1="40" x2="218" y2="40" stroke="#5EEAD4" strokeOpacity="0.6" strokeWidth="1.5" />
              <line x1="142" y1="106" x2="218" y2="106" stroke="#5EEAD4" strokeOpacity="0.6" strokeWidth="1.5" />
              <rect x="148" y="120" width="64" height="8" rx="3" fill="#134E4A" stroke="#5EEAD4" strokeWidth="1.3" />

              {/* Núcleo molecular giratorio perfectamente centrado en (180, 73) */}
              <circle cx="180" cy="73" r="24" fill="#2DD4BF" fillOpacity="0.14" className="animar-pulso-halo" />
              <g className="animar-orbita-horario">
                <circle cx="180" cy="73" r="26" fill="none" />
                <circle
                  cx="180"
                  cy="73"
                  r="22"
                  stroke="#5EEAD4"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <circle cx="180" cy="51" r="3.4" fill="#ECF5EF" />
                <circle cx="199" cy="84" r="3.4" fill="#2DD4BF" />
                <circle cx="161" cy="84" r="3.4" fill="#FBBF24" />
              </g>
              <g className="animar-orbita-antihorario">
                <polygon
                  points="180,58 193,65.5 193,80.5 180,88 167,80.5 167,65.5"
                  fill="#0A2E32"
                  fillOpacity="0.7"
                  stroke="#CCFBF1"
                  strokeWidth="1.5"
                />
              </g>
              <circle cx="180" cy="73" r="5.5" fill="#5EEAD4" />

              {/* Burbujas ascendentes de reacción química */}
              <circle cx="156" cy="94" r="2.5" fill="#CCFBF1" className="animar-ascenso-1" />
              <circle cx="204" cy="92" r="2.8" fill="#5EEAD4" className="animar-ascenso-2" />
            </g>

            {/* Conducto de extrusión 2: polímero purificado / nueva materia prima */}
            <rect x="220" y="78" width="52" height="14" rx="4" fill="#082226" stroke="#5EEAD4" strokeOpacity="0.75" strokeWidth="1.4" />
            <g className="animar-flujo-cinta">
              <circle cx="236" cy="85" r="3" fill="#CCFBF1" />
              <circle cx="248" cy="85" r="3" fill="#2DD4BF" />
            </g>
            <g className="animar-flujo-cinta-tardio">
              <circle cx="242" cy="85" r="3" fill="#5EEAD4" />
            </g>

            {/* === ETAPA 3 (DERECHA): NUEVA MATERIA PRIMA Y PRODUCTO RENOVADO === */}
            <g>
              <ellipse cx="306" cy="126" rx="34" ry="6" fill="#2DD4BF" fillOpacity="0.2" />

              {/* Lingotes/pellets de nueva materia prima pura */}
              <rect x="270" y="104" width="22" height="18" rx="4" fill="#14B8A6" fillOpacity="0.45" stroke="#CCFBF1" strokeWidth="1.4" />
              <rect x="275" y="96" width="20" height="10" rx="3" fill="#2DD4BF" fillOpacity="0.55" stroke="#ECF5EF" strokeWidth="1.3" />

              {/* Nuevo envase cristalino fabricado a partir de la materia prima reciclada */}
              <g className="animar-levitacion">
                <rect x="303" y="34" width="14" height="6" rx="2" fill="#5EEAD4" stroke="#ECF5EF" strokeWidth="1.4" />
                <path
                  d="M304 40 H316 L326 55 V114 C326 118.4 322.4 122 318 122 H302 C297.6 122 294 118.4 294 114 V55 L304 40 Z"
                  fill={`url(#${uid}-productoNuevo)`}
                  stroke="#ECF5EF"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M300 58 V110" stroke="#ECF5EF" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
                <circle cx="310" cy="82" r="6" fill="#5EEAD4" fillOpacity="0.35" stroke="#CCFBF1" strokeWidth="1.3" />
              </g>

              {/* Destellos de material puro recién transformado */}
              <path
                d="M334 36 L336 42 L342 44 L336 46 L334 52 L332 46 L326 44 L332 42 Z"
                fill="#CCFBF1"
                className="animar-luciernaga-1"
              />
              <circle cx="284" cy="48" r="2.5" fill="#5EEAD4" className="animar-luciernaga-2" />
            </g>
          </g>
        </svg>
      );

    case 'capasControladas':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-esmeralda/26 bg-[#071610] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <linearGradient id={`${uid}-cieloIng`} x1="180" y1="0" x2="180" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#103828" />
              <stop offset="100%" stopColor="#071610" />
            </linearGradient>
            <linearGradient id={`${uid}-subsuelo`} x1="180" y1="54" x2="180" y2="156" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0E261C" />
              <stop offset="100%" stopColor="#050F0B" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill={`url(#${uid}-cieloIng)`} />

            {/* Subsuelo preparado e impermeabilizado de borde a borde */}
            <path d="M0 58 H54 L78 128 H274 L298 58 H360 V156 H0 Z" fill={`url(#${uid}-subsuelo)`} />

            {/* Acuífero subterráneo limpio y protegido debajo de la geomembrana */}
            <path
              d="M18 145 Q98 140 178 145 T342 145"
              stroke="#38BDF8"
              strokeOpacity="0.45"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Vaso de ingeniería con doble barrera y geomembrana impermeable de alta densidad */}
            <path
              d="M54 58 L78 128 H274 L298 58"
              fill="#11291F"
              stroke="#34D399"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M59 60 L81 124 H271 L293 60"
              stroke="#A7F3D0"
              strokeOpacity="0.45"
              strokeWidth="1.2"
              strokeDasharray="5 3"
              strokeLinejoin="round"
            />

            {/* Lecho inferior de grava y tubería colectora de lixiviados */}
            <polygon points="75,114 277,114 273,126 79,126" fill="#081711" />
            <line x1="88" y1="120" x2="318" y2="120" stroke="#34D399" strokeWidth="2" />
            <circle cx="110" cy="120" r="3.5" fill="#06110C" stroke="#6EE7B7" strokeWidth="1.5" />
            <circle cx="176" cy="120" r="3.5" fill="#06110C" stroke="#6EE7B7" strokeWidth="1.5" />
            <circle cx="242" cy="120" r="3.5" fill="#06110C" stroke="#6EE7B7" strokeWidth="1.5" />

            {/* Estación lateral sellada de tratamiento de líquidos residuales */}
            <rect x="312" y="84" width="34" height="42" rx="6" fill="#0D281D" stroke="#34D399" strokeWidth="1.6" />
            <path d="M316 106 Q329 102 342 106 V122 H316 V106 Z" fill="#34D399" fillOpacity="0.32" />
            <circle cx="329" cy="95" r="3" fill="#6EE7B7" className="animar-luciernaga-1" />

            {/* Celdas compactadas de residuos alternadas con cobertura diaria de tierra */}
            {/* Celda 1 + tierra */}
            <polygon points="70,98 282,98 277,113 75,113" fill="#17382A" />
            <line x1="69" y1="97" x2="283" y2="97" stroke="#D97706" strokeOpacity="0.65" strokeWidth="2.4" />
            {/* Celda 2 + tierra */}
            <polygon points="64,79 288,79 282,96 70,96" fill="#1B4231" />
            <line x1="63" y1="78" x2="289" y2="78" stroke="#D97706" strokeOpacity="0.65" strokeWidth="2.4" />
            {/* Celda 3 superior + sello vegetal */}
            <polygon points="57,59 295,59 288,77 64,77" fill="#204D39" />
            <path d="M0 58 Q176 46 360 58" stroke="#34D399" strokeWidth="2.6" strokeLinecap="round" />

            {/* Red de chimeneas de captación y control de biogás */}
            <rect x="118" y="34" width="6" height="74" rx="3" fill="#0B1E16" stroke="#6EE7B7" strokeWidth="1.3" />
            <rect x="228" y="34" width="6" height="74" rx="3" fill="#0B1E16" stroke="#6EE7B7" strokeWidth="1.3" />
            <rect x="171" y="24" width="10" height="90" rx="3.5" fill="#0B1E16" stroke="#ECF5EF" strokeWidth="1.7" />
            <rect x="166" y="20" width="20" height="6" rx="3" fill="#34D399" />

            {/* Antorcha controlada convirtiendo metano de forma segura */}
            <g className="animar-llama-biogas">
              <path
                d="M176 6 C181 11 182 16 176 20 C170 16 171 11 176 6 Z"
                fill="#34D399"
              />
              <path
                d="M176 10 C178.5 13 179 16 176 18.5 C173 16 173.5 13 176 10 Z"
                fill="#ECF5EF"
              />
            </g>

            {/* Árboles protectores anclados en la base de su tronco */}
            <g className="animar-brote-vivo">
              <line x1="28" y1="44" x2="28" y2="58" stroke="#ECF5EF" strokeWidth="1.6" />
              <circle cx="28" cy="40" r="9" fill="#10B981" fillOpacity="0.45" stroke="#34D399" strokeWidth="1.5" />
            </g>
            <g className="animar-brote-vivo">
              <line x1="332" y1="44" x2="332" y2="58" stroke="#ECF5EF" strokeWidth="1.6" />
              <circle cx="332" cy="40" r="8" fill="#10B981" fillOpacity="0.45" stroke="#34D399" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      );

    case 'vertederoAbierto':
      return (
        <svg
          viewBox="0 0 360 156"
          fill="none"
          aria-hidden="true"
          className={`rounded-2xl border border-terracota/28 bg-[#160A08] ${clase}`}
        >
          <defs>
            <clipPath id={`${uid}-recorte`}>
              <rect width="360" height="156" rx="16" />
            </clipPath>
            <linearGradient id={`${uid}-atmosfera`} x1="180" y1="0" x2="180" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B1510" />
              <stop offset="65%" stopColor="#210D0A" />
              <stop offset="100%" stopColor="#160A08" />
            </linearGradient>
            <linearGradient id={`${uid}-tierraPermeable`} x1="180" y1="94" x2="180" y2="156" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#29120E" />
              <stop offset="100%" stopColor="#110706" />
            </linearGradient>
          </defs>

          <g clipPath={`url(#${uid}-recorte)`}>
            <rect width="360" height="156" fill={`url(#${uid}-atmosfera)`} />

            {/* Subsuelo desnudo y agrietado SIN impermeabilización */}
            <rect x="0" y="94" width="360" height="62" fill={`url(#${uid}-tierraPermeable)`} />
            <line x1="0" y1="94" x2="360" y2="94" stroke="#F06449" strokeOpacity="0.65" strokeWidth="1.8" strokeDasharray="6 4" />

            {/* Montañas irregulares de basura acumulada sin control a cielo abierto */}
            <path
              d="M8 94 L48 68 L82 76 L132 40 L176 64 L224 44 L268 70 L306 58 L352 94 Z"
              fill="#3F1913"
              stroke="#F5B5A8"
              strokeOpacity="0.8"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M42 94 L94 62 L146 78 L194 52 L248 80 L314 94 Z"
              fill="#F06449"
              fillOpacity="0.24"
              stroke="#F06449"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Detalles reconocibles de desechos expuestos (neumático, bolsas, escombros) */}
            <circle cx="114" cy="76" r="8" fill="#1A0B09" stroke="#ECF5EF" strokeOpacity="0.65" strokeWidth="2.2" />
            <rect x="206" y="64" width="14" height="10" rx="2" transform="rotate(18 206 64)" fill="#F06449" fillOpacity="0.4" stroke="#ECF5EF" strokeOpacity="0.65" strokeWidth="1.2" />
            <polygon points="154,68 164,61 170,71 158,74" fill="#FBBF24" fillOpacity="0.4" />

            {/* Plumas densas de gases de efecto invernadero y humo tóxico hacia la atmósfera */}
            <g className="animar-humo-1">
              <circle cx="128" cy="26" r="10" fill="#F06449" fillOpacity="0.22" />
              <circle cx="138" cy="20" r="13" fill="#FBBF24" fillOpacity="0.16" />
              <path d="M132 36 C126 26 138 18 132 8" stroke="#FBBF24" strokeOpacity="0.85" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M74 56 C70 46 78 38 74 28" stroke="#F06449" strokeOpacity="0.8" strokeWidth="1.6" strokeLinecap="round" />
            </g>
            <g className="animar-humo-2">
              <circle cx="224" cy="28" r="12" fill="#F06449" fillOpacity="0.22" />
              <path d="M224 38 C218 28 230 20 224 10" stroke="#ECF5EF" strokeOpacity="0.8" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M294 48 C290 38 298 32 294 22" stroke="#F06449" strokeOpacity="0.82" strokeWidth="1.6" strokeLinecap="round" />
            </g>

            {/* Plagas sobrevolando los residuos expuestos */}
            <path d="M168 30 Q172 26 176 30 Q180 26 184 30" stroke="#ECF5EF" strokeOpacity="0.7" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M254 34 Q257 31 260 34 Q263 31 266 34" stroke="#FBBF24" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />

            {/* Grietas y filtración directa de lixiviados tóxicos hacia las aguas subterráneas */}
            <path d="M88 94 L84 112 L90 128" stroke="#F06449" strokeOpacity="0.55" strokeWidth="1.5" />
            <path d="M178 94 L182 110 L176 128" stroke="#F06449" strokeOpacity="0.65" strokeWidth="1.6" />
            <path d="M268 94 L264 112 L270 128" stroke="#F06449" strokeOpacity="0.55" strokeWidth="1.5" />

            <g className="animar-goteo-1">
              <circle cx="87" cy="112" r="2.8" fill="#F06449" />
              <circle cx="180" cy="110" r="3" fill="#FBBF24" />
            </g>
            <g className="animar-goteo-2">
              <circle cx="266" cy="112" r="2.8" fill="#F06449" />
              <circle cx="178" cy="118" r="2.6" fill="#F06449" />
            </g>

            {/* Acuífero subterráneo contaminándose */}
            <path
              d="M0 134 Q90 128 180 134 T360 134 V156 H0 Z"
              fill="#F06449"
              fillOpacity="0.22"
            />
            <path
              d="M12 136 Q96 130 180 136 T348 136"
              stroke="#F06449"
              strokeOpacity="0.82"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
  }
}

/**
 * Escena panorámica principal de portada ("Noche de Guayana y Ecosistema Circular"):
 * tepuyes al horizonte, río vivo en movimiento, follaje tropical en primer plano
 * y esfera botánica central con anillos orbitales en contrarrotación.
 */
export function EscenaPortada() {
  const uid = useId().replace(/:/g, '');

  return (
    <div className="overflow-hidden rounded-3xl border border-esmeralda/28 bg-[#05120D]">
      <svg
        viewBox="0 0 380 204"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
        className="block w-full h-[clamp(196px,32svh,300px)] sm:h-[clamp(240px,38svh,376px)]"
      >
        <defs>
          <radialGradient id={`${uid}-aurora`} cx="50%" cy="44%" r="62%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.32" />
          <stop offset="45%" stopColor="#0E3325" stopOpacity="0.45" />
          <stop offset="80%" stopColor="#071912" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#05120D" stopOpacity="1" />
        </radialGradient>
        <linearGradient id={`${uid}-esferaCristal`} x1="160" y1="62" x2="220" y2="126" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.36" />
          <stop offset="50%" stopColor="#133829" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#061610" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id={`${uid}-aguaCaroni`} x1="0" y1="152" x2="380" y2="204" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0A261E" />
          <stop offset="50%" stopColor="#0E352C" />
          <stop offset="100%" stopColor="#05130E" />
        </linearGradient>
        <linearGradient id={`${uid}-reflejoRio`} x1="60" y1="170" x2="320" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0" />
          <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g>
        {/* Cielo nocturno amazónico con aurora esmeralda */}
        <rect width="380" height="204" fill="#05120D" />
        <rect width="380" height="204" fill={`url(#${uid}-aurora)`} />

        {/* Siluetas lejanas inspiradas en mesetas/tepuyes de Guayana */}
        <path
          d="M0 154 L26 122 H84 L112 146 L146 138 L168 154 Z"
          fill="#092017"
          stroke="#34D399"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <path
          d="M214 154 L242 134 L276 116 H342 L380 144 V154 Z"
          fill="#092017"
          stroke="#34D399"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        {/* Cauce fluvial vivo en la base (ríos Caroní y Orinoco) */}
        <path d="M0 152 Q95 145 190 152 T380 152 V204 H0 Z" fill={`url(#${uid}-aguaCaroni)`} />
        <g className="animar-corriente-agua">
          <path
            d="M18 166 Q104 158 190 166 T362 166"
            stroke={`url(#${uid}-reflejoRio)`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M46 180 Q132 173 218 180 T376 180"
            stroke="#34D399"
            strokeOpacity="0.28"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse cx="190" cy="160" rx="44" ry="4" fill="#34D399" fillOpacity="0.18" />
        </g>

        {/* === ESCULTURA CINÉTICA CENTRAL: EL CICLO CONTINUO === */}
        {/* Halo respiratorio exterior */}
        <circle cx="190" cy="92" r="64" fill="#34D399" fillOpacity="0.08" className="animar-pulso-halo" />

        {/* Órbita exterior simétrica con nodos de las etapas y flujo circular */}
        <g className="animar-orbita-horario">
          <circle cx="190" cy="92" r="64" fill="none" />
          <circle
            cx="190"
            cy="92"
            r="58"
            stroke="#34D399"
            strokeOpacity="0.36"
            strokeWidth="1.4"
            strokeDasharray="8 6"
          />
          {/* Satélites luminosos del ciclo */}
          <circle cx="190" cy="34" r="4.8" fill="#071912" stroke="#34D399" strokeWidth="2" />
          <circle cx="248" cy="92" r="4.8" fill="#071912" stroke="#2DD4BF" strokeWidth="2" />
          <circle cx="190" cy="150" r="4.8" fill="#071912" stroke="#FBBF24" strokeWidth="2" />
          <circle cx="132" cy="92" r="4.8" fill="#071912" stroke="#F06449" strokeWidth="2" />
        </g>

        {/* Anillo geométrico intermedio en contrarrotación */}
        <g className="animar-orbita-antihorario">
          <circle
            cx="190"
            cy="92"
            r="44"
            stroke="#6EE7B7"
            strokeOpacity="0.45"
            strokeWidth="1.3"
            strokeDasharray="22 10"
          />
          <circle cx="221" cy="61" r="2.8" fill="#6EE7B7" />
          <circle cx="159" cy="123" r="2.8" fill="#FBBF24" />
        </g>

        {/* Esfera terrario de cristal en levitación suave */}
        <g className="animar-levitacion">
          <circle
            cx="190"
            cy="92"
            r="33"
            fill={`url(#${uid}-esferaCristal)`}
            stroke="#ECF5EF"
            strokeWidth="1.8"
          />
          {/* Sustrato vivo dentro de la esfera */}
          <path
            d="M161 106 Q190 100 219 106 A33 33 0 0 1 161 106 Z"
            fill="#103828"
          />
          <path d="M162 106 Q190 101 218 106" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />

          {/* Planta central floreciendo dentro de la esfera */}
          <g className="animar-brote-vivo">
            <line x1="190" y1="106" x2="190" y2="68" stroke="#ECF5EF" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M190 92 C175 90 168 79 172 69 C182 70 188 80 190 92 Z"
              fill="#34D399"
              fillOpacity="0.82"
              stroke="#A7F3D0"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M190 86 C205 84 212 73 208 63 C198 64 192 74 190 86 Z"
              fill="#10B981"
              fillOpacity="0.85"
              stroke="#A7F3D0"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <circle cx="190" cy="65" r="3.2" fill="#FBBF24" />
          </g>

          {/* Reflejo especular curvo de cristal */}
          <path
            d="M166 80 A26 26 0 0 1 186 64"
            stroke="#ECF5EF"
            strokeOpacity="0.65"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>

        {/* === FOLLAJE BOTÁNICO EN PRIMER PLANO === */}
        {/* Frondas tropicales izquierdas calibradas para encuadre móvil y escritorio */}
        <g className="animar-brisa-izquierda">
          <path
            d="M-6 208 C6 162 34 126 78 108 C68 152 42 188 -6 208 Z"
            fill="#0A241A"
            stroke="#34D399"
            strokeOpacity="0.45"
            strokeWidth="1.4"
          />
          <path
            d="M42 208 C54 166 80 132 118 116 C110 156 84 190 42 208 Z"
            fill="#0D2E21"
            stroke="#34D399"
            strokeOpacity="0.72"
            strokeWidth="1.6"
          />
          <path d="M54 198 C70 170 90 144 112 122" stroke="#6EE7B7" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" />
          <path
            d="M64 208 C80 180 104 162 136 156 C122 184 96 202 64 208 Z"
            fill="#144230"
            fillOpacity="0.9"
            stroke="#6EE7B7"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />
        </g>

        {/* Frondas tropicales derechas calibradas para encuadre móvil y escritorio */}
        <g className="animar-brisa-derecha">
          <path
            d="M386 208 C374 160 344 124 300 106 C310 150 338 188 386 208 Z"
            fill="#0A241A"
            stroke="#34D399"
            strokeOpacity="0.45"
            strokeWidth="1.4"
          />
          <path
            d="M338 208 C326 166 300 132 262 116 C270 156 296 190 338 208 Z"
            fill="#0D2E21"
            stroke="#34D399"
            strokeOpacity="0.72"
            strokeWidth="1.6"
          />
          <path d="M326 198 C310 170 290 144 268 122" stroke="#6EE7B7" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" />
          <path
            d="M316 208 C300 180 276 162 244 156 C258 184 284 202 316 208 Z"
            fill="#133D33"
            fillOpacity="0.9"
            stroke="#2DD4BF"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />
        </g>

        {/* Luciérnagas bioluminiscentes distribuidas en el dosel */}
        <g className="animar-luciernaga-1">
          <circle cx="92" cy="48" r="6" fill="#34D399" fillOpacity="0.2" />
          <circle cx="92" cy="48" r="2.4" fill="#A7F3D0" />
        </g>
        <g className="animar-luciernaga-2">
          <circle cx="288" cy="44" r="6" fill="#FBBF24" fillOpacity="0.22" />
          <circle cx="288" cy="44" r="2.5" fill="#FBBF24" />
        </g>
        <g className="animar-luciernaga-3">
          <circle cx="112" cy="84" r="5" fill="#2DD4BF" fillOpacity="0.2" />
          <circle cx="112" cy="84" r="2" fill="#CCFBF1" />
        </g>
        <g className="animar-luciernaga-1">
          <circle cx="268" cy="82" r="5" fill="#34D399" fillOpacity="0.2" />
          <circle cx="268" cy="82" r="2.2" fill="#6EE7B7" />
        </g>
      </g>
      </svg>
    </div>
  );
}

// Iconos vectoriales detallados en dos tonos para las 5 etapas del ciclo de la basura
export function IconoEtapa({ nombre }: { nombre: NombreIconoEtapa }) {
  switch (nombre) {
    case 'generacion':
      return (
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
          <path
            d="M4 12.5 14 4.2l10 8.3V23a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 4 23V12.5Z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <rect x="11.2" y="16" width="5.6" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="14" cy="11.5" r="2" fill="currentColor" fillOpacity="0.45" />
        </svg>
      );
    case 'separacion':
      return (
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
          <rect
            x="3.8"
            y="7.5"
            width="8.8"
            height="16"
            rx="2.2"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect
            x="15.4"
            y="7.5"
            width="8.8"
            height="16"
            rx="2.2"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M6.2 4.8h4m7.6 0h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="8.2" cy="15.5" r="1.6" fill="currentColor" />
          <path d="M18.3 15.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'recoleccion':
      return (
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
          <path
            d="M3 8.5h13.5v10H3v-10Zm13.5 3h4.5l3.8 3.8v3.2h-8.3v-7Z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <line x1="6.5" y1="12" x2="13" y2="12" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8.2" cy="20.5" r="2.4" fill="#06110C" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="20.2" cy="20.5" r="2.4" fill="#06110C" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'tratamiento':
      return (
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
          <circle
            cx="14"
            cy="14"
            r="9.8"
            fill="currentColor"
            fillOpacity="0.14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeDasharray="4 2.5"
          />
          <path
            d="M14 19.5c3.2 0 5.5-2.5 5.5-5.7 0-3.3-3.4-6-5.5-6.8-2.1.8-5.5 3.5-5.5 6.8 0 3.2 2.3 5.7 5.5 5.7Z"
            fill="currentColor"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M14 19.5V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'disposicion':
      return (
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="w-6 h-6">
          <path
            d="M14 3.5 5.5 7v7c0 5.5 3.6 9.4 8.5 10.5 4.9-1.1 8.5-5 8.5-10.5V7L14 3.5Z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m10.3 14.2 2.5 2.5 4.9-4.9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

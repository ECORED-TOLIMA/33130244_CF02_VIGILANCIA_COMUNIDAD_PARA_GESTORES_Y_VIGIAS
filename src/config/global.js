export default {
  global: {
    componenteFormativo:
      'Vigilancia de situaciones de interés en salud pública',
    descripcionCurso:
      'Este componente formativo se enfoca en identificar situaciones relevantes para la salud pública, clasificando señales que requieren atención inmediata. Explica cómo mediante la vigilancia comunitaria se detectan eventos, factores ambientales, animales y humanos que pueden afectar colectivamente. También detalla acciones individuales y colectivas para controlar brotes, reducir riesgos y fortalecer el papel activo de la comunidad en la respuesta sanitaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Situaciones de interés en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Los factores ambientales, fenómenos naturales y sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Situaciones en animales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Síndromes febriles',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Casos específicos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Muertes en comunidad y muertes imprevistas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Conglomerados',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Otras enfermedades',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Acciones individuales y colectivas',
            hash: 't_1_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Situaciones de interés en salud pública',
      referencia:
        'Ministerio de Salud. (2011). <em>Cartilla de vigilancia comunitaria.</em>',
      tipo: 'Cartilla',
      link:
        'https://www.paho.org/sites/default/files/2020-09/Cartilla%20de%20Vigilancia%20Comunitaria.pdf#:~:text=Esto%20los%20podemos%20hacer%20a%20través%20de:,de%20asistencia%20a%20los%20programas%20de%20salud.',
    },
    {
      tema: '1. Situaciones de interés en salud pública',
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Lineamientos para la Vigilancia Basada en la Comunidad.</em>',
      tipo: 'Documento',
      link:
        'https://www.ins.gov.co/Noticias/ReVCom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
    {
      tema: '1. Situaciones de interés en salud pública',
      referencia:
        'Control de Epidemias: Caja de Herramientas. (2025). <em>Vigilancia basada en la comunidad</em>.',
      tipo: 'Página web',
      link:
        'https://epidemics.ifrc.org/es/volunteer/action/01-vigilancia-basada-en-la-comunidad#:~:text=La%20vigilancia%20basada%20en%20la%20comunidad%20puede%20llevarse%20a%20cabo,asociarla%20a%20otras%20actividades%20comunitarias.',
    },
  ],
  glosario: [
    {
      termino: 'Activación de rutas de atención',
      significado:
        'proceso de referir rápidamente a una persona o grupo identificado en riesgo hacia los servicios de salud o asistencia específica.',
    },
    {
      termino: 'Brotes epidemiológicos',
      significado:
        'aparición inusual de casos similares (enfermedades o síntomas) en un área o población, en un periodo corto de tiempo.',
    },
    {
      termino: 'Clasificación de eventos',
      significado:
        'asignación de una categoría o priorización a los eventos identificados, según su gravedad y necesidad de intervención.',
    },
    {
      termino: 'Complicaciones en el embarazo',
      significado:
        'condiciones que amenazan la salud de la madre o el bebé durante la gestación (sangrado, fiebre persistente, dolor abdominal, convulsiones, etc.).',
    },
    {
      termino: 'Contaminación ambiental',
      significado:
        'presencia de agentes nocivos en el aire, agua, suelo o ambiente, que pueden causar daños a la salud pública.',
    },
    {
      termino: 'Factores potencialmente relacionados',
      significado:
        'elementos ambientales, sociales o económicos que pueden generar o favorecer la aparición de situaciones de interés en salud pública (ej. contaminación ambiental).',
    },
    {
      termino: 'Identificación de señales',
      significado:
        'proceso por el cual se detectan signos, síntomas, situaciones o eventos inusuales que podrían indicar riesgo para la salud de la comunidad.',
    },
    {
      termino: 'Medidas colectivas',
      significado:
        'acciones implementadas por la comunidad o instituciones: campañas, eliminaciones de criaderos, saneamiento, educación, cierre temporal de lugares y coordinación intersectorial.',
    },
    {
      termino: 'Medidas individuales',
      significado:
        'acciones personales que reducen el riesgo, como buscar atención médica, reportar síntomas, evitar automedicación y adoptar prácticas preventivas.',
    },
    {
      termino: 'Promoción de la salud',
      significado:
        'estrategias educativas para aumentar el conocimiento y la acción colectiva, con el fin de prevenir enfermedades y mejorar la salud general.',
    },
    {
      termino: 'Síndromes febriles',
      significado:
        'conjuntos de síntomas relacionados con fiebre y acompañados de otras manifestaciones clínicas (respiratoria, exantema, diarrea, ictericia, convulsiones).',
    },
    {
      termino: 'Situaciones de interés en salud pública',
      significado:
        'conjunto de eventos, factores o señales que pueden afectar directa o indirectamente la salud comunitaria (enfermedades, brotes, riesgos ambientales, casos especiales, muertes).',
    },
    {
      termino: 'Vacunación de mascotas / Control de vectores',
      significado:
        'acciones preventivas para reducir el riesgo de transmisión de enfermedades desde animales a seres humanos.',
    },
    {
      termino: 'Verificación y atención inmediata',
      significado:
        'proceso de confirmación y adopción rápida de medidas para controlar o mitigar el riesgo reportado, según protocolos de salud pública.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'enfermedades transmitidas de animales a humanos, como la rabia o las mordeduras de serpiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acuña M, R. (2015). Diarrea aguda. Revista Médica Clínica Las Condes, 26(5), 676–686.',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1. Sistema de alerta temprana: identificación del riesgo en salud pública.',
    },
    {
      referencia:
        'Instituto nacional de salud (2023). Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1.2. Sistema de alerta temprana: vigilancia basada en comunidad-fases de implementación.',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2025). Lineamiento Nacional de Vigilancia Basada en la Comunidad.',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
    {
      referencia: 'HInes, D. (2022). Enfoque sindrómico: fiebre e ictericia.',
    },
    {
      referencia:
        'Kang, JH. (2015). Enfermedad febril con erupciones cutáneas. IC Infection and Chomoteraphy, 47(3), 155–166.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Abordaje del niño o niña con desnutrición aguda.',
      link:
        'https://herramientaclinicaprimerainfancia.minsalud.gov.co/modulo-8/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Infecciones Respiratorias Agudas (IRA).',
      link:
        'https://www.minsalud.gov.co/salud/Paginas/Infecciones-Respiratorias-Agudas-(IRA).aspx',
    },
    {
      referencia:
        'National Institute of Neurological Disorders and Stroke. (2025). Convulsiones Febriles.',
    },
    {
      referencia: 'Organización Panamericana de la Salud. (2023). Malaria.',
      link: 'https://www.paho.org/es/temas/malaria',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2023). Salud Materna',
      link: 'https://www.paho.org/es/temas/salud-materna',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2023). Tuberculosis.',
      link: 'https://www.paho.org/es/temas/tuberculosis',
    },
    {
      referencia:
        'Rivero Calle, I., Dacosta, Isabel, A., Cervantes Hernández, E., Calle, R. I. & Hernández Síndrome, C. E. (2023). Síndrome febril prolongado y fiebre de origen desconocido.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Cataño Mora',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Luz Dary Quintero Torres',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Gina M. Morales S',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Fabian Nicolas Moreno Anzola',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diego Felipe López Ávila',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diana Alexandra Moreno Santamaria',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'María Elena Tamayo Bustamante',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

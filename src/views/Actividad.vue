<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Identificación de situaciones de interés en salud pública',
      titulo: 'Cuestionario',
      introduccion:
        '<b>objetivo:</b> reconocer las situaciones de interés en salud pública mediante la identificación de diversas situaciones presentadas, con el fin de fortalecer las capacidades de vigilancia comunitaria, detección temprana y respuesta oportuna ante eventos que afecten la salud.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la Vigilancia Basada En Comunidad en salud pública?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevenir exclusivamente enfermedades zoonóticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar atención médica domiciliaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Detectar señales de situaciones de interés en salud pública.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir los servicios de salud hospitalarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'La mordedura de serpiente en la comunidad debe considerarse:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una situación ambiental leve.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una señal de zoonosis que requiere atención inmediata.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un problema social sin repercusiones en salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un caso no reportable en vigilancia comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Cuando una persona presenta fiebre con dificultad respiratoria y tos por más de 15 días, ¿qué enfermedad debe sospecharse prioritariamente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dengue.', esCorrecta: false },
            { id: 'b', texto: 'Tuberculosis pulmonar.', esCorrecta: true },
            { id: 'c', texto: 'Varicela.', esCorrecta: false },
            { id: 'd', texto: 'Rabia', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué acción individual se recomienda frente a los riesgos ambientales como agua contaminada o humo tóxico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardar silencio para evitar alarmar a vecinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Esperar confirmación hospitalaria antes de reportar..',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Informarse sobre riesgos y seguir las recomendaciones sanitarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar basuras sin reportar a la autoridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Una muerte inesperada en la comunidad debe ser reportada inmediatamente porque:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puede estar asociada a brotes o emergencias sanitarias.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo afecta a la familia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Generalmente no tiene relevancia epidemiológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere acción colectiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La siguiente situación de interés en salud pública: “Mordedura de perro sin vacuna antirrábica”, corresponde a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo de muerte materna y perinatal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Activación de programas de atención nutricional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo de enfermedades diarreicas y brotes comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Señal de zoonosis que requiere aplicación de vacunas o sueros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La siguiente situación de interés en salud pública: “Fiebre con brotes en la piel”, corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activación de programas de atención nutricional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo de enfermedades diarreicas y brotes comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posible brote de sarampión o rubéola.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Riesgo de enfermedades diarreicas y brotes comunitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La siguiente situación de interés en salud pública: “Complicaciones en el embarazo”, corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activación de programas de atención nutricional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señal de zoonosis que requiere aplicación de vacunas o sueros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posible brote de sarampión o rubéola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgo de muerte materna y perinatal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La siguiente situación de interés en salud pública: “Agua contaminada”, corresponde a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo de muerte materna y perinatal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo de enfermedades diarreicas y brotes comunitarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Señal de zoonosis que requiere aplicación de vacunas o sueros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Posible brote de sarampión o rubéola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La siguiente situación de interés en salud pública: “Niños menores de 5 años con signos de desnutrición”, corresponde a:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo de enfermedades diarreicas y brotes comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señal de zoonosis que requiere aplicación de vacunas o sueros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Activación de programas de atención nutricional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Riesgo de muerte materna y perinatal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'De acuerdo las situaciones de interés en salud pública, ¿a qué corresponde los vertederos de basura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Síndromes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Factores potencialmente relacionados.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Conglomerados.', esCorrecta: false },
            { id: 'd', texto: 'Casos específicos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Las acciones colectivas para controlar conglomerados incluyen campañas de educación, comunicación de riesgos y cierre temporal de lugares afectados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Una muerte en la comunidad necesariamente indica un brote infeccioso.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Los síndromes febriles no requieren reporte inmediato si el paciente mejora con automedicación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La desnutrición aguda en menores de 5 años puede identificarse por bajo peso para la talla, presencia de edema y pérdida de masa muscular.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El reporte temprano de enfermedades y muertes en animales puede ayudar a prevenir brotes de enfermedades zoonóticas en humanos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Los factores potencialmente relacionados con la salud pública pueden incluir contaminación ambiental, factores sociales y conductas individuales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las acciones individuales ante síndromes febriles incluyen evitar la consulta médica hasta tener complicaciones.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Solo el personal de salud puede reportar conglomerados o brotes a las autoridades sanitarias.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El análisis de muertes en comunidad ayuda a identificar emergencias sanitarias y a proteger a la población.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Situaciones de interés en salud pública

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Cuando se hace referencia a una situación de interés en salud pública, esta se considera como el conjunto de potenciales eventos o factores relacionados con dichos hechos. La Estrategia Vigilancia Basada en Comunidad (VBC), tiene por objeto detectar señales de diferentes situaciones de interés en salud pública (Figura 1); cada una de estas circunstancias necesita de una verificación y una respuesta inicial (Instituto Nacional de Salud, 2023).

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Situaciones de interés en salud pública</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-1-1vv.svg', alt='Figura 1 que representa la estructura procedimental de la Estrategia Vigilancia Basada en Comunidad (VBC); la cual parte de unos factores y finaliza con la ruta de atención integral, teniendo en cuenta que se lleva a cabo una serie de verificaciones y situaciones presentes.')
              figcaption Fuente: Instituto Nacional de Salud (2025)
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-1-2vv.svg', alt='Figura 1 que representa la estructura procedimental de la Estrategia Vigilancia Basada en Comunidad (VBC); la cual parte de unos factores y finaliza con la ruta de atención integral, teniendo en cuenta que se lleva a cabo una serie de verificaciones y situaciones presentes.')

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Los factores ambientales, fenómenos naturales y sociales 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.order-2
        .tarjeta.tarjeta--BGC01.p-4.mb-4
          p.mb-0 Estos factores y fenómenos corresponden a situaciones que se relacionan con el ambiente (contaminación y exposición ambiental en aire, suelo, agua, clima y antrópico) contribuyendo a la generación de casos, eventos y situaciones de interés en salud pública (Figura 2).
        p.mb-0 Las situaciones como la contaminación del agua, el manejo inadecuado de basuras, la presencia de humo tóxico o la exposición a químicos peligrosos, representan factores de riesgo para la salud colectiva. Estos problemas ambientales pueden desencadenar brotes de enfermedades diarreicas, respiratorias o intoxicaciones. El rol comunitario consiste en reportar oportunamente estos eventos para que las autoridades implementen medidas correctivas (Instituto Nacional de Salud, 2023).
      .col-lg-5.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img-03.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Factores ambientales, fenómenos naturales y sociales</em>    
        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/figura-2-1vv.svg', alt='Figura 2 que relaciona un proceso conceptual que explica los principales factores ambientales que afectan la salud, en los cuales se destaca el agua, aire, clima, suelo y lo que cada uno representa y las acciones que se desprenden de estos.')
              figcaption Fuente: Instituto Nacional de Salud. 2025
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexos_Factores_ambientales_fenómenos_naturales_y_sociales.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo1.] Factores ambientales, fenómenos naturales y sociales

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Acciones individuales y colectivas 

    p.mb-4 Las acciones para la gestión de los factores ambientales, fenómenos naturales y sociales en salud pública, se dividen tanto en el plano individual como colectivo y constituyen estrategias complementarias para reducir riesgos y mejorar el bienestar poblacional. Dentro de estas acciones se destaca lo siguiente: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Individuales")
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img-04.png', alt="Imagen decorativa")
        .col-lg-5.order-lg-1.order-2
          p.mb-0 Incluye informarse sobre riesgos ambientales y seguir recomendaciones de las autoridades sanitarias, respecto a exposición a contaminantes, agua potable y alertas epidemiológicas.
      .row.justify-content-center(titulo="Colectivas")
        .col-lg-5.order-lg-1.order-2
          p.mb-0 Sugieren monitorear y evaluar riesgos ambientales, mediante sistemas de vigilancia, análisis de datos y generación de alertas tempranas comunitarias, consideradas insumos para el desarrollo de políticas públicas intersectoriales que abordan los determinantes sociales, ambientales y económicos de la salud (Instituto Nacional de Salud, 2025).
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img-05.png', alt="Imagen decorativa")
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Situaciones en animales

    p Estas situaciones hacen referencia a los casos individuales y colectivos de enfermedades o muertes en animales de compañía, silvestres y de producción (Figura 3). La muerte o enfermedad de estos animales puede ser una señal de factores que pueden influir en la salud de los humanos. Por otro lado, las enfermedades transmitidas por animales favorecen la aparición de eventos zoonóticos como es el caso de la mordedura de perros, el contacto con murciélagos, accidentes ofídicos, mordedura de arañas, picadura de alacranes o escorpiones y contacto con animales ponzoñosos los cuales requieren atención inmediata.
    p.mb-4 Por ejemplo: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-06.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4 
              h4 Perros
              p La rabia es una enfermedad mortal que transmiten los perros que no han sido vacunados contra la rabia y esta puede ser transmitida a los seres humanos. 
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-07.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Serpientes
              p En el caso de la mordedura de serpiente, este accidente ofídico, puede causar complicaciones graves; el reporte temprano permite garantizar la aplicación de vacunas, sueros antiofídicos y medidas de prevención en la comunidad.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <em>Situaciones con animales</em>    
        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/figura-3-1vv.svg', alt='Figura 3 que relaciona situaciones en animales relacionadas con riesgos para la salud. Incluye animales de compañía, animales de producción y animales silvestres; también resalta acciones individuales y colectivas para prevenir y responder a estos eventos.')
              figcaption Fuente: Instituto Nacional de Salud (2025)
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexos_Situaciones_con_animales.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo2.] Situaciones con animales

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Acciones individuales y colectivas

    .row
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-08.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") La promoción de acciones individuales corresponde a vacunar mascotas, evitar el contacto con animales enfermos, reportar animales muertos o enfermos, así como las prácticas de higiene al manipular animales. De igual manera, las acciones colectivas son vigilancia veterinaria, campañas de vacunación, control de vectores, coordinación entre autoridades humanas y veterinarias, educación comunitaria, monitoreo y reporte de brotes (Instituto Nacional de Salud, 2023).

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3. Síndromes febriles

    p.mb-4 Los síndromes son un conjunto de síntomas (o signos) que pueden constituir una señal de un evento de interés en salud pública y se representan en la siguiente figura:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <em>Síndromes febriles</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-4-1vv.svg', alt='Figura 4 que relaciona cómo, a partir de un síndrome febril con diferentes manifestaciones (respiratorias, cutáneas, digestivas, neurológicas o con ictericia), se aplican acciones individuales: atención médica, aislamiento y notificación y acciones colectivas: vigilancia epidemiológica, prevención, control y vacunación.')
              figcaption Fuente: Rivero, Dacosta, Cervantes & Hernández (2023).
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-4-2vv.svg', alt='Figura 4 que relaciona cómo, a partir de un síndrome febril con diferentes manifestaciones (respiratorias, cutáneas, digestivas, neurológicas o con ictericia), se aplican acciones individuales: atención médica, aislamiento y notificación y acciones colectivas: vigilancia epidemiológica, prevención, control y vacunación.')

    p.mb-4 Basado en lo anterior, se explica cada uno de los tipos de fiebres correspondientes a los síndromes febriles, los cuales ayudan a orientar el diagnóstico de enfermedades infecciosas o de interés en salud pública: 

    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Fiebre con dificultad respiratoria y tos de más de 15 días
              p.mb-0(style="color:#000 !important") Esta situación se presenta cuando una persona experimenta fiebre acompañada de tos que se prolonga por más de 15 días, sumada a dificultad para respirar; este cuadro clínico puede estar asociado con enfermedades como tuberculosis pulmonar e infecciones respiratorias graves o COVID-19. En el contexto comunitario el reporte oportuno permite canalizar rápidamente al paciente hacia servicios médicos especializados, evitando complicaciones graves y reduciendo el riesgo de transmisión de la enfermedad a otras personas o hasta la muerte. (Ministerio de Salud y Protección Social, 2025; Organización Panamericana de la Salud, 2023).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema1/img-09.svg', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Fiebre con brotes en la piel
              p.mb-0(style="color:#000 !important") Es la fiebre acompañada de lesiones o manchas en la piel, conocidas como exantemas (cambio de color e inflamación de la piel), es un signo de alerta característico de enfermedades como sarampión, rubéola, varicela, chikungunya o dengue. Estas enfermedades, en especial el sarampión y la rubéola, son relevantes para la vigilancia en salud pública, debido a la capacidad de generar brotes explosivos en comunidades no vacunadas. El reporte inmediato de un caso sospechoso permite activar cercos epidemiológicos, jornadas de vacunación y acciones de prevención en el territorio. (Kang, 2015).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-10.svg', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Fiebre con diarrea
              p.mb-0(style="color:#000 !important") Es cuando una persona presenta fiebre acompañada de diarrea; se trata de una situación de interés en salud pública, que puede estar relacionada con infecciones gastrointestinales, consumo de agua o alimentos contaminados, cólera u otras enfermedades diarreicas aguda. El reporte desde la comunidad aporta a las autoridades para investigar la fuente de contaminación y prevenir brotes, especialmente en contextos de hacinamiento o con deficiencias en el acceso al agua potable. (Acuña, 2015).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-11.svg', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Fiebre con convulsiones o problemas neurológicos
              p.mb-0(style="color:#000 !important") Es la fiebre acompañada de convulsiones, somnolencia excesiva, rigidez de cuello o alteraciones neurológicas; puede ser un signo de enfermedades graves como meningitis, encefalitis o malaria cerebral. Estos cuadros requieren atención inmediata en un centro hospitalario, ya que pueden poner en riesgo la vida del paciente. El papel de los vigías y gestores comunitarios es vital para reconocer y notificar este tipo de síntomas sin demora. (National Institute of Neurological Disorders and Stroke, 2025).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-12.svg', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Fiebre con ictericia
              p.mb-0(style="color:#000 !important") Condición clínica en la que una persona presenta fiebre acompañada de ictericia; es decir, una coloración amarilla de la piel y las mucosas, debido a la acumulación de bilirrubina en la sangre. Esta combinación de síntomas suele indicar daño hepático o una enfermedad infecciosa que afecta al hígado y puede asociarse a enfermedades como la fiebre amarilla, la hepatitis viral, la malaria, la leptospirosis o la fiebre tifoidea. (HInes, 2022). 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-13.svg', alt='Imagen decorativa')
          
    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Acciones individuales y colectivas

    p.mb-4 Basado en los síndromes febriles, las principales acciones individuales y colectivas a tomar constan de: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-4
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-14.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Acciones individuales
            p.mb-0 Buscar atención médica la persona afectada, evitar la automedicación y aislarse si hay sospecha de enfermedad contagiosa; y proteger a terceros. 
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-15.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Acciones colectivas
            p.mb-0 Notificar los casos sospechosos, realizar la vigilancia epidemiológica, implementar campañas de prevención, protocolos de aislamiento y control, y vacunación donde se requiera. (Instituto Nacional de Salud, 2023)

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4. Casos específicos

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-16.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Esta situación corresponde a los sucesos clínicos particulares de relevancia por su impacto social o clínico, necesidad de intervención o vigilancia a las personas que cumplen con la definición de caso probable o sospechoso de un evento de interés en salud pública. Para la identificación de estos casos, los vigías y gestores comunitarios requieren un mayor entrenamiento; sin embargo, debido a la presentación de casos en sus comunidades ellos aprenden a identificarlos; tal como se representa en la siguiente figura:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <em>Casos específicos</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-5-1vv.svg', alt='Figura 5 que relaciona un esquema que representa casos específicos en salud pública, como desnutrición, COVID-19, complicaciones en el embarazo y malaria. A partir de estos, se muestran intervenciones individuales: acceso a servicios de salud, cumplimiento de tratamientos, autocuidado y prácticas preventivas; así como acciones colectivas enfocadas en la atención oportuna, educación en hábitos protectores, control prenatal, uso de toldillos, control de mosquitos, higiene y aislamiento según el caso.')
              figcaption Fuente: Instituto Nacional de Salud (2025)
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-5-2vv.svg', alt='Figura 5 que relaciona un esquema que representa casos específicos en salud pública, como desnutrición, COVID-19, complicaciones en el embarazo y malaria. A partir de estos, se muestran intervenciones individuales: acceso a servicios de salud, cumplimiento de tratamientos, autocuidado y prácticas preventivas; así como acciones colectivas enfocadas en la atención oportuna, educación en hábitos protectores, control prenatal, uso de toldillos, control de mosquitos, higiene y aislamiento según el caso.')

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Complicaciones en el embarazo

    p.mb-4 Las mujeres embarazadas constituyen una población prioritaria en salud pública, debido a que presentan mayor vulnerabilidad al impacto que cualquier complicación puede tener, tanto en su salud como en la del recién nacido. Manifestaciones como sangrado vaginal, fiebre persistente, dolor abdominal intenso, convulsiones, hipertensión, pérdida de líquido amniótico o disminución de los movimientos fetales, son señales de alarma que requieren atención médica inmediata.

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-17.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/img-18.svg' alt="Imagen decorativa")
        p.mb-0 La detección temprana de estas situaciones en la comunidad es esencial para garantizar la remisión oportuna a los servicios de salud y activar protocolos de emergencia obstétrica. Una respuesta rápida puede prevenir desenlaces graves como hemorragias, infecciones, eclampsia, parto prematuro o muerte materna y perinatal. Además, la vigilancia comunitaria favorece la promoción de controles prenatales regulares, vacunación, suplementación con micronutrientes, educación en signos de alarma y fortalecimiento del apoyo familiar y social, durante la gestación. Estas acciones integrales no solo reducen la mortalidad, sino que también contribuyen al bienestar de la madre, al desarrollo saludable del bebé y al cumplimiento de los objetivos de salud materna e infantil en la comunidad.(Organización Mundial de la Salud, 2023).

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Desnutrición aguda en menores de 5 años

    p La desnutrición aguda en la primera infancia se manifiesta a través de signos clínicos como extrema delgadez, pérdida de masa muscular, edema en pies y manos, cabello frágil o quebradizo y piel seca. Esta condición refleja un desequilibrio nutricional severo en un corto periodo de tiempo y constituye una de las problemáticas más graves en salud pública, ya que debilita las defensas del organismo, aumenta el riesgo de infecciones y compromete el crecimiento físico y el desarrollo cognitivo del menor.
    p.mb-4 Desde el punto de vista antropométrico, la desnutrición puede clasificarse como: 

    .fondo2-t2.px-md-5.px-4.py-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img-19.svg' alt="Imagen decorativa")
            .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
              h4.text-center.mt-5(style="color:#12263F") Bajo peso para la talla
              p.text-center.mb-0(style="color:#12263F") Desnutrición aguda.
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img-20.svg' alt="Imagen decorativa")
            .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
              h4.text-center.mt-5(style="color:#12263F") Bajo peso para la edad
              p.text-center.mb-0(style="color:#12263F") Desnutrición global.
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img-21.svg' alt="Imagen decorativa")
            .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
              h4.text-center.mt-5(style="color:#12263F") Talla baja para la edad
              p.text-center.mb-0(style="color:#12263F") Retraso en el crecimiento.

      .row.justify-content-center.mb-4
        .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img-22.png', alt='Imagen decorativa')
        .col-lg-9       
          p La desnutrición en los menores de 5 años tiene efectos inmediatos y a largo plazo que comprometen no solo la salud individual, sino también el desarrollo social y económico de la comunidad. Entre los principales impactos se encuentran: 
          ul.lista-ul--color
            li.d-flex.align-items-start
              i.fas.fa-user
              | Mayor susceptibilidad a enfermedades, ya que el sistema inmune se encuentra debilitado. 
            li.d-flex.align-items-start
              i.fas.fa-user
              | Limitaciones en el aprendizaje y menor capacidad de rendimiento escolar y laboral en etapas posteriores de la vida.
            li.d-flex.align-items-start
              i.fas.fa-user
              | En la niñez temprana, los efectos son más severos porque los órganos vitales como el corazón, el cerebro, los músculos y los huesos están en pleno desarrollo; las infecciones gastrointestinales y respiratorias son más frecuentes y graves; el cerebro puede presentar daños irreversibles que afectan la memoria, el lenguaje y el aprendizaje; y el crecimiento se ve restringido, lo que ocasiona baja talla en comparación con otros niños de la misma edad.

    p.mb-4 El reporte oportuno de estos casos es fundamental para activar programas de atención nutricional, suplementación alimentaria y seguimiento médico especializado, garantizando una intervención temprana que puede salvar vidas y evitar secuelas permanentes.(Ministerio de Salud y Protección Social, 2025).

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Malaria

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema1/img-23.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") La malaria o paludismo es una enfermedad transmitida por la picadura de mosquitos del género Anopheles, infectados con parásitos del género Plasmodium (Figura 6). Su transmisión es más frecuente en zonas tropicales y rurales donde existen condiciones ambientales que favorecen la proliferación del vector, como aguas estancadas y climas cálidos. En áreas endémicas, todo caso de fiebre sin causa aparente debe considerarse sospechoso de malaria, ya que la enfermedad puede iniciar con síntomas inespecíficos como escalofríos, sudoración y malestar general. 

        p El diagnóstico oportuno, mediante pruebas rápidas o gota gruesa y el inicio inmediato del tratamiento específico, son fundamentales para evitar complicaciones graves como anemia severa, insuficiencia multiorgánica o malaria cerebral, que pueden poner en riesgo la vida.

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-primario.p-3(data-aos="fade-right")
          p.mb-0 La participación comunitaria es decisiva en la vigilancia de la malaria; reconocer y reportar los síntomas febriles de manera temprana, permite activar la búsqueda de casos, interrumpir la cadena de transmisión y reducir la mortalidad. Además, la comunidad puede contribuir con acciones de prevención como el uso de toldillo o mosquiteros tratados con insecticida, eliminación de criaderos de mosquitos, acceso oportuno a servicios de salud y promoción de la educación en hábitos protectores. La lucha contra la malaria no depende solo del sistema sanitario, sino también del compromiso activo de la población. La identificación temprana de casos y la adopción de medidas de prevención fortalecen los esfuerzos hacia el control, eliminación y eventual erradicación de esta enfermedad en los territorios más afectados. (Organización Panamericana de la Salud, 2023)  
      .col-lg-5.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-24.png' alt="Imagen decorativa")

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <em>Proceso de la malaria</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-6-1vv.svg', alt='La figura 6 muestra el ciclo de transmisión de la malaria, que inicia cuando un mosquito infectado pica a una persona y transmite el parásito, el cual se multiplica primero en el hígado y luego en los glóbulos rojos. Posteriormente, otro mosquito que pica a esta persona puede ingerir el parásito y transmitir la enfermedad a un nuevo individuo mediante una siguiente picadura.')
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-6-2vv.svg', alt='La figura 6 muestra el ciclo de transmisión de la malaria, que inicia cuando un mosquito infectado pica a una persona y transmite el parásito, el cual se multiplica primero en el hígado y luego en los glóbulos rojos. Posteriormente, otro mosquito que pica a esta persona puede ingerir el parásito y transmitir la enfermedad a un nuevo individuo mediante una siguiente picadura.')

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Acciones individuales y colectivas

    p.mb-4 De acuerdo con lo establecido con el Instituto Nacional de salud (2025), se dan de la siguiente manera: 

    .row.justify-content-center
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-in")
          .row.mb-0(numero="1" titulo="Acciones individuales")(data-aos="fade-left")
            .col-12
              p Corresponden al acceso a servicios de salud, cumplimiento de tratamientos, autocuidado, prácticas preventivas como uso de mosquiteros tratados con insecticida. 
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-25.png', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Acciones colectivas")
            .col-12
              p Corresponden a la educación comunitaria (información que corresponde a la prevención, síntomas e importancia de completar los tratamientos), asimismo, el control de vectores (eliminación de aguas estancadas, uso de mosquiteros, repelentes y fumigación) acceso a servicios de salud, cumplimiento de tratamientos) y la vigilancia y control de casos (detección temprana, tratamiento completo y seguimiento).
              figure
                img(src='@/assets/curso/temas/tema1/img-26.png', alt='Imagen decorativa')

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5. Muertes en comunidad y muertes imprevistas

    p.mb-4 Al respecto, se tienen las siguientes apreciaciones, según el Instituto nacional de Salud (2023): 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-29.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4 
              h4 Muertes en comunidad
              p Son las defunciones que no se presentan en una institución de salud y no recibieron una atención, las cuales podrían tener una causa debido a una situación de interés en salud pública. 
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-30.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Muertes imprevistas
              p Estas muertes, en especial cuando se presentan en personas jóvenes, previamente sanas o en un número mayor a lo habitual, constituyen una situación de interés de gran relevancia en salud pública. 

    p.mb-4 Estas defunciones pueden estar vinculadas a brotes de enfermedades infecciosas, intoxicaciones masivas, desastres ambientales, violencia o emergencias sanitarias de origen desconocido. Su identificación temprana es esencial para evitar la propagación de riesgos.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-37.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El reporte inmediato desde la comunidad permite que las autoridades sanitarias activen los protocolos de vigilancia, realicen investigaciones epidemiológicas, recojan muestras biológicas, identifiquen factores de riesgo y establezcan medidas de control. Este proceso no solo busca esclarecer la causa de las muertes, sino también proteger a la población expuesta y prevenir nuevos casos. Además, la vigilancia de estas situaciones fortalece la capacidad de respuesta del sistema de salud, frente a las emergencias, promueve la coordinación intersectorial y aporta información clave para orientar campañas de prevención y educación comunitaria. Por ello, cada caso debe ser considerado una señal de alerta prioritaria, cuyo reporte oportuno puede marcar la diferencia entre contener un evento a tiempo o enfrentar una crisis de mayor magnitud. (Instituto Nacional de Salud, 2023).

    .row.mb-4.ms-0
      .col-auto.bg-titulo1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Acciones individuales y colectivas
    
    p.mb-4 Sobre este tipo de muertes se explica su respectivo accionar: 

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-4
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-32.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Acciones individuales
            p.mb-0 Las actividades individuales para esta situación son notificar el deceso a las autoridades, colaborar con el manejo adecuado (evitar manipulación) y apoyo a familiares. 
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-33.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Acciones colectivas
            p.mb-0 En las acciones colectivas se requiere la implementación de protocolos de registro y vigilancia, intervención policial o forense si procede, análisis para detectar causas prevenibles, programas de promoción de la salud y prevención de muerte evitable.

    p.mb-4.text-center En la siguiente figura se detallan dichas acciones frente a este tipo de muertes:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <em>Muertes en comunidad e imprevistas</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-7-1vv.svg', alt='Figura 7 que menciona situaciones de muertes imprevistas en la comunidad, como intoxicaciones, desastres naturales o muertes súbitas sin causa aparente y relaciona las acciones individuales y colectivas que se deben tomar frente a estos decesos.')
              figcaption Fuente: Instituto Nacional de Salud (2025)
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-7-2vv.svg', alt='Figura 7 que menciona situaciones de muertes imprevistas en la comunidad, como intoxicaciones, desastres naturales o muertes súbitas sin causa aparente y relaciona las acciones individuales y colectivas que se deben tomar frente a estos decesos.')

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6. Conglomerados

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-34.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Los conglomerados son los grupos de casos o síndromes similares, que ocurren en el mismo lugar (cuya percepción de la comunidad es de comportamiento atípico o inusual) y tiempo (días y/o semanas). La identificación de estos pueden ser la detección de brotes que requieren de un despliegue inicial y de una respuesta integrada por los equipos de vigilancia y los servicios de salud (ver ilustración 15).

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <em>Conglomerados</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-8-1vv.svg', alt='Figura 8 que relaciona las señales de alerta en salud pública, como aumento de mosquitos, casos febriles o respiratorios, brotes diarreicos y muertes inusuales en personas o animales. Representa conglomerados asociados a enfermedades transmitidas por vectores, intoxicaciones y otros síndromes, junto con las acciones individuales y colectivas que se deben tomar frente a este problema.')
              figcaption Fuente: Instituto Nacional de Salud (2025)
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-8-2vv.svg', alt='Figura 8 que relaciona las señales de alerta en salud pública, como aumento de mosquitos, casos febriles o respiratorios, brotes diarreicos y muertes inusuales en personas o animales. Representa conglomerados asociados a enfermedades transmitidas por vectores, intoxicaciones y otros síndromes, junto con las acciones individuales y colectivas que se deben tomar frente a este problema.')

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.7. Otras enfermedades

    p.mb-4 Además de la malaria, existen otras enfermedades transmitidas por vectores que afectan a las comunidades, como el dengue (Figura 9), zika, chikungunya, fiebre amarilla y leishmaniasis. El aumento de mosquitos o la aparición de múltiples casos febriles en un corto tiempo son señales de alerta que deben reportarse. Las medidas de control comunitario incluyen la eliminación de criaderos, el uso de mosquiteros e insecticidas y la educación sobre medidas preventivas.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span <em>Dengue</em>    

        .row.justify-content-center
          .col-lg-12.col-10.mb-4
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-9-1vv.svg', alt='Figura 9 que presenta información sobre el dengue, destacando sus principales síntomas, junto con medidas de prevención orientadas a eliminar criaderos de mosquitos, lavar y cepillar albercas y lavaderos, eliminar recipientes que acumulen agua y cambiar con frecuencia el agua de floreros y bebederos.')
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-9-2vv.svg', alt='Figura 9 que presenta información sobre el dengue, destacando sus principales síntomas, junto con medidas de prevención orientadas a eliminar criaderos de mosquitos, lavar y cepillar albercas y lavaderos, eliminar recipientes que acumulen agua y cambiar con frecuencia el agua de floreros y bebederos.')

    Separador

    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.8. Acciones individuales y colectivas

    p.mb-4 De acuerdo a lo planteado por el Instituto Nacional de Salud (2023), se establecen como acciones las siguientes:  

    .row.justify-content-center.mb-4
      .col-lg-10
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Acciones individuales
              p.mb-0 Dentro de las acciones individuales están el reporte de síntomas, colaborar con las investigaciones sanitarias, acatar medidas de control y prevención.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema1/img-34.png', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema1/img-35.png', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Acciones colectivas
              p.mb-0 En estas acciones es necesario realizar la investigación epidemiológica, hacer una intervención rápida, en caso de ser necesario hacer cierres temporales de centros (escuelas, fábricas), hacer la comunicación de los riesgos y educar de forma masiva, con el fin de contener el brote.

    p.mb-4 Para complementar la anterior información y basado en lo expuesto por el Instituto Nacional de Salud (2025), a continuación, se da una clasificación del tipo de enfermedades trasmitidas por vectores, los síntomas por cada patología, las complicaciones presentadas y las acciones a desarrollar por la comunidad para la prevención de la proliferación de vectores y aumento de casos en la población: 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfograficaB.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/figura-10-1v.svg', alt='Imagen decorativa')
          div(x="7%" y="43.5%" numero="+")
            h4 Leishmaniasis
            p.mb-0 #[b Síntomas principales]
            p Lesiones en piel que no cicatrizan (cutánea), fiebre prolongada, pérdida de peso, agrandamiento del bazo e hígado (visceral).
            p.mb-0 #[b Complicaciones]
            p Desfiguración permanente, daño orgánico severo, muerte en casos viscerales no tratados.
            p.mb-0 #[b Acciones comunitarias de prevención]
            p Uso de mosquiteros, control de reservorios animales, saneamiento ambiental, educación comunitaria.
          div(x="12.5%" y="82.5%" numero="+")
            h4 Fiebre amarilla 
            p.mb-0 #[b Síntomas principales]
            p Fiebre, escalofríos, dolor de cabeza, dolor muscular, ictericia, vómitos.
            p.mb-0 #[b Complicaciones]
            p Falla hepática, hemorragias, muerte.	
            p.mb-0 #[b Acciones comunitarias de prevención]
            p Vacunación preventiva, control de Aedes aegypti, uso de protección personal contra mosquitos.
          div(x="77.5%" y="13%" numero="+")
            h4 Dengue
            p.mb-0 #[b Síntomas principales]
            p Fiebre alta, dolor de cabeza intenso, dolor detrás de los ojos, dolores musculares y articulares, erupción cutánea.
            p.mb-0 #[b Complicaciones]
            p Dengue grave con sangrado, #[em shock] y falla multiorgánica.		
            p.mb-0 #[b Acciones comunitarias de prevención]
            p Eliminar criaderos de #[em Aedes aegypty], uso de repelentes, protección con ropa adecuada, educación comunitaria.
          div(x="93%" y="43%" numero="+")
            h4 Zika
            p.mb-0 #[b Síntomas principales]
            p Fiebre leve, sarpullido, conjuntivitis, dolor articular, malestar general.
            p.mb-0 #[b Complicaciones]
            p Complicaciones neurológicas (síndrome de Guillain-Barré), malformaciones congénitas en hijos de madres infectadas.		
            p.mb-0 #[b Acciones comunitarias de prevención]
            p Control del mosquito #[em Aedes aegypti], protección especial en embarazadas, eliminación de aguas estancadas.
          div(x="88.5%" y="82%" numero="+")
            h4 Chikungunya
            p.mb-0 #[b Síntomas principales]
            p Fiebre alta, dolor intenso en articulaciones, erupción cutánea, dolor muscular.
            p.mb-0 #[b Complicaciones]
            p Dolor articular crónico, discapacidad funcional prolongada.	
            p.mb-0 #[b Acciones comunitarias de prevención]
            p Reducción de criaderos de mosquitos, uso de mosquiteros y repelentes, educación en salud.
        figure.movil
          img(src='@/assets/curso/temas/tema1/figura-10-2v.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Para finalizar, en la siguiente tabla se describe la situación de interés en salud pública reportada por los vigías y gestores comunitarios de la comunidad, los posibles eventos de interés en salud pública o enfermedades, así como los riesgos a los que se expone la población y acciones que se procura realizar para evitar la propagación de las enfermedades:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      span  #[i Listado de situaciones de interés en salud pública específicas para estar atentos y reportar]
    .tabla-a.color-acento-contenido.mb-5
      table
        caption Fuente: Instituto Nacional de Salud (2025)
        thead
          tr(data-aos="fade-right")
            th(style="width: 33.33%; background-color: #30DF8E;") Situación para reportar
            th(style="width: 33.33%; background-color: #30DF8E;") Posibles patologías 
            th(style="width: 33.33%; background-color: #30DF8E;") Riesgos/Acciones necesarias
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Fiebre con dificultad para respirar y tos > 15 días]
            td(style="background-color: #F6F6F6;") Tuberculosis, infecciones respiratorias crónicas.
            td(style="background-color: #F6F6F6;") Riesgo de contagio en la comunidad. Se debe remitir a un servicio de salud para diagnóstico y tratamiento.
          tr(data-aos="fade-right")
            td.text-center #[b Fiebre con brotes en la piel]
            td Sarampión, rubéola, varicela u otras infecciones virales.
            td Alta propagación en niños y no vacunados. Requiere aislamiento del caso sospechoso y notificación inmediata.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Fiebre con diarrea]
            td(style="background-color: #F6F6F6;") Infecciones intestinales (virus, bacterias, parásitos). Agua o alimentos contaminados.
            td(style="background-color: #F6F6F6;") Riesgo de deshidratación, sobre todo en menores y adultos mayores. Se debe garantizar hidratación y atención médica rápida.
          tr(data-aos="fade-right")
            td.text-center #[b Fiebre con convulsiones o problemas neurológicos]
            td Meningitis, encefalitis, infecciones graves del sistema nervioso.
            td Riesgo de discapacidad o muerte. Atención hospitalaria inmediata y reporte urgente.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Complicaciones en mujeres embarazadas]
            td(style="background-color: #F6F6F6;") Sangrado, hipertensión, fiebre, infecciones o convulsiones.
            td(style="background-color: #F6F6F6;") Riesgo de muerte materna y perinatal. Se debe activar la ruta de atención obstétrica de urgencia.
          tr(data-aos="fade-right")
            td.text-center #[b Niños menores de 5 años con desnutrición aguda]
            td Falta de acceso a alimentos adecuados, enfermedades repetitivas.
            td Riesgo de muerte y retraso en el desarrollo. Reporte inmediato para intervención nutricional y médica.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Muertes inesperadas en la comunidad]
            td(style="background-color: #F6F6F6;") Brotes epidémicos, intoxicaciones, enfermedades desconocidas.
            td(style="background-color: #F6F6F6;") Riesgo de nuevos casos en la comunidad. Se debe investigar y notificar de inmediato.
          tr(data-aos="fade-right")
            td.text-center #[b Zoonosis: rabia y mordeduras de serpiente]
            td Mordedura de animales con rabia o serpientes venenosas.
            td Riesgo de muerte si no se aplica tratamiento o antídoto. Reportar y remitir al servicio de salud lo antes posible.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Malaria y otras enfermedades transmitidas por mosquitos]
            td(style="background-color: #F6F6F6;") Picadura de mosquitos #[em Anopheles] (malaria) o #[em Aedes aegypti] (dengue, zika, chikungunya).
            td(style="background-color: #F6F6F6;") Riesgo de brotes en zonas endémicas. Reporte inmediato y medidas comunitarias para eliminar criaderos.
          tr(data-aos="fade-right")
            td.text-center #[b Problemas ambientales (agua contaminada, humo, basuras)]
            td Falta de saneamiento, quemas, mala disposición de desechos.
            td Riesgo de diarrea, infecciones respiratorias, dengue y otras enfermedades. Reportar a autoridades para limpieza y control ambiental.

    .row.justify-content-center.mb-0
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-36.svg', alt='Imagen decorativa')
      .col-lg-7       
        .bloque-texto-c.color-secundario.p-4.h-100
          .bloque-texto-c__contenido.mt-4
            i.fas.fa-quote-left
            h4.mb-2 Cuando se identifica una situación de interés y se reporta, se está protegiendo a toda la comunidad y salvando vidas.
          i.fas.fa-quote-right.cierre-comilla


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

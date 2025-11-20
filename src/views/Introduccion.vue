<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4
        .col-12(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')

      p.mb-4 El presente componente formativo desarrolla en profundidad las diferentes categorías de eventos de interés en salud pública para la Vigilancia Basada en Comunidad (VBC), tales como factores potencialmente relacionados, situaciones en animales, síndromes febriles, casos específicos, muertes en comunidad e imprevistas y conglomerados. Cada una de estas situaciones exige de los miembros de la comunidad y de los equipos de salud una observación cuidadosa, el reporte temprano y la aplicación de acciones específicas, tanto individuales como colectivas para garantizar el control, seguridad y bienestar colectivo. De esta manera, se fortalece no solo la detección y el abordaje de eventos críticos, sino también la promoción de hábitos preventivos, la educación sanitaria y la solidaridad comunitaria.

      .row.justify-content-center.mb-4
        .col-xl-10
          .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/introduccion/img-02.svg', alt='').m-auto
            .col-xl
              p.mb-0 Implementar la VBC requiere instruir a los agentes comunitarios en la identificación de síntomas, factores ambientales y sociales, así como en la activación de rutas de atención y manejo preventivo. 

      p.mb-4.text-center Por todo anterior, es importante que acceda al siguiente video y de paso, se contextualice con la temática a tratar:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

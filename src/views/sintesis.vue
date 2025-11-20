<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda las principales situaciones de interés en salud pública que se vigilan, desde la vigilancia basada en comunidad, con el fin de lograr una detección temprana y una respuesta oportuna que contribuyan a reducir la morbilidad y mortalidad en la comunidad. Estas situaciones comprenden factores naturales, sociales y ambientales, como las condiciones del agua, aire, suelo y clima. También incluyen los eventos relacionados con animales, como el aumento de ejemplares enfermos o muertos, mordeduras, picaduras o contactos que puedan transmitir enfermedades zoonóticas o causar intoxicaciones.
    p.mb-4 Asimismo, se contempla la vigilancia de síndromes caracterizados por signos y síntomas de enfermedades febriles, respiratorias, diarreicas, neurológicas o acompañadas de ictericia. Se incluyen las muertes comunitarias inusuales o sin causa definida, los casos específicos de desnutrición, malaria, COVID-19 y las situaciones en las que se presentan conglomerados, entendidos como la aparición de varios casos de una enfermedad en un mismo lugar y periodo.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Vigilancia de situaciones de interés en salud pública, presenta el desarrollo de contenidos orientados a reconocer los eventos y condiciones que afectan la salud colectiva y que requieren vigilancia desde la comunidad. Se abordan los factores ambientales, naturales y sociales que inciden en la aparición de enfermedades, así como las situaciones relacionadas con animales que pueden transmitir zoonosis. Posteriormente, se analizan casos específicos como la desnutrición aguda, la malaria y las complicaciones en el embarazo, junto con las muertes imprevistas o sin causa aparente y los conglomerados de enfermedad en la comunidad. Finalmente, se resaltan las medidas de prevención, vigilancia y respuesta oportuna que fortalecen la capacidad comunitaria para proteger la salud pública. Toda la temática parte de las acciones individuales y colectivas que se deben aplicar frente a cada situación de salud pública presentada.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

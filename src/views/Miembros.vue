<template>
  <div class="miembros-container">
    <div class="instructores">
      <h2>Instructores</h2>
      <div class="instructores-container">
        <Avatar
          :nombre="masamichiNombre"
          :imagen="masamichiImagen"
          :texto="masamichiTexto"
        />
        <Avatar
          :nombre="satoruNombre"
          :imagen="satoruImagen"
          :texto="satoruTexto"
        />
        <Avatar
          :nombre="atsuyaNombre"
          :imagen="atsuyaImagen"
          :texto="atsuyaTexto"
        />
      </div>
    </div>
    <div class="doctores-asistentes">
      <h2>Doctores/Asistentes</h2>
      <div class="doctores-asistentes-container">
        <Avatar
          :nombre="shokoNombre"
          :imagen="shokoImagen"
          :texto="shokoTexto"
        />
        <Avatar
          :nombre="kiyotakaNombre"
          :imagen="kiyotakaImagen"
          :texto="kiyotakaTexto"
        />
        <Avatar
          :nombre="akariNombre"
          :imagen="akariImagen"
          :texto="akariTexto"
        />
      </div>
    </div>
    <div class="primer">
      <h2>Primer año</h2>
      <div class="primer-container">
        <Avatar
          :nombre="megumiNombre"
          :imagen="megumiImagen"
          :texto="megumiTexto"
        />
        <Avatar
          :nombre="nobaraNombre"
          :imagen="nobaraImagen"
          :texto="nobaraTexto"
        />
        <Avatar :nombre="yujiNombre" :imagen="yujiImagen" :texto="yujiTexto" />
      </div>
    </div>
    <div class="segundo">
      <h2>Segundo año</h2>
      <div class="segundo-container">
        <Avatar :nombre="yutaNombre" :imagen="yutaImagen" :texto="yutaTexto" />
        <Avatar :nombre="togeNombre" :imagen="togeImagen" :texto="togeTexto" />
        <Avatar
          :nombre="pandaNombre"
          :imagen="pandaImagen"
          :texto="pandaTexto"
        />
        <Avatar :nombre="makiNombre" :imagen="makiImagen" :texto="makiTexto" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/avatar/Avatar.vue";
export default {
  data() {
    return {
      masamichiNombre: "Masamichi Yaga",
      masamichiImagen: "Masamichi.png",
      masamichiTexto: "Entrevistador de todo aquel que aplique al colegio.",
      satoruNombre: "Satoru Gojo",
      satoruImagen: "Satoru.png",
      satoruTexto: "Único miembro y cabeza del Clan Gojo",
      atsuyaNombre: "Atsuya Kusakabe",
      atsuyaImagen: "Atsuya.png",
      atsuyaTexto: "Encargado de los alumnos de segundo año.",
      megumiNombre: "Megumi Fushiguro",
      megumiImagen: "Megumi.png",
      megumiTexto: "Posee talento de la Técnica de Sombras de Diez Tipos.",
      nobaraNombre: "Nobara Kugisaki",
      nobaraImagen: "Nobara.png",
      nobaraTexto: " Llega a Tokio con el fin de convertirse en una Chamán.",
      yujiNombre: "Yuji Itadori",
      yujiImagen: "Yuji.png",
      yujiTexto: "Recipiente del Rey de las Maldiciones, Sukuna.",
      shokoNombre: "Shoko Ieiri",
      shokoImagen: "Shoko.png",
      shokoTexto: "Es una chamán y doctora.",
      kiyotakaNombre: "Kiyotaka Ijichi",
      kiyotakaImagen: "Kiyotaka.jpeg",
      kiyotakaTexto: "Asistente auxiliar e informante de las misiones.",
      akariNombre: "Akari Nitta",
      akariImagen: "Akari.png",
      akariTexto: "Asistente auxiliar e informante de las misiones.",
      yutaNombre: "Yuta Okkotsu",
      yutaImagen: "Yuta.png",
      yutaTexto: "Es uno de los cuatro chamanes de Clase Especial.",
      togeNombre: "Toge Inumaki",
      togeImagen: "Toge.png",
      togeTexto: "Es usuario de la Técnica de Discurso Maldito.",
      pandaNombre: "Panda",
      pandaImagen: "Panda.png",
      pandaTexto:
        "Es un Cuerpo Maldito que posee emociones y consciencia propia.",
      makiNombre: "Maki Zenin",
      makiImagen: "Maki.png",
      makiTexto: "Forma parte de la familia principal del Clan Zenin",
    };
  },
  components: {
    Avatar,
  },
};
</script>

<style scoped>
.miembros-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: 10%;
}

.instructores,
.doctores-asistentes,
.primer,
.segundo {
  background-color: var(--primary-color);
  width: 90%;
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.instructores-container,
.doctores-asistentes-container,
.primer-container,
.segundo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .miembros-container {
    flex-direction: column;
    width: 100%;
  }

  .instructores-container,
  .doctores-asistentes-container,
  .primer-container,
  .segundo-container {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="nosotros-container">
    <h1>Conócenos</h1>
    <div class="nosotros-texto">
      <p>
        La escuela secundaria de Jujutsu de la prefectura de Tokio, está
        conformada por un gran campus compuesto de varios edificios con
        arquitectura tradicional japonesa. Tiene un patio abierto, muchas aulas,
        dormitorios y áreas de práctica para Jujutsu, todo el recinto es
        protegido por las barreras de Tengen. Los superiores de la escuela
        proporcionan mediación y leyes que deben de seguir todos los hechiceros
        de Jujutsu.
      </p>
      <div class="separador"></div>
      <p>
        Cada año el Colegio Técnico de Magia Metropolitana de Tokio y de Kioto
        llevan a cabo una competencia entre dos equipos compuestos por sus
        estudiantes de primer, segundo y tercer año, titulada Festival de
        Intercambio de Escuelas Hermanas
      </p>
    </div>
    <div class="info-nosotros">
      <div class="curriculum">
        <h1>Curriculum</h1>
        <p>
          El plan de estudios es de cuatro años. Las asignaciones regulares,
          como cualquier otro colegio tiene, se las enseñan las ventanas, y el
          entrenamiento respecto al Jujutsu, se lo enseñan otros chamanes, estos
          les enseñan información sobre la existencia de la energía maldita,
          como también el conocimiento para desarrollar una técnica maldita.<br /><br />
          A los estudiantes también se les enseña acerca del sistema de
          clasificación del poder del Jujutsu, y cómo se aplican tanto a las
          maldiciones como a los hechiceros de Jujutsu.<br /><br />
          Para el entrenamiento, los estudiantes a menudo son enviados a
          realizar misiones de campo para perfeccionar sus habilidades, todo
          esto bajo la supervisión de sus maestros o asistentes auxiliares.<br /><br />
          El maestro designado por un estudiante supervisa sus regimientos de
          entrenamiento, así como las misiones a las que serán asignados.
        </p>
      </div>
      <div class="uniformes">
        <h1>Uniformes</h1>
        <p>
          Los uniformes son proporcionados por el colegio al momento de la
          admisión de los estudiantes.<br /><br />
          Los diseños no difieren por temporada, o sea que siguen usando el
          mismo uniforme en invierno y en verano.<br /><br />
          Comúnmente el uniforme masculino consiste en chaquetas azules oscuras
          asimétricas con cuello alto y dos botones de remolino del lado
          izquierdo. El uniforme se completa con pantalones azules oscuros a
          juego.<br /><br />
          Comúnmente, el uniforme normal femenino consiste en la parte superior
          de una chaqueta con cuello alto similar al del uniforme masculino, y
          en la parte inferior, el uso de una falda.<br /><br />
          Los uniformes de los estudiantes pueden variar en diseño libremente,
          sin embargo son personalizados hasta cierto punto. Un ítem que es
          permanente en los uniformes son los botones con forma de remolino, y
          al menos, vestir una prenda de color negro.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nosotros-container {
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nosotros-texto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  width: 90%;
  margin: 0.5rem 0;
  padding: 1rem 0;
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.info-nosotros {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.curriculum,
.uniformes {
  background-color: var(--primary-color);
  width: 45%;
  margin: 0.5rem 0;
  padding: 1rem 0;
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  height: 60vh;
}

@media (max-width: 600px) {
  .nosotros-container {
    flex-direction: column;
  }

  .curriculum,
  .uniformes {
    width: 90%;
  }
}
</style>

<template>
  <div class="avatar">
    <p class="avatar-nombre">{{ nombre }}</p>
    <div class="avatar-info">
      <img :src="require(`../../assets/images/miembros/${imagen}`)" />
      <div class="avatar-texto">
        <p>{{ texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nombre: String,
    imagen: String,
    texto: String,
  },
};
</script>

<style>
.avatar {
  width: 15rem;
  height: 13rem;
  border: solid 1px var(--secondary-color);
  overflow: hidden;
  position: relative;
}

.avatar-nombre {
  background-color: var(--secondary-color);
  padding: 0 10%;
}

.avatar-info {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
}

img {
  width: 100%;
  object-fit: cover;
}

.avatar-texto {
  position: absolute;
  top: 60%;
  background-color: rgba(255, 0, 0, 0.6);
}
</style>

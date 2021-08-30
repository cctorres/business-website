<template>
  <div class="bottom-container">
    <div class="bottom-logo">
      <a
        href="https://wa.me/573025159171?text=Hola!%20me%20interesa%20sus%20servicios"
        target="_blank"
        ><i class="fab fa-whatsapp-square"></i
      ></a>
      <a href="https://twitter.com/cctorres7" target="_blank"
        ><i class="fab fa-twitter-square"></i
      ></a>
      <a href="https://github.com/cctorres" target="_blank"
        ><i class="fab fa-github-square"></i
      ></a>
      <a href="https://www.linkedin.com/in/cctorres/" target="_blank"
        ><i class="fab fa-linkedin"></i
      ></a>
    </div>
    <p>Hecho por CCTorres</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  cursor: pointer;
  color: var(--white-color);
}

.bottom-logo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20%;
}

.bottom-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondary-color);
  height: 3vh;
  width: 90%;
  color: var(--white-color);
  font-weight: bolder;
  padding: 0.5rem 0;
  margin-left: 10%;
}

@media (max-width: 600px) {
  .bottom-container {
    flex-direction: column;
    height: auto;
  }
}
</style>

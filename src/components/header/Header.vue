<template>
  <div class="header-container">
    <p><i class="fas fa-phone"></i> 555 5555</p>
    <p><i class="fas fa-envelope"></i> c.torresalzate@gmail.com</p>
    <p><i class="fas fa-building"></i> Tokyo, Japón</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondary-color);
  height: 3vh;
  width: 90%;
  color: var(--white-color);
  font-weight: bolder;
  margin-left: 10%;
  padding: 0.5rem 0;
}

@media (max-width: 600px) {
  .header-container {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
}
</style>

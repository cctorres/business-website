<template>
  <div class="header-container">
    <p>Tel: 555 5555</p>
    <p>Correo: c.torresalzate@gmail.com</p>
    <p>Dir: Cra 74# 89a - 113, Tokyo</p>
  </div>
</template>k

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
  width: 100vw-3.75rem;
  color: var(--white-color);
  font-weight: bolder;
  padding: 0.2rem;
  margin-left: 3.75rem;
}

@media (max-width: 600px) {
  .header-container {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
}
</style>
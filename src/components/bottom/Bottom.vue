<template>
  <div class="bottom-container">
    <p>Hecho por CCTorres</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bottom-container {
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
  .bottom-container {
    flex-direction: column;
    width: 100vw;
  }
}
</style>
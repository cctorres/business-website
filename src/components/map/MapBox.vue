<template>
  <div style="width: 100%; height: 50vh">
    <mapbox-map
      :accessToken="mapOptions.accessToken"
      :center="mapOptions.center"
      :zoom="mapOptions.zoom"
      :style="mapOptions.style"
      ><mapbox-marker :lngLat="mapOptions.center" :draggable="true">
        <mapbox-popup>
          <div>Escuela técnica de magos de Tokyo</div>
          <div>¡Te esperamos!</div>
          <img src="../../assets/images/logo/logo.svg" alt="logo" />
        </mapbox-popup>
      </mapbox-marker>
    </mapbox-map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MapboxMap, MapboxMarker, MapboxPopup } from "vue-mapbox-ts";
export default defineComponent({
  name: "App",
  components: {
    MapboxMap,
    MapboxMarker,
    MapboxPopup,
  },
  setup() {
    const mapOptions = {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      center: [139.7746162, 35.721753],
      zoom: 17,
      style: "mapbox://styles/mapbox/dark-v10",
    };
    return {
      mapOptions,
    };
  },
});
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
}

div {
  color: var(--primary-color);
}
</style>

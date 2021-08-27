<template>
  <div style="width: 100%; height: 50vh">
    <mapbox-map
      :accessToken="mapOptions.accessToken"
      :center="mapOptions.center"
      :zoom="mapOptions.zoom"
      ><mapbox-marker :lngLat="mapOptions.center" :draggable="true">
        <mapbox-popup>
          <div>Escuela técnica de magos de Tokyo</div>
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
      accessToken:process.env.VUE_APP_MAPBOX_KEY,
      center: [139.7746162, 35.721753],
      zoom: 17,
    };
    return {
      mapOptions,
    };
  },
});
</script>
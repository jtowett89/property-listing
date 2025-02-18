<template>
  <section class="details">
    <div class="container">
      <h1>Property <span class="accent-color">Details</span></h1>
      <div class="row">
        <div class="col-md-5">
          <img
            v-if="property?.coverPhoto?.url"
            :src="property.coverPhoto.url"
            alt="Property Image"
          />
          <img
            v-else
            src="../../assets/default-property-img.png"
            alt="Default Property Image"
          />
        </div>
        <div class="col-md-1"></div>
        <div v-if="property" class="col-md-6">
          <h2 class="accent-color fw-bold mb-5">
            {{ property.title }}
          </h2>
          <h2 class="fw-bold mb-5">${{ property.price }} /month</h2>
          <h3>
            <i class="accent-color fa-solid fa-location-dot"></i>
            {{ locationNames }}
          </h3>
        </div>
        <div v-else class="col-md-6">
          <h2>Property not found</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, computed, watchEffect } from "vue";

export default {
  props: {
    properties: Array
  },
  setup(props) {
    const route = useRoute();
    const property = ref(null);

    watchEffect(() => {
      console.log("Route ID:", route.params.id);
      console.log("Properties received:", props.properties);

      if (props.properties.hits?.length) {
        property.value =
          props.properties.hits.find(
            (prop) => String(prop.id) === String(route.params.id)
          ) || null;
        console.log("Found Property:", property.value);
      }
    });

    const locationNames = computed(
      () =>
        property.value?.location?.map((item) => item.name).join(", ") || "N/A"
    );

    return {
      property,
      locationNames
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
};
</script>

<style scoped>
.details {
  padding: 5em 0;
  background-color: var(--color2);
}
.details h1 {
  font-size: 3em;
  font-weight: 700;
  margin: 1em 0;
}
.details img {
  width: 100%;
  border-radius: 1em;
  margin-bottom: 2em;
}
@media screen and (max-width: 600px) {
  .details h1 {
    font-size: 2em;
  }
  .details h2 {
    font-size: 1.5em;
    margin-bottom: 0.75em !important;
  }
  .details h3 {
    font-size: 0.9em;
    margin-bottom: 0.5em !important;
  }
}
</style>

<template>
  <div class="col-md-4" v-if="property">
    <div class="property-card">
      <div v-if="property.product === 'hot'" class="property-card-badge">
        <p><i class="fa-solid fa-star"></i> Hot</p>
      </div>
      <div v-if="property.product === 'superhot'" class="property-card-badge">
        <p><i class="fa-solid fa-crown"></i> Super Hot</p>
      </div>
      <router-link :to="`/view-details/${property.id}`">
        <img v-if="property.coverPhoto" :src="property.coverPhoto.url" alt="" />
        <img v-else src="../assets/default-property-img.png" alt="" />
      </router-link>
      <div class="property-card-text">
        <h2 v-if="property.price">
          ${{ property.price.toLocaleString() }}<span>/Month</span>
        </h2>
        <h3>{{ property.title }}</h3>
        <p>
          <i class="fa-solid fa-location-dot"></i>
          {{ locationNames }}
        </p>
        <div class="property-card-features">
          <p><i class="fa-solid fa-home"></i> {{ property.rooms || "N/A" }}</p>
          <p>
            <i class="fa-solid fa-shower"></i> {{ property.baths || "N/A" }}
          </p>
          <p>
            <i class="fa-solid fa-square"></i>
            {{ property.area ? Math.ceil(property.area) + " sq ft" : "N/A" }}
          </p>
        </div>
        <router-link class="card-btn" :to="`/view-details/${property.id}`">
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: {
    property: {
      type: Object,
      required: true,
      default: () => ({}) // Prevents "Cannot read properties of null"
    }
  },
  computed: {
    locationNames() {
      return (
        this.property?.location?.map((item) => item.name).join(", ") || "N/A"
      );
    }
  }
};
</script>

<style scoped>
.property-card {
  overflow: hidden;
  border-radius: 1em;
  background-color: var(--color2);
  text-align: left;
  margin: 1.5em 0;
}
.property-card-badge {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color1);
  padding: 0.5em;
  border-bottom-right-radius: 1em;
}
.property-card-badge p {
  font-weight: 600;
  color: var(--color2) !important;
  margin-bottom: 0 !important;
  min-height: 1em !important;
}
.property-card-badge p i {
  color: var(--color2) !important;
}
.property-card img {
  width: 100%;
  height: 15em;
}
.property-card-text {
  padding: 1.5em;
}
.property-card h2 {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--color1);
  margin-bottom: 0.5em;
}
.property-card h2 span {
  color: var(--color4);
  font-size: 0.5em;
}
.property-card h3 {
  font-size: 1.2em;
  font-weight: 700;
  color: var(--color3);
  margin-bottom: 0.5em;
  min-height: 5em;
}
.property-card p {
  font-size: 1em;
  color: var(--color4);
  margin-bottom: 1em;
  min-height: 6em;
  margin-bottom: 1em;
}
.property-card p i {
  color: var(--color1);
  margin-right: 0.5em;
}
.property-card-features {
  border-top: 1px solid var(--color4);
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  margin-bottom: 1em;
}
.property-card-features p {
  min-height: 1em;
}
.card-btn {
  font-weight: 600 !important;
  padding: 0.75em 1.5em !important;
  color: var(--color2) !important;
  background-color: var(--color1) !important;
  transition: all 0.2s !important;
  font-size: 1em;
  border: 2px solid var(--color1) !important;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 0.5em;
  display: block;
  text-align: center;
}
.card-btn:hover,
.card-btn:focus {
  color: var(--color1) !important;
  background-color: var(--color2) !important;
  border: 2px solid var(--color1) !important;
}
/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  .property-card img {
    width: 100%;
    height: 15em;
  }
  .property-card h2 {
    font-size: 1.3em;
  }
  .property-card h3 {
    font-size: 1.1em;
  }
  .property-card p {
    font-size: 0.9em;
  }
  .card-btn {
    font-size: 0.9em;
  }
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  .property-card img {
    width: 100%;
    height: 12em;
  }
  .property-card h2 {
    font-size: 1.2em;
  }
  .property-card h3 {
    font-size: 1em;
  }
  .property-card p {
    font-size: 0.8em;
  }
  .card-btn {
    font-size: 0.8em;
  }
}

/* Start mobile styles */
@media screen and (max-width: 600px) {
  .property-card img {
    width: 100%;
    height: 12em;
  }
  .property-card h2 {
    font-size: 1.1em;
    min-height: auto;
  }
  .property-card h3 {
    font-size: 0.9em;
    min-height: auto;
  }
  .property-card p {
    font-size: 0.8em;
    min-height: auto;
  }
  .card-btn {
    font-size: 0.8em;
  }
}
</style>

<template>
  <section class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>
            Buy, Rent or Sell Your
            <span class="accent-color">Real Estate</span>
            easily
          </h1>
          <p>
            Find your dream home with our real estate platform—browse listings,
            compare prices, and connect with trusted agents effortlessly.
          </p>
          <a href="#" @click.prevent="scrollToProperties" class="banner-btn">
            Browse Properties
          </a>
        </div>
        <div class="col-md-6 banner-img">
          <img src="../../assets/banner-img.png" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="properties" id="properties">
    <div v-if="loading">
      <h1 class="text-center fa-2x mt-5 mb-5">Loading Properties...</h1>
    </div>
    <div v-else-if="sortedProperties.length === 0">
      <h1 class="text-center fa-2x mt-5 mb-5">No Active Properties Found</h1>
    </div>
    <div v-else class="container">
      <h1>Property <span class="accent-color">Listings</span></h1>
      <p>Have a look at some of our property listings</p>

      <select v-model="sortOrder" @change="sortProperties">
        <option value="">--Sort by Price--</option>
        <option value="high-low">Highest To Lowest</option>
        <option value="low-high">Lowest to Highest</option>
      </select>

      <div class="row">
        <PropertyCard
          v-for="(property, index) in sortedProperties"
          :key="index"
          :property="property"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { nextTick } from "vue";
import PropertyCard from "../PropertyCard.vue";

export default {
  props: {
    properties: {
      type: Array,
      default: () => []
    },
    loading: Boolean
  },
  components: {
    PropertyCard
  },
  data() {
    return {
      sortOrder: "" // Tracks sorting option
    };
  },
  methods: {
    scrollToProperties() {
      nextTick(() => {
        const section = document.getElementById("properties");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    sortProperties() {
      if (this.sortOrder === "high-low") {
        this.sortedProperties.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "low-high") {
        this.sortedProperties.sort((a, b) => a.price - b.price);
      }
    }
  },
  computed: {
    activeProperties() {
      return (
        this.properties.filter((property) => property.state === "active") || []
      );
    },
    sortedProperties() {
      return [...this.activeProperties].sort((a, b) => {
        if (this.sortOrder === "high-low") return b.price - a.price;
        if (this.sortOrder === "low-high") return a.price - b.price;
        return 0; // Default order
      });
    }
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
/* Start banner section */
.banner {
  padding: 5em 0;
  padding-top: 8em;
  background-color: var(--color7);
  text-align: left;
}
.banner h1 {
  color: var(--color3);
  font-size: 4.5em;
  margin: 0.5em 0;
  font-weight: 700 !important;
}
.banner p {
  color: var(--color4);
  font-size: 1em;
  margin-bottom: 3em;
  font-weight: 500;
}
.banner-img img {
  width: 100%;
  border-radius: 1em;
}
.accent-bg {
  padding: 1em;
  background-color: var(--color5);
  color: var(--color1);
  border-radius: 2em;
  font-weight: 600 !important;
}
.banner .swiper-slide img {
  width: 100%;
}
.banner-btn {
  font-weight: 600 !important;
  padding: 1em 2em !important;
  color: var(--color2) !important;
  background-color: var(--color1) !important;
  transition: all 0.2s !important;
  font-size: 1em;
  border: 2px solid var(--color1) !important;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 0.5em;
}
.banner-btn:hover,
.banner-btn:focus {
  color: var(--color1) !important;
  background-color: var(--color2) !important;
  border: 2px solid var(--color1) !important;
}
select {
  padding: 1em;
  margin-bottom: 2em;
  border: 2px solid var(--color1);
  border-radius: 0.5em;
}
/* End banner section */

/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  /* Start banner section small desktop */
  .banner {
    padding: 5em 0;
    padding-top: 8em;
  }
  .banner h1 {
    font-size: 3.5em;
  }
  .banner p {
    font-size: 0.9em;
  }
  .banner-btn {
    font-size: 0.9em;
  }
  /* End banner section small desktop */
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  /* Start banner section tablet */
  .banner {
    padding: 5em 0;
    padding-top: 8em;
  }
  .banner h1 {
    font-size: 2.5em;
  }
  .banner p {
    font-size: 0.8em;
  }
  .banner-btn {
    font-size: 0.8em;
  }
  /* End banner section tablet */
}
/* Start mobile styles */
@media screen and (max-width: 600px) {
  /* Start banner section mobile */
  .banner {
    padding: 3em 0;
    padding-top: 6em;
    text-align: center;
  }
  .banner h1 {
    font-size: 2em;
  }
  .banner p {
    font-size: 0.8em;
  }
  .banner-btn {
    font-size: 0.8em;
    display: inline-block;
    margin-bottom: 3em;
  }
  /* End banner section mobile */
}
</style>

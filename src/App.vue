<template>
  <SiteNavigation />
  <router-view v-if="properties.hits.length > 0" v-slot="{ Component }">
    <component :is="Component" :properties="properties" :loading="loading" />
  </router-view>
  <FooterSection />
</template>

<script>
import Swal from "sweetalert2";
import SiteNavigation from "./components/SiteNavigation.vue";
import FooterSection from "./components/FooterSection.vue";
import propertyData from "./assets/data2.json";

export default {
  name: "App",
  components: {
    SiteNavigation,
    FooterSection
  },
  data() {
    return {
      // properties: [], // Initially empty
      properties: propertyData,
      loading: true, // Set loading to true before fetching
      apiKey: process.env.VUE_APP_API_KEY
    };
  },
  async mounted() {
    const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": "bayut.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.hits) {
        this.properties = data.hits.filter((item) => item.state === "active");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error fetching data. Using Dummy Data at the moment.",
          icon: "error",
          confirmButtonText: "OK"
        });
        console.log("The Key: " + apiKey);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error fetching data. Using Dummy Data at the moment.",
        icon: "error",
        confirmButtonText: "OK"
      });
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
@import url("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");

/* Change colors below */
:root {
  --color1: #7064ef;
  --color2: #fff;
  --color3: #000;
  --color4: #818181;
  --color5: #cfc7ff;
  --color6: #f8f8f8;
  --color7: #e5e3f8;
  --color8: #0f0a55;
}
/* Change colors above */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: "Plus Jakarta Sans", serif !important;
  overflow-x: hidden;
  scrollbar-color: var(--color1) transparent;
  scrollbar-width: thin;
}
::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--color1) !important;
  -webkit-border-radius: 1ex;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2em !important;
  font-family: "Plus Jakarta Sans", serif !important;
}
p {
  line-height: 2em !important;
  font-family: "Plus Jakarta Sans", serif !important;
}
a {
  text-decoration: none !important;
}
section {
  position: relative;
}
.accent-color {
  color: var(--color1) !important;
}
ul {
  list-style: none !important;
}
.properties {
  background-color: var(--color6);
  padding: 5rem 0;
  text-align: center;
  font-weight: 500;
}
.properties h1 {
  font-size: 3em;
  color: var(--color3);
  margin-bottom: 0.5em;
  font-weight: 700;
}
.properties p {
  color: var(--color4);
  margin-bottom: 2em;
  font-size: 1em;
}
.property-card {
  position: relative;
}
/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  .properties h1 {
    font-size: 2.5em;
  }
  .properties p {
    font-size: 0.9em;
  }
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  .properties h1 {
    font-size: 2em;
  }
  .properties p {
    font-size: 0.8em;
  }
}

/* Start mobile styles */
@media screen and (max-width: 600px) {
  .properties h1 {
    font-size: 1.8em;
  }
  .properties p {
    font-size: 0.8em;
  }
}
</style>

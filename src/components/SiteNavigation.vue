<template>
  <nav ref="myNav" class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        ref="toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        ref="linksContainer"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0 mobile-centered">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <router-link class="nav-link" :to="link[1]" @click="hideNav">
              {{ link[0] }}
            </router-link>
          </li>
        </ul>
        <div class="d-flex justify-buttons mobile-centered">
          <a href="#" class="nav-btn" ref="navBtn" @click="handleNavClick">
            Browse Properties
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

export default {
  methods: {
    handleNavClick(event) {
      event.preventDefault(); // Prevent default link behavior
      this.hideNav(); // Close the navbar
      this.scrollToProperties(event); // Navigate & scroll
    },
    scrollToProperties(event) {
      event.preventDefault();
      this.$router.push("/").then(() => {
        nextTick(() => {
          const section = document.getElementById("properties");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }
  },
  name: "NavbarComponent",
  setup() {
    const myNav = ref(null);
    const toggler = ref(null);
    const navBtn = ref(null);
    const linksContainer = ref(null);
    const clicked = ref(true);
    const links = [
      ["Home", "/"],
      ["About", "/about"],
      ["Blog", "/blog"],
      ["Contact", "/contact"]
    ];

    const scrollFunction = () => {
      if (window.scrollY > 1) {
        myNav.value.classList.add("nav-bg");
      } else if (!linksContainer.value.classList.contains("show")) {
        myNav.value.classList.remove("nav-bg");
      }
    };

    const clickFunction = () => {
      if (clicked.value) {
        myNav.value.classList.add("nav-bg");
      } else if (window.scrollY < 1) {
        myNav.value.classList.remove("nav-bg");
      }
      clicked.value = !clicked.value;
    };

    const hideNav = () => {
      toggler.value.classList.add("collapsed");
      linksContainer.value.classList.remove("show");

      if (window.scrollY < 1) {
        myNav.value.classList.remove("nav-bg");
      }
      clicked.value = true;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollFunction);
      toggler.value.addEventListener("click", clickFunction);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollFunction);
      toggler.value.removeEventListener("click", clickFunction);
    });

    return {
      myNav,
      toggler,
      linksContainer,
      links,
      hideNav,
      navBtn
    };
  }
};
</script>

<style>
/* Start navbar section */
.navbar-nav {
  list-style: none !important;
  justify-content: left;
}
.navbar-collapse {
  justify-content: space-between;
}
.collapse {
  visibility: visible;
}
.navbar-nav li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: 600 !important;
}
.navbar {
  background-color: transparent;
  transition: all 0.2s !important;
  z-index: 100;
}
.nav-bg {
  background-color: var(--color2) !important;
}
.nav-bg .nav-btn {
  color: var(--color2) !important;
  background-color: var(--color1) !important;
  border: 2px solid var(--color1) !important;
}
.nav-bg .nav-btn:hover,
.nav-bg .nav-btn:focus {
  color: var(--color1) !important;
  background-color: var(--color2) !important;
  border: 2px solid var(--color1) !important;
}
.nav-bg .navbar-nav a {
  color: var(--color3) !important;
}
.nav-bg .navbar-nav a:hover,
.nav-bg .navbar-nav a:focus {
  color: var(--color1) !important;
}
.nav-btn {
  font-weight: 600 !important;
  padding: 1em 2em !important;
  color: var(--color2) !important;
  background-color: var(--color1) !important;
  transition: all 0.2s !important;
  font-size: 1em;
  border: 2px solid var(--color1) !important;
  margin-left: 0.5em;
  margin-right: 0.5em;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 0.5em;
  cursor: pointer;
}
.nav-btn:hover,
.nav-btn:focus {
  color: var(--color1) !important;
  background-color: var(--color2) !important;
  border: 2px solid var(--color1) !important;
}
.navbar-nav a,
router-link {
  color: var(--color3) !important;
  transition: all 0.2s !important;
  text-decoration: none;
  font-size: 1em;
  cursor: pointer;
}
.navbar-nav a:hover,
.navbar-nav a:focus,
router-link:hover,
router-link:focus {
  color: var(--color1) !important;
}
.nav-item {
  margin-left: 1em;
  margin-right: 1em;
  font-weight: 500 !important;
}
.logo,
.footer-logo img,
.navbar-brand img {
  height: 40px;
}
.footer-logo img {
  margin-bottom: 2.5em;
}
.navbar-toggler {
  color: var(--color1) !important;
  box-shadow: none !important;
  padding: 5px !important;
}
/* End navbar section */
/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  /* Start navbar section small desktop */
  .logo,
  .footer-logo img,
  .navbar-brand img {
    height: 30px;
  }
  .navbar-nav a {
    font-size: 0.9em;
  }
  .justify-buttons a {
    font-size: 0.9em;
  }
  /* End navbar section small desktop */
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  .mobile-centered {
    text-align: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Start navbar section tablet */
  .logo,
  .footer-logo img,
  .navbar-brand img {
    height: 30px;
  }
  .navbar-nav {
    padding: 1em 0;
  }
  .justify-buttons {
    padding: 1em 0;
  }
  .navbar-nav a {
    font-size: 0.8em;
  }
  .justify-buttons a {
    font-size: 0.8em;
  }
  /* End navbar section tablet */
}
/* Start mobile styles */
@media screen and (max-width: 600px) {
  .mobile-centered {
    text-align: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-centered-logo {
    text-align: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-reverse {
    flex-direction: column-reverse;
  }
  .navbar-nav {
    margin-right: 0 !important;
  }

  /* Start navbar section mobile */
  .logo,
  .footer-logo img,
  .navbar-brand img {
    height: 25px;
  }
  .navbar-nav a {
    font-size: 0.8em;
  }
  .justify-buttons a {
    font-size: 0.8em;
  }
  .nav-btn {
    margin: 0em 0.5em;
  }
  /* End navbar section mobile */
}
</style>

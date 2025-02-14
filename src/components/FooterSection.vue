<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="footer-logo">
            <img src="../assets/logo2.png" alt="" />
            <p>
              Find your dream home with our real estate platform—browse
              listings, compare prices, and connect with trusted agents
              effortlessly.
            </p>
            <p class="socials">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-dribbble"></i></a>
            </p>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2 col-6">
          <h2>Legal</h2>
          <ul>
            <li><router-link to="/terms-of-use">Terms of Use</router-link></li>
            <li>
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-6">
          <h2>Quick Links</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:hello@estatery.com">hello@estatery.com</a>
            </li>
            <li><a href="tel:+123-456-7890">+123-456-7890</a></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="footer-line"></div>
        <p class="copyright">
          &copy; <span id="copyrightYear"></span> Estatery. All rights reserved
          | Developed by
          <a href="https://justicetowett.netlify.app" target="_blank"
            >Justice Towett</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
  mounted() {
    // Start Copyright Year
    let currentYear = new Date().getFullYear();
    if (document.getElementById("copyrightYear"))
      document.getElementById("copyrightYear").innerHTML = currentYear;
    // End Copyright Year
  }
};
</script>

<style scoped>
/* Start footer section */
.footer {
  padding: 5em 0;
  background-color: var(--color8);
}
.footer h2 {
  font-size: 1.4em;
  font-weight: 700 !important;
  color: var(--color2);
  margin-bottom: 2em;
}
.footer p {
  font-size: 1em;
  color: var(--color2);
  font-weight: 500 !important;
}
.socials {
  margin-top: 3em !important;
}
.socials a {
  color: var(--color2) !important;
  transition: all 0.2s !important;
  margin-right: 0.5em;
  font-size: 2em;
}
.socials a:hover,
.socials a:focus {
  color: var(--color1) !important;
}
.footer ul {
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
}
.footer ul li a {
  font-size: 1em;
  color: var(--color2);
  transition: all 0.2s !important;
  line-height: 3em;
  font-weight: 500 !important;
}
.footer ul li a:hover {
  color: var(--color1);
}
.footer-line {
  width: 100%;
  border-top: 1px solid var(--color4);
  margin: 3em 0;
}
.copyright {
  font-size: 1em;
}
.copyright a {
  color: var(--color1) !important;
  font-weight: 600 !important;
}
/* End footer section */
/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  /* Start footer section small desktop */
  .footer {
    padding: 5em 0;
  }
  .footer h2 {
    font-size: 1.3em;
  }
  .footer p {
    font-size: 0.9em;
  }
  .socials a {
    font-size: 1.8em;
  }
  .footer ul li a {
    font-size: 0.9em;
  }
  .copyright {
    font-size: 0.9em;
  }
  /* End footer section small desktop */
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  /* Start footer section tablet */
  .footer {
    padding: 5em 0;
  }
  .footer h2 {
    font-size: 1.2em;
  }
  .footer p {
    font-size: 0.8em;
  }
  .socials a {
    font-size: 1.6em;
  }
  .footer ul li a {
    font-size: 0.8em;
  }
  .copyright {
    font-size: 0.8em;
  }
  /* End footer section tablet */
}

/* Start mobile styles */
@media screen and (max-width: 600px) {
  /* Start footer section mobile */
  .footer {
    padding: 5em 0;
    text-align: left !important;
  }
  .footer h2 {
    font-size: 1.2em;
    margin-top: 1em;
    margin-bottom: 0.5em;
    text-align: left;
  }
  .footer p {
    font-size: 0.8em;
    margin-bottom: 2em !important;
    text-align: left;
  }
  .socials a {
    font-size: 1.6em;
  }
  .footer ul li a {
    font-size: 0.8em;
    text-align: left;
  }
  .copyright {
    font-size: 0.8em;
    text-align: left;
  }
  /* End footer section mobile */
}
</style>

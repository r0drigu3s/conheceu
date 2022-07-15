<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex justify-center align-center">
    <v-footer id="footer">
      <v-card id="card">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="black"></v-divider>

        <v-card-text class="d-flex justify-center black--text">
          {{ new Date().getFullYear() }} — <strong>Alumiô Bazar</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Rodape",

  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram"],
  }),
};
</script>

<style>
#card {
  color: black;
  width: 100%;
  height: 100%;
}

#footer {
  background-color: white;
  color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 0;
  justify-content: center;
}
</style>

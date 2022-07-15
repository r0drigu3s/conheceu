<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container ">
<v-footer class="d-flex justify-center"> 
      <v-card flat tile class="black lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="white"></v-divider>

        <v-card-text class="white--text">
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

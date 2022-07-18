<template>
  <v-app>
    <v-app-bar id="navbar" app dark>
      <div id="logo" class="d-flex align-center">
        <v-img
          alt="Logotipo"
          class="shrink mr-2"
          contain
          src="../public/images/logo.jpeg"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#navbar {
  background-color: #872d09;
}
</style>
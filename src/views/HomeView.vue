<template>
  <div>
    <header></header>

    <v-main>
      <form-conheceu />
    </v-main>

    <v-footer>
      <rodape />
    </v-footer>
  </div>
</template>

<script>
import FormConheceu from "../components/FormConheceu";
import Rodape from "../components/Rodape";

export default {
  name: "App",

  components: {
    FormConheceu,
    Rodape,
  },
};
</script>

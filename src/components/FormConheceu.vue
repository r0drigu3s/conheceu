<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container id="vContainer" class="d-flex justify-center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <h1>Como nos conheceu?</h1>
      <br /><br /><br /><br /><br />
      <v-text-field
        v-model="name"
        :counter="100"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Preencha o campo Item']"
        label="Item"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Enviar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "FormConheceu",

  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Preencha o campo Nome",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "Email informado não é válido",
    ],
    select: null,
    items: ["Facebook", "Instagram", "Outros"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
#vContainer {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
}
</style>
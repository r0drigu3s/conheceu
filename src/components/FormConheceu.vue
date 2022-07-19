<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container id="vContainer" class="d-flex justify-center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <h1>Como nos conheceu?</h1>
      <br /><br /><br />
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
        :rules="[(v) => !!v || 'Preencha o campo Plataforma']"
        label="Plataforma"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
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
    nameRules: [(v) => !!v || "Preencha o campo Nome"],
    email: "",
    emailRules: [
      (v) => !!v || "Preencha o campo Email",
      (v) => /.+@.+\..+/.test(v) || "Email informado não é válido",
    ],
    select: null,
    items: ["Facebook", "Instagram", "Outros"],
    checkbox: false,
  }),

  methods: {
    submit() {
      const axios = require("axios").default;
      const data = {
        name: this.name,
        email: this.email,
        plataforma: this.select,
      };

      if (this.$refs.form.validate()) {
        axios
          .post("http://127.0.0.1:8000/api/formulario", data)
          .then(() => {
            alert("Opa, deu tudo certo! Formulário enviado com sucesso!");
          })
          .catch((error) => {
            console.log(error);
            alert("Ops, algo deu errado! Preencha o formulário corretamente.");
          });

        this.$refs.form.reset();
      } else {
        alert("Preencha os campos necessários!");
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
#vContainer {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}
</style>
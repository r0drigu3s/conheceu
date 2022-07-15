<template>
  <div>
    <form-conheceu />
    <rodape />
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

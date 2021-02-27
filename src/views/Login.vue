<template>
  <Loading v-show="true" />
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "login",
  components: {
    Loading
  },
  mounted: function () {
    let code = localStorage["x-api-code"];
    if (code) {
      location.assign("/#/tendency");
    } else {
      code = this.$route.query.code;
      if (code) {
        localStorage["x-api-code"] = code;
        location.assign("/#/tendency");
      } else {
        location.assign(this.$root.api.login);
      }
    }
  },
};
</script>
<template>
  <table class="table">
    <th v-for="column in columns" :key="column.key">
      <td>
        <span>{{column.name}}</span>
      </td>
        
    </th>
    <tr class="t-row" v-for="row in rows" :key="row.key">
      <td>
        <router-link
          v-if="row.name == 'id'"
          :to="{ name: 'one', params: { pid: row.id } }"
          target="_blank"
        >{{ row.text }}</router-link>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "table",
  props: {
    columns: Array,
    rows: Array,
  },
  data: function () {
    return {
    };
  },
  directives: {
  },
  mounted: function () {
  },
  methods: {
  },
};
</script>

<style>

</style>
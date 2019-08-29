<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        stripe
        border
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="this.$store.state.games"
      >
        <template slot-scope="scope">
          <td class="is-center">{{ scope.row.appID }}</td>
          <td class="is-center">
            <img :src="scope.row.iconURL" />
          </td>
          <td class="is-center">
            <img :src="scope.row.logoURL" />
          </td>
          <td class="is-left">{{ scope.row.name }}</td>
          <td class="is-center">{{ scope.row.playTime }}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </mu-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      openSimple: false,
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        {
          title: "AppID",
          name: "appid",
          width: 120,
          align: "center",
          sortable: false
        },
        {
          title: "Icon",
          name: "icon",
          width: 80,
          align: "center",
          sortable: false
        },
        {
          title: "Logo",
          name: "logo",
          width: 230,
          align: "center",
          sortable: false
        },
        {
          title: "Game Name",
          name: "name",
          width: 350,
          align: "center",
          sortable: true
        },
        {
          title: "Play Time",
          name: "playtime",
          width: 150,
          align: "center",
          sortable: true
        }
      ]
    };
  },
  computed: {
    ...mapState(["games"])
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    ...mapActions(["getUserOwnGames"])
  },
  created() {
    this.getUserOwnGames({ steamid: "76561198044167174" });
  }
};
</script>

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
          <td class="is-center">{{scope.row.appid}}</td>
          <td class="is-center">
            <img :src="getRealImgUrl(scope.row.appid,scope.row.img_icon_url)" />
          </td>
          <td class="is-center">
            <img :src="getRealImgUrl(scope.row.appid,scope.row.img_logo_url)" />
          </td>
          <td class="is-left">{{scope.row.name}}</td>
          <td class="is-center">{{scope.row.playtime_forever}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </mu-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

const cdn = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps'

export default {
  name: 'HelloWorld',
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
        {
          title: 'AppID',
          name: 'appid',
          width: 120,
          align: 'center',
          sortable: false
        },
        {
          title: 'Icon',
          name: 'icon',
          width: 80,
          align: 'center',
          sortable: false
        },
        {
          title: 'Logo',
          name: 'logo',
          width: 230,
          align: 'center',
          sortable: false
        },
        {
          title: 'Game Name',
          name: 'name',
          width: 350,
          align: 'center',
          sortable: true
        },
        {
          title: 'Play Time',
          name: 'playtime',
          width: 150,
          align: 'center',
          sortable: true
        }
      ]
    }
  },
  computed: {
    ...mapState(['games'])
  },
  methods: {
    handleSortChange ({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === 'asc' ? a[name] - b[name] : b[name] - a[name]
      )
    },
    getRealImgUrl (appID, imgUrl) {
      if (imgUrl) { return `${cdn}/${appID}/${imgUrl}.jpg` } else { return 'https://fakeimg.pl/32x32/ff0000,128/000,255?text=error&font=noto' }
    },
    ...mapActions(['getUserOwnGames'])
  },
  created () {
    this.getUserOwnGames({steamid: '76561198044167174'})
  }
}
</script>

<template>
  <div class="box">
    <Loading v-if="$root.loading" />
    <p class="title">趋势</p>
    <span>分类：</span>
    <select v-model="sort">
      <option value="0">标识</option>
      <option value="1">总回复</option>
      <option value="2">一天回复增量</option>
      <option value="3">三天回复增量</option>
      <option value="4">七天回复增量</option>
      <option value="5">三十天回复增量</option>
      <option value="6">总浏览</option>
      <option value="7">一天浏览增量</option>
      <option value="8">三天浏览增量</option>
      <option value="9">七天浏览增量</option>
      <option value="10">三十天浏览增量</option>
    </select>
    <span class="brief">数量：</span>
    <select v-model="limit">
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
      <option>150</option>
      <option>200</option>
      <option>500</option>
    </select>
    
    <hr />
    <a-table
      v-if="$root.data"
      :pagination="pagination"
      :columns="columns"
      :data-source="$root.data"
      :scroll="{ y: 480 }"
      bordered
    >
      <router-link
        slot="a"
        slot-scope="text"
        :to="{ name: 'one', params: { pid: text } }"
        class="book_name"
        target="_blank"
        >{{ text }}</router-link
      >
    </a-table>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import Loading from "@/components/Loading.vue";

export default {
  name: "tendency",
  components: {
    Loading,
  },
  data: function () {
    return {
      sort:0,
      limit:10,
      pagination: false,
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          align:"center",
          width:70
        },
        {
          title: "标识",
          dataIndex: "a",
          sorter: (a, b) => a.a - b.a,
          scopedSlots: { customRender: "a" },
          align:"center",
        },
        {
          title: "总回复",
          dataIndex: "b",
          sorter: (a, b) => a.b - b.b,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "1+",
          dataIndex: "c",
          sorter: (a, b) => a.c - b.c,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "3+",
          dataIndex: "d",
          sorter: (a, b) => a.d - b.d,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "7+",
          dataIndex: "e",
          sorter: (a, b) => a.e - b.e,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "30+",
          dataIndex: "f",
          sorter: (a, b) => a.f - b.f,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "总浏览",
          dataIndex: "g",
          sorter: (a, b) => a.g - b.g,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "1+",
          dataIndex: "h",
          sorter: (a, b) => a.h - b.h,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "3+",
          dataIndex: "i",
          sorter: (a, b) => a.i - b.i,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "7+",
          dataIndex: "j",
          sorter: (a, b) => a.j - b.j,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
        {
          title: "30+",
          dataIndex: "k",
          sorter: (a, b) => a.k - b.k,
          sortDirections: ["descend", "ascend"],
          align:"center",
        },
      ],
    };
  },
  mounted: function () {
    document.title = "Tendency";
    this.get_tendency();
  },
  methods: {
    get_data_by_url: function (this_url) {
      if (this_url === this.$root.before_url) {
        return "";
      } else {
        this.$root.before_url = this_url;
      }
      this.$root.loading = true;
      axios
        .get(this_url)
        .then((response) => {
          let a = [];
          response.data.forEach((element,index) => {
            a.push({
              key: index,
              index: index + 1,
              a: element[0],
              b: element[1],
              c: element[2],
              d: element[3],
              e: element[4],
              f: element[5],
              g: element[6],
              h: element[7],
              i: element[8],
              j: element[9],
              k: element[10],
            });
          });
          this.$root.data = a;
          if (this.$root.data.length == 0) {
            alert("真的没有了");
          }
        })
        .catch((error) => {
          alert("服务端错误，稍后刷新一下试试");
        })
        .finally(() => {
          this.$root.loading = false;
        });
    },
    get_tendency: function () {
      this.$root.data = [];
      this.get_data_by_url(
        this.$root.api.tendency + "?sort=" + this.sort + "&limit=" + this.limit
      );
    },
  },
  watch:{
    "limit":function(){
      this.get_tendency()
    },
    "sort":function(){
      this.get_tendency()
    }
  }
};
</script>

<style>

</style>

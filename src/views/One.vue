<template>
  <div class="box">
    <Loading v-if="$root.loading" />
    <p class="title">标题：{{ title }}</p>
    <p class="title">链接：{{ link }}</p>
    <p class="title">趋势：</p>
    <hr />
    <div id="chart"></div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import Loading from "@/components/Loading.vue";
var echarts = require("echarts");
export default {
  name: "one",
  components: {
    Loading,
  },
  data: function () {
    return {
      title: "",
      link: "",
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  mounted: function () {
    document.title = this.$route.params.pid + " - Tendency";
    this.get_one(this.$route.params.pid);
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
          this.$root.data = response.data;
          console.log(this.$root.data);
          this.run_chart(response);
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
    get_one: function (pid) {
      this.get_data_by_url(this.$root.api.one + "?pid=" + pid);
    },
    run_chart: function (response) {
      this.title = response.data.postTitle;
      this.link = response.data.postLink;
      var myChart = echarts.init(document.getElementById("chart"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["总回复", "总浏览"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: response.data.tendency.numberDate,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "总回复",
            type: "line",
            stack: "All",
            areaStyle: {},
            data: response.data.tendency.numberReply,
          },
          {
            name: "总浏览",
            type: "line",
            stack: "All",
            areaStyle: {},
            data: response.data.tendency.numberView,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 1rem;
}
.header input {
  margin-right: 1rem;
}
.header-buttons-left {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.header-buttons-left .margin075 {
  margin-left: 0.75rem;
}
</style>


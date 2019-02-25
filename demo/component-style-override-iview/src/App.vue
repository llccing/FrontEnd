<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form-compo></form-compo>

    <big-table :data="data" :columns="columns"></big-table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import formCompo from "./components/formCompo.vue";
import BigTable from "./components/BigTable";

export default {
  name: "app",
  components: {
    HelloWorld,
    formCompo,
    BigTable
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

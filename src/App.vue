<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "./assets/css/reset.less";
body {
  background-color: #fff;
  color: #484848;
  font-family: Circular, "PingFang-SC";
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(196, 196, 196, 0.2);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

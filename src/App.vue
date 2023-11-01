<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
.wrapper{
  padding: 0 150px;
}
.wrapper-mini{
  padding: 0 100px;
}

@media screen and (width < 1350px){
  .wrapper{
    padding: 0 100px;
  }
}
@media screen and (width < 1020px){
  .wrapper{
    padding: 0 33px;
  }
}
</style>

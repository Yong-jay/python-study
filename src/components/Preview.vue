<template>
<div class="container">
  <div class="card" style="width: 18rem;">
    <img src="~/assets/1.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"> Jung-in </h5>
      <p class="card-text"> 파이썬 학습조직에서 파이썬 학습에 도움을 주고 있습니다. </p>
    </div>
  </div>
    <div class="card" style="width: 18rem;">
    <img src="~/assets/2.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"> Sung-chan </h5>
      <p class="card-text"> 파이썬 학습조직에서 파이썬 학습에 도움을 주고 있습니다. </p>
    </div>
  </div>
    <div class="card" style="width: 18rem;">
    <img src="~/assets/3.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"> Yong-jae </h5>
      <p class="card-text"> 파이썬 학습조직에서 파이썬 학습에 도움을 주고 있습니다. </p>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
@import "~/scss/main";
  .card {
    display: inline-block;
    margin: 40px 40px; 
    
    color: #FFF;
    .card-title{
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 200;
    }
  }
  .card-body{
    background-color: $primary;
  }
  .card-img-top{
    height: 270px;
  }
</style>
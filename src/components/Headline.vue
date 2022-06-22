<template>
  <div class="container-bg">
    <div class="container">
      <h1>
        <span>[공지]</span><br/>
        파이썬 학습조직<br/>
        페이지 이전 안내
      </h1>
      <p>
        홍성찬 선생님께서 파이썬 학습조직 노션 페이지를 만들어주셨습니다. <br/>
        해당 페이지의 경우 원내 컴퓨터로도 접속이 가능하여 더 편리하게 사용하실 수 있을 것 같습니다. <br/><br/>

        - 접속 링크: https://hschan.notion.site/PYTHON-ff888d800ded4a85a098b4d6e5a145a1 <br/><br/>

        6회차(06.02.목) 부터는 위 링크로 들어가셔서 정리해주시면 감사하겠습니다. <br/>
        (모임 안내 메일에 위 링크 포함하여 보내드리도록 하겠습니다.)<br/><br/>

        남은 모임에도 적극적인 참여 부탁드립니다! 😀<br/>
      </p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "~/scss/main";
.container-bg{
  background-image: linear-gradient(
        rgba(0, 0, 0, 0.6)
      ),  url("~/assets/head_bg.jpg");

  background-size: cover;

}

.container{
  padding-top: 40px;
  padding-bottom: 40px;
}
h1 {
  line-height: 1;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 80px;
  span{
    color: $primary;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  }
  color: #fff
}
p{
  font-family: "Noto Sans KR", sans-serif;
  color: #FFF;
  margin: 30px 0;
  font-size: 16px;
  font-weight: 500;
}
</style>
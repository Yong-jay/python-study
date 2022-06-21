<template>
  <RouterLink 
    to="/" 
    class="logo">
    <span class=spgreen>PYTHON</span>-<span class=spblue>STUDY</span>.ORG
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .logo{
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
    .sp{
      &green{
         color: $primary;
      }
      &blue{
         color: $secondary;
      }
    }
  }
</style>
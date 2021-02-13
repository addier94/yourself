<template>
  <div class="hero-footer footer footer-custom">
    <div class="container">
      <div class="has-text-centered">
        <a href="#">
            <i class="fab fa-github"></i>
        </a>
        <a href="#">
            <i class="fab fa-facebook-square"></i>
        </a>
        <a href="#">
            <i class="fab fa-twitter-square"></i>
        </a>
        <a href="#">
          <i class="fab fa-youtube-square"></i>
        </a>
        <div class="m-t-sm">
          © {{new Date().getFullYear()}} Todos los derechos reservado
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  /* footer */
  .icon {
    margin-bottom: 20px;
  }
  .fa-github, .fa-facebook-square, .fa-twitter-square, .fa-youtube-square {
    font-size: 3rem;
  }
  .footer-custom {
      background-color: $primaryColor;
    a{
      margin-left: .2rem;
      margin-right: .2rem;
      i{
        color: $primaryLightColor;  
      }
      .fa-github:hover{
        color: #171515;
      }
      .fa-facebook-square:hover{
        color: #3b5998;
      }
      .fa-twitter-square:hover{
        color: #00acee;
      }
      .fa-youtube-square:hover{
        color: #c4302b;
      }  
    }
  }
  .hero-footer{
    padding: 6rem 1rem 10rem;
  }
</style>

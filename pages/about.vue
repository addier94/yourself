<template>
  <!-- <div class="about-page">
    <div class="container">
      <figure class="avatar">
        <img src="/profile.jpg">
      </figure>
      <p>My name is Alfredo Fernandez and I am an experienced software engineer and freelance developer.</p>
      <br>
      <p> I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from Java development for ultrasound devices to modern mobile and web applications in Vue and Angular.</p>
      <br>
      <p>Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way.</p>
    </div>
  </div> -->
  <div class="d-grid m-t-xxl">
    <!-- title -->
    <div class="title-about">
      <p>Aprende sobre mi</p>
      <h1>Sobre mi</h1>
      <div class="bar"></div>
    </div>
    <!-- Picture part-->
    <div class="photo">
      <img class="img-fluid" src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.15752-9/86661854_2747320725345859_3908301818521714688_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_oc=AQk0BePfvZWxkfRPq7_t0NkDaggiJU7Mbq53DK1oKE2JyhlbinhUIvIGC-9TE9Az3k0i4RUtXmuHy7CUFWTPbu6C&_nc_ht=scontent.fvvi1-2.fna&oh=909a72efa6f5c892e98ac295bee41406&oe=5EDA3589" alt="About Picture">
    </div>
    <!-- Content part-->
    <div class="description">
        <h6>Hola soy Alfredo un convencido de que la educación en línea es clave para un trabajo mejor en el futuro</h6>
        <div class="content-description">
          <p>Soy full-stack developer, con fuerte enfoque en microservicios en la nube (amazon web services) con phyton, node y php utilizando la base de datos mysql, postgres, mongodb y firebase, quiero mencionar que la mayor parte trabajado con estos base de datos fue a través de ORM de frameworks de lado del servidor. En el cliente he tenido la fortuna de trabajar con varios frameworks y librerias javascript como angular, vue y react, por supuesto no puede faltar el famoso css y html aunque estos no son lenguajes de programación pero son base si vas a desplegar la aplicación para el navegador. En teléfonos móviles normalmente solía desarrollar aplicaciones híbridas(ionic) por su ventaja de correr un solo código en IOS Y ANDROI, de hecho nunca trabajé con lenguajes nativos de forma profesional más que en la universidad, a la fecha de hoy mayo 2020 me apoyo más del lenguaje de programación dart y flutter, así que actualmente me siento felis con esta  tecnologia de google.</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Biografia sobre Alfredo Fernandez | Alfredo Fernandez'
  },
}
</script>  
<style scoped lang="scss">
.d-grid {
  padding-bottom: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 5rem 1rem;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 4rem 1fr;
  grid-template-areas:  "title      title"
                        "photo      description";
  align-items: center;
  .title-about{
    grid-area: title;
    align-self: center;
    justify-self: center;
    h1{
      font-size: 3rem;
      font-family: $slantedFont;
      font-weight: 700;
    }
    p {
      text-align: center;
      color: $darkGrey;
    }
    .bar{
      background-color: $primaryColor;
      content: '';
      display: block;
      height: 4px;
      left: 0;
      margin: .8rem auto 0 auto;
      position: relative;
      right: 0;
      width: 75px;
    }
  }
  .photo{
    grid-area: photo;
  }
  .description{
    grid-area: description;
    h6{
      font-family: $primaryFont;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .content-description p {
      font-size: 1rem;
      line-height: 2rem;

    }
  }
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
@media (max-width: 1220px)
{
  .d-grid {
    padding-bottom: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem 1rem;
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 4rem 1fr;
    grid-template-areas:  "title      title"
                          "photo      photo"
                          "description description";
    align-items: center;
  }
  .description {
    h6 {
      letter-spacing: .2rem;
      padding: 0 .5rem;
    }
    .content-description p {
      font-size: 1rem;
      line-height: 1.8rem!important;
      padding: 0 .5rem;
    }
  }
}

</style>
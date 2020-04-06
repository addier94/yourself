<template>
  <div class="about-page">
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
  .about-page {
    padding-top: 80px;
    position: relative;
    max-width: 800px;
    margin: 0 auto 5rem auto;
    font-size: 25px;
  }
  .avatar {
    margin-right: 20px;
    float: left;
  }
  .avatar img {
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
</style>
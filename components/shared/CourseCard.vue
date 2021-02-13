<template>
  <div class="cocktail">
    <div>
        <img :src="course.image">
    </div>
    <div class="cocktail-footer">
          <h3>{{ course.title | shortenText(45) }}</h3>
          <figure class="avatar-in-card d-flex align-items-center">
              <img @click="profileToggle = !profileToggle" class="m-r-sm" :src="course.author.avatar ? course.author.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNYjU6pmBARJ191GCVK0UncdRoj_zVSJ4ZjLkRuSoDICKTfWxA&usqp=CAU'">
              <h4>{{ course.author.name }}</h4>
          </figure>
          <p>{{ course.subtitle | shortenText(45) }}</p>
      <div class="price-box">
        <span class="price">{{ course.price }}</span>
        <span class="disc-price">{{ course.discountedPrice }}</span>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <nuxt-link class="btn btn-primary btn-details" :to="`/courses/${course.slug}`">Leer mas</nuxt-link>
      <a target="_" :href="course.promoVideoLink" class="btn btn-primary btn-details">Ir al curso</a>
    </div>
  </div>
</template>
<!-- credate script, specify props of course --->
<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .price-box {
    text-align: right;
    .price {
      color: gray;
      font-size: 16px;
      text-decoration: line-through;
    }
    .disc-price {
      font-size: 21px;
      font-weight: bold;
    }

  }
.avatar-in-card img {
  width: 2rem;
  border-radius: 50%;
}
.cocktail {
  background: $mainWhite;
  margin-bottom: 2rem;
  box-shadow: $lightShadow;
  transition: $mainTransition;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: $mainBorderRadius;
}

.cocktail:hover {
  box-shadow: $darkShadow;
}

.cocktail>div>img {
  border-top-left-radius: $mainBorderRadius;
  border-top-right-radius: $mainBorderRadius;
}




.cocktail-footer {
  padding: 1.5rem;
}
.cocktail-footer h3,
.cocktail-footer h4,
.cocktail-footer p {
  margin-bottom: 0.3rem;
}
.cocktail-footer h3 {
    font-size: 2.2rem;
    letter-spacing: .1rem;
    line-height: 2.1rem;
}
.cocktail-footer p {
  color: $darkGrey;
  margin-bottom: 0.5rem;
}


</style>
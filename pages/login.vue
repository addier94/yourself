<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body m-b-5">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Iniciar sesion</h3>
          <p class="subtitle has-text-grey">Por favor inicia sesion</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input
                        v-model="form.email"
                        @blur="$v.form.email.$touch()" 
                        class="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autofocus=""
                        autocomplete="email">
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">Correo es necesario</span>
                    <span v-if="!$v.form.email.email" class="help is-danger">Correo invalido</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.password"
                    @blur="$v.form.email.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="current-password">
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">Contraseña es necesario</span>
                  </div>
                </div>
              </div>
              <!-- Login Button -->
              <button
                @click.prevent="login"
                :disabled="$v.form.$invalid"
                class="button is-block is-info is-large is-fullwidth">
                Iniciar sesion
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a>Iniciar sesion con google</a> &nbsp;·&nbsp;
            <nuxt-link to="/register">Registrarse</nuxt-link> &nbsp;·&nbsp;

            <a href="../">Necesitas ayuda?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  middleware: 'guest',
  data () {
    return {
      form: {
        email: null,
        password: null,
      }
    }
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid
    }
  },
  methods: {
    login() {
      this.$v.form.$touch()

      if (this.isFormValid) {
        this.$store.dispatch('auth/login', this.form)
          .then(() => this.$router.push('/'))
          .catch(() => this.$toasted.error('Correo o Contraseña incorrecto', {duration: 3000}))
      }

    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .hero-body.m-b-5{
    margin-bottom: 5rem;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
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
  p.subtitle {
    padding-top: 1rem;
  }
</style>

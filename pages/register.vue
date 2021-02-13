<template>
<section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Register</h3>
        <p class="subtitle has-text-grey">Por favor procede el registro.</p>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.username"
                  @blur="$v.form.username.$touch()"
                  class="input is-large"
                  type="text"
                  placeholder="Usuario">
                <div v-if="$v.form.username.$error" class="form-error">
                  <span v-if="!$v.form.username.required" class="help is-danger">Usuario es necesario</span>
                  <span v-if="!$v.form.username.minLength" class="help is-danger">Usuario debe tener 6 caracteres como mínimo</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.name"
                  @blur="$v.form.name.$touch()"
                  class="input is-large"
                  type="text"
                  placeholder="Nombre">
                <div v-if="$v.form.name.$error" class="form-error">
                  <span v-if="!$v.form.name.required" class="help is-danger">Nombre es necesario</span>
                  <span v-if="!$v.form.name.minLength" class="help is-danger">Nombre debe tener 6 caracteres como mínimo</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.email"
                  @blur="$v.form.email.$touch()"
                  class="input is-large"
                  type="email"
                  placeholder="Correo">
                <div v-if="$v.form.email.$error" class="form-error">
                  <span v-if="!$v.form.email.required" class="help is-danger">Correo es necesario</span>
                  <span v-if="!$v.form.email.emailValidator" class="help is-danger">Correo no valido</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.avatar"
                  @blur="$v.form.avatar.$touch()"
                  class="input is-large"
                  type="text"
                  placeholder="Url para la foto"
                  autocomplete="">
                <div v-if="$v.form.avatar.$error" class="form-error">
                  <span v-if="!$v.form.avatar.url" class="help is-danger">Formato de url no valido</span>
                  <span v-if="!$v.form.avatar.supportedFileType" class="help is-danger">Tipo de archivo no valido</span>
                </div>
                  <!-- <span v-if="$v.form.avatar.$error" class="help is-danger">Selected file type is not valid!</span> -->
              </div>
            </div>
            <!-- </div> -->
            <div class="field">
              <div class="control">
                <input
                  v-model="form.password"
                  @blur="$v.form.password.$touch()"
                  class="input is-large"
                  type="password"
                  placeholder="Contraseña"
                  autocomplete="new-password">
                <div v-if="$v.form.password.$error" class="form-error">
                  <span v-if="!$v.form.password.required" class="help is-danger">Contraseña es necesario</span>
                  <span v-if="!$v.form.password.minLength" class="help is-danger">Contraseña debe tener 6 caracteres como mínimo</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  v-model="form.passwordConfirmation"
                  @blur="$v.form.passwordConfirmation.$touch()"
                  class="input is-large"
                  type="password"
                  placeholder="Confirmar contraseña"
                  autocomplete="off">
                <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                  <span v-if="!$v.form.passwordConfirmation.required" class="help is-danger">Debe confirmar la contraseña</span>
                  <span v-if="!$v.form.passwordConfirmation.sameAs" class="help is-danger">Contraseña debe ser igual a la anterior</span>
                </div>
              </div>
            </div>
              <button
                @click.prevent="register"
                :disabled="$v.form.$invalid"
                type="button"
                class="button is-block is-info is-large is-fullwidth">Registro
              </button>
          </form>
        </div>
        <p class="has-text-grey">
          <nuxt-link to="/login">Iniciar sesion</nuxt-link> &nbsp;·&nbsp;
          <a>Iniciar sesion con google</a> &nbsp;·&nbsp;
          <a href="../">Necesitas ayuda?</a>
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'
export default {
  middleware: 'guest',
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6)
      },
      name: {
        required,
        minLength: minLength(6)
      },
      avatar: {
        url,
        supportedFileType
      },
      email: {
        required,
        emailValidator: email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAs: sameAs('password')
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid
    }
  },
  methods: {
    register() {
      this.$v.form.$touch()
      if (this.isFormValid) {
        this.$store.dispatch('auth/register', this.form)
          .then(_ => this.$router.push('/login'))
          .catch(error => this.$toasted.error(error, {duration: 3000}))
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

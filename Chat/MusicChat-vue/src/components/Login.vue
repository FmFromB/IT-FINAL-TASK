<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="mu-form">
      <mu-form-item label="Имя пользователя (логин)" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Пароль" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="setLogin">войти</mu-button>
        <mu-button @click="clear">сбросить</mu-button>
        <mu-button @click="goHome">на главную</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
  import $ from 'jQuery'

  export default {
    name: "Login",
    data() {
      return {
        login: '',
        password: '',
        usernameRules: [
          { validate: (val) => !!val, message: 'Обязательное поле' },
        ],
        passwordRules: [
          { validate: (val) => !!val, message: 'Вы не можете войти без пароля' },
        ],
        validateForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      },
      setLogin() {
        $.ajax({
          url: 'https://musicchat-django.herokuapp.com/auth/token/login/',
          type: "POST",
          data: {
            username: this.validateForm.username,
            password: this.validateForm.password
          },
          success: (response) => {
            alert("Добро пожаловать")
            sessionStorage.setItem('auth_token', response.data.attributes.auth_token)
            this.$router.push({ name: 'home' })
          },
          error: (response) => {
            if (response.status === 400) {
              alert("Логин или пароль неверен")
            }
          }
        })
      },
      goHome() {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style scoped>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>

<template>
  <mu-container>
    <mu-row class="text">
      Регистрация
    </mu-row>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item label="Имя" prop="first_name">
        <mu-text-field v-model="validateForm.first_name" prop="first_name"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Фамилия" prop="last_name">
        <mu-text-field v-model="validateForm.last_name" prop="last_name"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Имя пользователя (логин)" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Пароль" prop="password" :rules="passwordRules">
        <mu-text-field type="text" v-model="validateForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="email" prop="email">
        <mu-text-field type="text" v-model="validateForm.email" prop="email"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="setReg">Зарегистрироваться</mu-button>
        <mu-button @click="clear">Сбросить</mu-button>
        <mu-button @click="goHome">на главную</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
  import $ from 'jQuery'

  export default {
    name: "Reg",
    data() {
      return {
        usernameRules: [
          { validate: (val) => !!val, message: 'Обязательное поле' },
          { validate: (val) => val.length >= 3, message: 'Ваш логин не может быть короче 3 символов' }
        ],
        passwordRules: [
          { validate: (val) => !!val, message: 'Обязательное поле' },
          { validate: (val) => val.length >= 10, message: 'Пароль должен быть не короче 10 символов' },
        ],
        validateForm: {
          username: '',
          password: '',
          email: '',
          first_name: '',
          last_name: '',
        }
      }
    },
    methods: {
      goHome() {
        this.$router.push({ name: 'home' })
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          email: '',
          first_name: '',
          last_name: '',
        };
      },
      setReg() {
        $.ajax({
          url: 'https://musicchat-django.herokuapp.com/auth/users/',
          type: "POST",
          data: {
            username: this.validateForm.username,
            password: this.validateForm.password,
            email: this.validateForm.email,
            first_name: this.validateForm.first_name,
            last_name: this.validateForm.last_name,
          },
          success: (response) => {
            alert("Спасибо за регистрацию")
            this.$router.push({ name: 'login' })
          },
          error: (response) => {
            if (response.status === 400) {
              alert("Данные не корректны. Пожалуйста, проверьте Ваш пароль. Он должен содержать как минимум одну букву латинского алфавита, а также он не должен быть слишком простым")
            }
          }
        })
      },
    }
  }
</script>

<style scoped>
  .text{
      text-transform: uppercase;
  }
</style>

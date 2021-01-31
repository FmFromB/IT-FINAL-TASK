<template>
  <mu-container>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item label="Имя пользователя (логин)" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Пароль" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="Подтвердите пароль" help-text="Убедитесь, что пароли совпадают" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.confPassword" prop="password"></mu-text-field>
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
          { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Пароль должен быть не короче 10 символов' },
        ],
        validateForm: {
          username: '',
          password: '',
          confPassword: '',
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
          confPassword: '',
        };
      },
      setReg() {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
        $.ajax({
          url: 'http://127.0.0.1:8000/auth/users/',
          type: "POST",
          data: {
            username: this.validateForm.username,
            password: this.validateForm.password,
            confPassword: this.validateForm.confPassword
          },
          success: (response) => {
            alert("Спасибо за регистрацию")
            this.$router.push({ name: 'home' })
          },
          error: (response) => {
            if (response.status === 400) {
              alert("Данные не корректны")
            }
          }
        })
      },
    }
  }
</script>

<style scoped>
</style>

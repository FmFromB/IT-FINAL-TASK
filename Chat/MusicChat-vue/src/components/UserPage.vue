<template>
  <mu-col>
    <p class="text">Страница пользователя {{user.username}}</p>
    <mu-button flat slot="right" @click="goHome">Домашняя страница</mu-button>
    <small>Внимание не отправляйте пустую форму, если не хотете потерять данные</small>

    <mu-container class="form">
      <mu-container>
        Ваш Email: {{user.email}}
        <mu-text-field v-model="email"></mu-text-field>
        <mu-button round color="primary" @click="changeUserEmail">Сменить Email</mu-button>
      </mu-container>
      <mu-container>
        Ваше имя: {{user.first_name}}
        <mu-text-field v-model="first_name"></mu-text-field>
        <mu-button round color="primary" @click="changeUserName">Сменить имя</mu-button>
      </mu-container>
      <mu-container>
        Ваша фамилия: {{user.last_name}}
        <mu-text-field v-model="last_name"></mu-text-field>
        <mu-button round color="primary" @click="changeUserLastName">Сменить фамилию</mu-button>
      </mu-container>
    </mu-container>
  </mu-col>
</template>

<script>
  import $ from 'jQuery'
  import Home from '@/components/Home'

  export default {
    name: 'UserPage',
    components: {
      Home,
    },
    data() {
      return {
        user: '',
        email: '',
        first_name: '',
        last_name: '',
      }
    },
    created() {
      $.ajaxSetup({
        headers: { 'Authorization': "Token " + sessionStorage.getItem('auth_token') },
      });
    },
    mounted() {
      this.loadUser()
    },
    methods: {
      loadUser() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/auth/users/me/",
          type: "GET",
          success: (response) => {
            this.user = response.data.attributes
          }
        })
      },
      changeUserEmail() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/auth/users/me/",
          type: "PATCH",
          data: {
            email: this.email
          },
          success: (response) => {
            this.user = response.data.attributes
          }
        })
      },
      changeUserName() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/auth/users/me/",
          type: "PATCH",
          data: {
            first_name: this.first_name
          },
          success: (response) => {
            this.user = response.data.attributes
          }
        })
        this.first_name = ''
      },
      changeUserLastName() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/auth/users/me/",
          type: "PATCH",
          data: {
            last_name: this.last_name
          },
          success: (response) => {
            this.user = response.data.attributes
          }
        })
        this.last_name = ''
      },
      goHome() {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style scoped>
  .text{
    text-transform: uppercase;
  }

  .form{
    margin: 10% 20%;
  }
</style>

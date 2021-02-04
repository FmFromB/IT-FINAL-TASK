<template>
  <mu-container>
    <mu-appbar style="width: 100%;" color="primary" class="bar">
      ЫЫЫ
      <mu-button flat slot="right" v-if="!auth" @click="goLogin">Вход</mu-button>
      <mu-button flat slot="right" v-if="!auth" @click="goRegistrate">Зарегистрироваться</mu-button>
      <mu-button flat slot="right" v-else @click="logout">Выход</mu-button>
      <mu-button flat slot="right" v-if="auth" @click="GoUserPage">Личный кабинет</mu-button>
    </mu-appbar>
    <mu-row>
      <h1 v-if="!auth">Приветствуем Вас в самой прогрессивной сети, чтобы оставлять сообщения необходимо войти</h1>
      <h1 v-else></h1>
    </mu-row>
    <mu-row>
      <Room v-if="auth" @openDialog="openDialog"></Room>
      <Dialog v-if="dialog.show" :id="dialog.id"></Dialog>
    </mu-row>
  </mu-container>
</template>

<script>
  import Room from '@/components/rooms/Room'
  import Dialog from '@/components/rooms/Dialog'
  import UserPage from '@/components/UserPage'

  export default {
    name: 'Home',
    components: {
      Room,
      Dialog,
      UserPage
    },
    data() {
      return {
        dialog: {
          id: '',
          show: false,
        }
      }
    },
    computed: {
      auth() {
        if (sessionStorage.getItem("auth_token")) {
          return true
        }
      },
    },
    methods: {
      goLogin() {
        this.$router.push({name: 'login'})
      },
      logout() {
        sessionStorage.removeItem("auth_token")
        window.location = '/'
      },
      goRegistrate() {
        this.$router.push({ name: 'reg' })
      },
      GoUserPage() {
        this.$router.push({ name: 'usrpg' })
      },
      openDialog(id) {
        this.dialog.id = id
        this.dialog.show = true
      }
    },
  }
</script>

<style scoped>
  .bar{
      position: fixed;
      left: 0%;
      top: 0%;
  }
</style>

<template>
  <mu-col span="8">
    <mu-container class="dialog">
      <mu-row v-for="dialog in dialogs"
              direction="column"
              justify-content="start"
              align-items="end">
        <p><strong>{{dialog.user.username}}</strong></p>
        <p>{{dialog.text}}</p>
        <span>{{dialog.date}}</span>
      </mu-row>
    </mu-container>
    <mu-container class="message">
      <mu-row>
        <mu-text-field v-model="textarea"
                       placeholder="сообщение"
                       full-width>
        </mu-text-field>
        <mu-button round color="primary" @click="sendMessage">Отправить</mu-button>
        <AddUsers class="adduser" :room="id"></AddUsers>
      </mu-row>
    </mu-container>
  </mu-col>
</template>

<script>
  import $ from 'jQuery'
  import AddUsers from './AddUsers'

  export default {
    name: 'Dialog',
    props: {
      id: '',
    },
    components: {
      AddUsers
    },
    data() {
      return {
        dialogs: '',
        textarea: '',
      }
    },
    created() {
      $.ajaxSetup({
        headers: { 'Authorization': "Token " + sessionStorage.getItem('auth_token') },
      });
      this.loadDialog()
      setInterval(() => {
        this.loadDialog()
      }, 5000)
    },
    methods: {
      loadDialog() {
        $.ajax({
          url: "http://127.0.0.1:8000/api/v1/chat/chat/",
          type: "GET",
          data: {
            room: this.id
          },
          success: (response) => {
            this.dialogs = response.data.data
          }
        })
      },
      sendMessage() {
        $.ajax({
          url: "http://127.0.0.1:8000/api/v1/chat/chat/",
          type: "POST",
          data: {
            room: this.id,
            text: this.textarea
          },
          success: (response) => {
           this.loadDialog()
          },
          error: (response) => {
            alert(response.statusText)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .dialog {
    position: relative;
    border: 1px solid #000
  }
  .adduser{
    margin: 0 15px;
  }
  .message {
    position: relative;
    margin: 5% 0%;
  }
</style>

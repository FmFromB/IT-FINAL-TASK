<template>
  <mu-col span="8">
    <mu-container class="dialog">
      <mu-row v-for="dialog in dialogs"
              direction="column"
              justify-content="start"
              align-items="end"
              v-autoscroll:noscroll="'bottom'">
        <p><strong>{{dialog.user.username}} ({{dialog.user.first_name}} {{dialog.user.last_name}})</strong></p>
        <p>{{dialog.text}}</p>
      </mu-row>
    </mu-container>
    <mu-container class="message"id="app">
      <mu-row>
        <mu-text-field v-model="textarea"
                       placeholder="сообщение"
                       full-width>
        </mu-text-field>
        <mu-button round color="primary" @click="sendMessage">Отправить</mu-button>
      </mu-row>
    </mu-container>
  </mu-col>
</template>

<script>
  import $ from 'jQuery'
  import { autoscroll } from 'vue-autoscroll'

  export default {
    directives: {
      autoscroll
    },
    name: 'Dialog',
    props: {
      id: '',
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
          url: "https://musicchat-django.herokuapp.com/api/v1/chat/chat/",
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
          url: "https://musicchat-django.herokuapp.com/api/v1/chat/chat/",
          type: "POST",
          data: {
            room: this.id,
            text: this.textarea
          },
          success: (response) => {

           this.loadDialog()
          },
          error: (response) => {
            alert("Вы не можете отправить пустое сообщение")
          }
        }),
        this.textarea = ''
      },
      scrollToElement() {
        const el = this.$el.getElementsByClassName('scroll-to-me')[0];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
</script>

<style scoped>
  .dialog {
    position: absolute;
    overflow: auto;
    max-height: 746px;
    min-height: 0px;
    width: 100%;
    top: 10%;
    background-color: white;
    border-radius: 10px;
  }
  .adduser{
    margin: 0 15px;
  }
  .message {
    background-color: white;
    position: fixed;
    bottom: -12%;
    width: 39%;
    height: 15%;
    margin: 5% 0%;
    border-radius: 10px;
  }
</style>

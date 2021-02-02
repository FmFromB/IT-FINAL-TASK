<template>
  <mu-col>
    <mu-row>
      <mu-button class="btn-send" round color="primary" @click="addUser">Добавить пользователя</mu-button>
    </mu-row>
    <mu-col span="12" lg="5" sm="5" class="select">
      <mu-select label="Выберите пользователя" filterable v-model="options" full-width>
        <mu-option v-for="user in list"
                   :key="city"
                   :value="user.id">
          {{user.attributes.username}}
        </mu-option>
      </mu-select>
    </mu-col>
  </mu-col>

</template>

<script>
  import $ from 'jQuery'
  export default {
    name: "AddUsers",
    props: {
      room: '',
    },
    data() {
      return {
        options: '',
        list: '',
      }
    },
    created() {
      this.loadUsers()
    },
    methods: {
      loadUsers() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/api/v1/chat/users/",
          type: "GET",
          success: (response) => {
            this.list = response.data
          }
        })
      },
      addUser() {
        $.ajax({
          url: "https://musicchat-django.herokuapp.com/api/v1/chat/users/",
          type: "POST",
          data: {
            room: this.room,
            user: parseInt(this.options)
          },
          success: (response) => {
            alert("Пользователь добален")
          },
          error: (response) => {
            alert("Ошибка")
          }
        })
      }
    }
  }
</script>

<style scoped>
  .select{
    margin: -8% 40% ;
  }
</style>

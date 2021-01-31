<template>
  <mu-col span="4" sm="3" class="rooms_list">
    <mu-button @click="AddRoom">Создать комнату</mu-button>
    <div  v-for="room in rooms">
    <h3 @click="openDialog(room.id)">{{room.creator.username}}</h3>
    <small>{{room.date}}</small>
    </div>
  </mu-col>
</template>

<script>
  import $ from 'jQuery'
  import Dialog from '@/components/rooms/Dialog'

  export default {
    name: 'Room',
    components: {
      Dialog
    },
    data() {
      return {
        rooms: '',

      }
    },
    created() {
      $.ajaxSetup({
        headers: { 'Authorization': "Token " + sessionStorage.getItem('auth_token') },
      });
      this.loadRoom()
    },
    methods: {
      loadRoom() {
        $.ajax({
          url: "http://127.0.0.1:8000/api/v1/chat/room/",
          type: "GET",
          success: (response) => {
            this.rooms = response.data.data
          }
        })
      },
      openDialog(id) {
        this.$emit("openDialog", id)
      },
      AddRoom() {
        $.ajax({
          url: "http://127.0.0.1:8000/api/v1/chat/room/",
          type: "POST",
          success: (response) => {
            this.loadRoom()
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
  h3 {
    cursor: pointer
  }
  .rooms_list {
    margin: 0 10px;
    box-shadow: 1px 4px 5px #848181
  }
</style>

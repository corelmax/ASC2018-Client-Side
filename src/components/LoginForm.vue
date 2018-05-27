<template>
  <div class="login-form">
    <h1>Login</h1>
    <p v-if="error" class="error">{{error}}</p>
    <p><input class="input" v-model="username"/></p>
    <p><input class="input" type="password" v-model="password"/> </p>
    <p><button class="btn btn-submit" v-on:click="login">Login</button> </p>
  </div>
</template>

<script>
  import axios from 'axios'
  import dataStore from '../store/data'

    export default {
      name: "LoginForm",
      data: function() {
        return {
          error: null,
          username: '',
          password: '',
          sharedState: dataStore.state
        }
      },
      methods: {
        login: function() {
          axios.post('http://localhost:8000/v1/auth/login', {
            Username: this.username,
            password: this.password
          }).then(response => {

            this.sharedState.user = {
              isLoggedIn: true,
              username: this.username,
              role: response.data.Role,
              token: response.data.token
            }

            localStorage.setItem('user', this.sharedState.user)

            this.$router.replace("/")
          }).catch(err => {
            this.error = 'Invalid login'
          })
        }
      }
    }
</script>

<style scoped>
  .login-form {
    width: 50%;
    padding: 20px;
    border: 1px solid #cecece;
    box-shadow: black 5px 5px;
    text-align: center;
  }
</style>

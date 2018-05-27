<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <aside class="side">
          <div class="item action">
            <ul class="nav">
              <li v-if="!sharedState.user.isLoggedIn"><a href="#/login">Login</a></li>
              <li v-if="sharedState.user.isLoggedIn"><a href="#/" v-on:click="logout"><span>{{sharedState.user.username}}</span> Logout</a></li>
              <li v-if="sharedState.user.role == 'ADMIN'"><a href="#/setting">Setting</a></li>
            </ul>
          </div>
          <div class="item form">
            <h1 role="heading" class="heading">Bani Yas Travel</h1>
            <div class="panel-content">
              <form role="form">
                <div class="form-group">
                  <select class="input">
                    <option
                      v-for="place in sharedState.places"
                      v-bind:value="place.id">
                      {{place.name}}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="input">
                  <option
                    v-for="place in sharedState.places"
                    v-bind:value="place.id">
                    {{place.name}}
                  </option>
                  </select>
                </div>
                <div class="form-group form-content-right">
                  <button type="submit" class="btn btn-submit">Get Routes</button>
                </div>
              </form>
            </div>
          </div>
          <div class="item panel-list">
            <ul class="result-list">
              <li>
                <ul class="result-detail">
                  <li>
                    <label>From: </label>
                    <p>Lorem ipsum dolor sit amet sit.</p>
                  </li>
                  <li>
                    <label>To: </label>
                    <p>-</p>
                  </li>
                  <li>
                    <label>Time Schedule: </label>
                    <p>-</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="result-detail">
                  <li>
                    <label>From: </label>
                    <p>-</p>
                  </li>
                  <li>
                    <label>To: </label>
                    <p>-</p>
                  </li>
                  <li>
                    <label>Time Schedule: </label>
                    <p>-</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="result-detail">
                  <li>
                    <label>From: </label>
                    <p>-</p>
                  </li>
                  <li>
                    <label>To: </label>
                    <p>-</p>
                  </li>
                  <li>
                    <label>Time Schedule: </label>
                    <p>-</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <main class="map">
          <div class="map-container">
            <router-view/>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import dataStore from './store/data'
export default {
  name: 'App',
  data: function() {
    return {
      sharedState: dataStore.state
    }
  },
  methods: {
    logout: function() {
      dataStore.logout()
    }
  }
}
</script>

<style>

/* Preset */
*  {
  font-family: 'Segoe UI', 'Arial', 'sans-serif';
  outline: none;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  opacity: .7;
}
body {
  margin: 0 auto;
}

/* Layout */
.wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 1440px;
  height: auto;
  margin: auto;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  border: 1px solid #ddd;
}

/* Panel */
.panel-content {
  padding: 20px;
}
.panel-list {
  border-top: 2px solid #efefef;
}

/* Form */
.form-group {
  display: block;
}
.form-group:not(:last-child) {
  margin-bottom: 20px;
}

/* Result */
.result-list {
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
}
.result-list > li {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
  padding: 20px;
}
.result-list > li:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
.result-list > li:hover {
  background: #efefef;
}
.result-detail {
  margin: 0;
  padding: 0;
  list-style: none;
}
.result-detail li {
  display: flex;
  align-items: center;
}
.result-detail li:not(:last-child) {
  margin-bottom: 10px;
}
.result-detail label {
  font-weight: 500;
  width: 100px;
  font-size: .8em;
}
.result-detail p {
  flex: 1;
  margin: 0;
  padding: 0;
  font-size: .9em;
}

/* Side */
.side {
  background: white;
  width: 360px;
  position: relative;
  height: 100%;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.item {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

/** General **/
/* Nav */
.nav {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.nav a {
  display: block;
  padding: 15px;
  text-align: center;
}
.nav li {
  flex: 1;
  list-style: none;
}
.nav li:not(:last-child) {
  border-right: 1px solid #ddd;
}
/* Heading */
.heading {
  margin: 0;
  text-align: center;
  padding: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  color: #233f8b;
}
/* Inputs and Button */
.input {
  border: none;
  background: #efefef;
  border-radius: 4px;
  padding: 10px;
  color: gray;
}
.form-group .input {
  display: block;
  width: 100%;
}
.btn {
  background: #233f8b;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-transform: capitalize;
  font-size: 14px;
  cursor: pointer;
  border: none;
  padding: 3px 10px;
  padding-bottom: 5px;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.btn:active {
  background: #152b55;
}
.form-content-right {
  text-align: right;
}
/* Map */
.map {
  flex: 1;
  height: 100%;
  overflow: scroll;

}
.map-container {
  position: relative;
  width: 1280px;
  height: 800px;
  overflow: hidden;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>

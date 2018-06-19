<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
        disable-route-watcher
        v-if="this.username"
      >
        <v-list dense>
          <v-list-tile >
            <v-list-tile-action>
      <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Node415" style="text-decoration:none" ><h3 @click="closedrawer">Sw415</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Node4503"style="text-decoration:none"><h3 @click="closedrawer">Sw4503</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Node3850"style="text-decoration:none"><h3 @click="closedrawer">Sw3850</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Node124"style="text-decoration:none"><h3 @click="closedrawer">Sw124</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Node330A"style="text-decoration:none"><h3 @click="closedrawer">Sw330</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/Nodeshop"style="text-decoration:none"><h3 @click="closedrawer">Swshop</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/NodePsad"style="text-decoration:none"><h3 @click="closedrawer">Sw พวงแสด</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
                <div style="font-size:3em; color:Tomato"><i class="fab fa-nintendo-switch fa-sm"></i></div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/node3"style="text-decoration:none"><h3 @click="closedrawer">Node Unmanage</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar
      color="cyan"
      dark fixed app
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text" >{{username}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <iframe src="https://free.timeanddate.com/clock/i61l0dq7/n28/fn16/fs16/fcfff/tct/pct/tt1/tw0" frameborder="0" width="146" height="21" allowTransparency="true" class="not-active"></iframe>
        <v-btn color="orange darken-2" dark v-on:click="signOut" v-if="this.logoutcheck">
        Logout
        </v-btn>
      </v-toolbar>
      <v-container>
<router-view></router-view>
</v-container>
      <v-footer color="cyan" app>
        <span class="white--text">&copy; FITM 2018</span>
      </v-footer>
    </v-app>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  data () {
    return {
      logoutcheck: '',
      drawer: false,
      value: '',
      username: ''
    }
  },
  created () {
    window.scrollTo(0, 0)
    this.$router.replace('/Node415')
  },
  mounted () {
    console.log(firebase.auth().currentUser.email)
    this.logoutcheck = firebase.auth().currentUser.email
    var res = this.logoutcheck.split('@')
    this.username = res[0]
  },
  computed: {
    user () {
      return this.$store.getters.getUser
      // return this.$store.getters.currentUser
      // console.log(this.$store.mutations.currentUser)
    }
  },
  methods: {
    setUser: function () {
      this.$store.dispatch('setUser')
    },
    signOut: function () {
      if (this.drawer === true) {
        this.drawer = false
      }
      firebase.auth()
      .signOut()
      .then(() => {
        this.$router.replace('/')
      })
    },
    closedrawer: function () {
      this.drawer = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.not-active {
  pointer-events: none;
  cursor: default;
}
</style>

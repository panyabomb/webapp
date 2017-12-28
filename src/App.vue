<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>Node</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/" style="text-decoration:none"><h3>node1</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>Node</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/node2"style="text-decoration:none"><h3>node2</h3></router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
      color="cyan"
      dark fixed app
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
        <v-toolbar-title class="white--text" >Monitoring</v-toolbar-title>
        <v-spacer></v-spacer>
        <iframe src="http://free.timeanddate.com/clock/i61l0dq7/n28/fn16/fs16/fcfff/tct/pct/tt1/tw0" frameborder="0" width="146" height="21" allowTransparency="true" class="not-active"></iframe>
      </v-toolbar>
      <v-container>
<router-view></router-view>
</v-container>
      <v-footer color="cyan" app>
        <span class="white--text">&copy; wipoo + panya 2017</span>
      </v-footer>
    </v-app>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: false,
      value: ''
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

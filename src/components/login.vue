<template>

    <v-content>
      <v-container >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="cyan">
                <v-toolbar-title>Fitm Monitoring Login</v-toolbar-title>
                <v-spacer></v-spacer>

                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="email" name="login" label="Login" type="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" v-model="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-progress-circular indeterminate color="green" v-if="this.load"></v-progress-circular>
                <v-btn color="cyan" v-on:click="signIn()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

</template>

<script>
import Firebase from 'firebase'
export default {
  data: () => ({
    email: '',
    drawer: false,
    password: '',
    load: ''
  }),
  created () {
    window.scrollTo(0, 0)
  },
  props: {
    source: String
  },
  methods: {
    signIn: function () {
      this.load = 'on'
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/home')
          },
          error => {
            this.load = ''
            alert(error.message)
          }
        )
    }
  }
}
</script>

<style>
.application.theme--light {
  background: none
}
</style>

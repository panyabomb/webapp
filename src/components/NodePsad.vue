<template>
    <v-app id="inspire">
      <v-layout>
        <v-flex d-flex xs12 >
          <v-card color="blue-grey darken-2" class="white--text" >
            <v-card-title primary-title>
              <!-- <btn class="button" v-on:click="signOut" v-if="user">Sign-out</btn> -->
              <div>
                <h2 class="headline mb-1">Node</h2>
                <h2 class="headline mb-1">{{namenode}}</h2>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex d-flex xs6 >
          <v-card color="green" class="white--text" v-if="nodeonline.alive2">
            <v-card-title primary-title>
              <div>
                <h2 class="headline mb-0">Online</h2>
              </div>
            </v-card-title>
          </v-card>
          <v-card color="red" class="white--text" v-else>
            <v-card-title primary-title>
              <div>
                <h2 class="headline mb-0">Offline</h2>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex d-flex xs6 >
          <v-card>
            <v-card-text class="px-0">
              <div>
                <h3 class="headline mb-0">Connected</h3>
                <div><h1>{{value.onlinenow}}</h1></div>
                <div>
                  <h3>Devices</h3>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
</br>
<v-layout>
  <v-flex d-flex xs4 >
    <v-card>
        <v-card-text class="px-0">
        <div>
          <h3 class="headline mb-0">CPU Usage</h3>

          <div><h2 style="color:#ff6666" >{{value.cpu}} %</h2></div>
        </div>
      </v-card-text>

    </v-card>
  </v-flex>
  <v-flex d-flex xs4 >
    <v-card>
      <v-card-text class="px-0">
        <div>
          <h3 class="headline mb-0">Memory Used</h3>
          <div><h2 style="color:#ff6666">{{value.memory ? value.memory.toFixed(3) : 'N/A'}} %</h2></div>
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs4 >
    <v-card>
      <v-card-text class="px-0">
        <div>
          <h3 class="headline mb-0">Temp</h3>
          <div><h2 style="color:#ff6666" v-if="value.temparature">{{value.temparature.valueswtemp}} °C</h2></div>
        </div>
    </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</br>
      <v-layout>
      <v-flex d-flex xs6 >
        <v-card >
          <v-card-text class="px-0">
            <div>
              <h3 class="headline mb-0">Download</h3>
              <div >
                <v-progress-circular
                  v-bind:size="100"
                  v-bind:width="15"
                  v-bind:rotate="90"
                  v-bind:value="parseInt(lasdown) ? parseInt(lasdown) : 0"
                  color="green"
                  >
                  <h3>{{lasdown}}</h3> Mb/s
                </v-progress-circular>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs6 >
        <v-card>
        <v-card-text class="px-0">
            <div>
              <h3 class="headline mb-0">Upload</h3>
              <div >
                <v-progress-circular
                  v-bind:size="100"
                  v-bind:width="15"
                  v-bind:rotate="90"
                  v-bind:value="parseInt(lasup) ? parseInt(lasup) : 0"
                  color="green"
                  >
                  <h3>{{lasup}}</h3> Mb/s
                </v-progress-circular>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
</br>
      <v-layout>
        <v-flex d-flex xs6 >
          <v-card>
            <v-card-text class="px-0">
              <div>
                <h3 class="headline mb-0">Humidity</h3>
                <h3 class="headline mb-0">Room</h3>
                <div><h2 style="color:#ff6666" v-if="value.temparature">{{value.temparature.valueh >= 0 ? value.temparature.valueh : 'N/A'}} %</h2></div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs6 >
          <v-card>
            <v-card-text class="px-0">
              <div>
                <h3 class="headline mb-0">Temperature</h3>
                <h3 class="headline mb-0">Room</h3>
                <div><h2 style="color:#ff6666" v-if="value.temparature">{{value.temparature.valuet != 'Wrong' ? value.temparature.valuet : 'N/A'}} °C</h2></div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </br>
    <v-layout>
      <v-flex d-flex xs4 >
        <v-card>
          <v-card-text class="px-0">
            <div >
              <h3 class="headline mb-0">Packet</h3>
              <h3 class="headline mb-0">loss</h3>
            <div><h2 style="color:#ff6666" >{{parseInt(value.packetloss)}} %</h2></div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs4 >
        <v-card>
          <v-card-text class="px-0">
            <div>
              <h3 class="headline mb-0">Utilize</h3>
              <h3 class="headline mb-0">In</h3>
              <div><h2 style="color:#ff6666">{{this.sumIn ? this.sumIn.toFixed(3) : 'N/A'}} %</h2></div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs4 >
        <v-card>
          <v-card-text class="px-0">
            <div>
              <h3 class="headline mb-0">Utilize</h3>
              <h3 class="headline mb-0">Out</h3>
              <div><h2 style="color:#ff6666">{{this.sumOut ? this.sumOut .toFixed(3) : 'N/A'}} %</h2></div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </br>

  <v-layout >
    <v-flex d-flex xs12 >
      <v-card>

           <v-card-text class="px-0">
            <h3 class="headline mb-0">Main Link</h3></br>
            <div>
              <v-layout>
                <v-flex d-flex xs6 >
                  <i class="fas fa-download" style="font-size:3em; color:green "></i>
                  <h2 style="color:green" v-if="value.mainlink">{{value.mainlink.in}} Mb</h2>
                  </v-flex>
                  <v-flex d-flex xs6 >
                    <i class="fas fa-upload" style="font-size:3em; color:Tomato "></i>
                    <h2 style="color:#ff6666" v-if="value.mainlink">{{value.mainlink.out}} Mb</h2>
                    </v-flex>
                  </v-layout>
          </div>
        </div>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>

</br>
  <v-layout>
    <v-flex d-flex xs6 >
      <v-card>
      <v-card-text class="px-0">
          <div>
<h3 class="headline mb-0">Inbound</h3>
<h3 class="headline mb-0">Alert</h3>

            <center><v-select
              style="width: 150px;"
                v-bind:items="items"
                v-model="inbo"
                :label="'Alert '+ nodeonline.limitin"
                single-line
                bottom
              ></v-select></center>
              </div>
              <div>
              <v-btn @click="inboundLimit" color="primary">Submit</v-btn>
            </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex xs6 >
      <v-card>
        <v-card-text class="px-0">
            <div>
        <h3 class="headline mb-0">Outbound</h3>
        <h3 class="headline mb-0">Alert</h3>

            <center><v-select
                style="width: 150px;"
                v-bind:items="items"
                v-model="outbo"
                :label="'Alert '+ nodeonline.limitout"
                single-line
                bottom
              ></v-select></center>
              </div>
              <div>
         <v-btn @click="outboundLimit" color="primary">Submit</v-btn>
            </div>
      </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</br>

<div style="float:left;" v-if="datacollection">
<h3 class="headline mb-0">Inbound / Outbound (Mb)</h3></br>
<line-chart :chart-data="datacollection"
  :options="{responsive: true, maintainAspectRatio: false, elements: { point: { radius: 1 }
   }}"
  :height="250"
  ></line-chart>
</div>
</br>
<div style="float:left;" v-if="datacollectionspeed">
<h3 class="headline mb-0">Download / Upload (Mb/s)</h3></br>
<line-chart :chart-data="datacollectionspeed"
:options="{responsive: true, maintainAspectRatio: false, elements: { point: { radius: 1 }
 }}"
:height="250"
></line-chart>
</div>
</v-app>
</template>

<script>
import LineChart from './lineChart.js'
import {Data, alive} from '@/components/firebase'
import firebase from 'firebase'
export default {
  components: {
    LineChart
  },
  computed: {
    user () {
      return this.$store.getters.getUser
      // return this.$store.getters.currentUser
      // console.log(this.$store.mutations.currentUser)
    }
  },
  async mounted () {
    await this.$bindAsArray('todos', Data, null, () => {
      // console.log(this.todos)
      var vm = this
      let getData = this.todos.find(datas => datas.node === 'NodePsad')
      vm.value = getData
      vm.valueInbound = Object.values(vm.value.inbound)  // แปลงจาก object เป็น array
      vm.valueInbound = vm.valueInbound.map(data => data.value).reverse().slice(0, 12).reverse()
      // console.log(vm.valueInbound)
      vm.valueOutbound = Object.values(vm.value.outbound)
      vm.valueOutbound = vm.valueOutbound.map(data => data.value).reverse().slice(0, 12).reverse()
      vm.label = Object.values(vm.value.inbound)
      vm.label = vm.label.map(data => data.time).reverse().slice(0, 12).reverse()
      // this.fillData()
      vm.valueUp = Object.values(vm.value.speedtest)
      vm.valueUp = vm.valueUp.map(data => data.valueup).reverse().slice(0, 12).reverse()
      vm.valueDown = Object.values(vm.value.speedtest)
      vm.valueDown = vm.valueDown.map(data => data.valuedown).reverse().slice(0, 12).reverse()
      vm.speedlabel = Object.values(vm.value.speedtest)
      vm.speedlabel = vm.speedlabel.map(data => data.time).reverse().slice(0, 12).reverse()
      // calutilize
      let inbound1 = 0
      let inbound2 = 0
      let outbound1 = 0
      let outbound2 = 0
      inbound1 = vm.valueInbound[vm.valueInbound.length - 1]
      inbound2 = vm.valueInbound[vm.valueInbound.length - 2]
      outbound1 = vm.valueOutbound[vm.valueOutbound.length - 1]
      outbound2 = vm.valueOutbound[vm.valueOutbound.length - 2]
      console.log(inbound1)
      console.log(inbound2)
      this.sumIn = (inbound2 - inbound1) * 100
      this.sumOut = (outbound2 - outbound1) * 100
      this.sumIn = this.sumIn / (60 * vm.value.sumInterface)
      this.sumOut = this.sumOut / (60 * vm.value.sumInterface)
      this.sumIn = Math.abs(this.sumIn)
      this.sumOut = Math.abs(this.sumOut)
      if (isNaN(this.sumIn)) this.sumIn = 0
      if (isNaN(this.sumOut)) this.sumOut = 0
      console.log(this.sumIn)
      console.log(this.sumOut)
      // end
      var myarray = vm.valueUp
      vm.lasdown = myarray[myarray.length - 1]
      myarray = vm.valueDown
      vm.lasup = myarray[myarray.length - 1]
      this.fillData()
      this.fillDataspeed()
      this.check = 1
      this.namenode = vm.value.node.substring(4)
      // this.$unbind('todos')
    })
    await this.$bindAsArray('todoscheck', alive, null, () => {
      this.nodeonline = this.todoscheck.find(datas => datas.nodeName === 'NodePsad')
    })
  },
  data () {
    return {
      nameau: '',
      datacollection: null,
      datacollectionspeed: null,
      drawer: false,
      value: '',
      valueInbound: [],
      valueOutbound: [],
      label: [],
      valueUp: [],
      valueDown: [],
      speedlabel: [],
      lasdown: null,
      lasup: null,
      valuet: [],
      valueh: [],
      lasT: null,
      lasH: null,
      items: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
      inbo: '',
      outbo: '',
      todos: '',
      todoscheck: '',
      newdata: '',
      check: '',
      nodeonline: '',
      namenode: '',
      sumIn: '',
      sumOut: ''
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  watch: {
    todos: function (newval) {
      if (this.check === 1) {
        var vm = this
        let getData = this.todos.find(datas => datas.node === 'NodePsad')
        vm.value = getData
        vm.valueInbound = Object.values(vm.value.inbound)
        vm.valueInbound = vm.valueInbound.map(data => data.value).reverse().slice(0, 12).reverse()
        vm.valueOutbound = Object.values(vm.value.outbound)
        vm.valueOutbound = vm.valueOutbound.map(data => data.value).reverse().slice(0, 12).reverse()
        vm.label = Object.values(vm.value.inbound)
        vm.label = vm.label.map(data => data.time).reverse().slice(0, 12).reverse()
          // this.fillData()
        vm.valueUp = Object.values(vm.value.speedtest)
        vm.valueUp = vm.valueUp.map(data => data.valueup).reverse().slice(0, 12).reverse()
        vm.valueDown = Object.values(vm.value.speedtest)
        vm.valueDown = vm.valueDown.map(data => data.valuedown).reverse().slice(0, 12).reverse()
        vm.speedlabel = Object.values(vm.value.speedtest)
        vm.speedlabel = vm.speedlabel.map(data => data.time).reverse().slice(0, 12).reverse()
        let inbound1 = 0
        let inbound2 = 0
        let outbound1 = 0
        let outbound2 = 0
        inbound1 = vm.valueInbound[vm.valueInbound.length - 1]
        inbound2 = vm.valueInbound[vm.valueInbound.length - 2]
        outbound1 = vm.valueOutbound[vm.valueOutbound.length - 1]
        outbound2 = vm.valueOutbound[vm.valueOutbound.length - 2]
        console.log(inbound1)
        console.log(inbound2)
        this.sumIn = (inbound2 - inbound1) * 100
        this.sumOut = (outbound2 - outbound1) * 100
        this.sumIn = this.sumIn / (60 * vm.value.sumInterface)
        this.sumOut = this.sumOut / (60 * vm.value.sumInterface)
        this.sumIn = Math.abs(this.sumIn)
        this.sumOut = Math.abs(this.sumOut)
        if (isNaN(this.sumIn)) this.sumIn = 0
        if (isNaN(this.sumOut)) this.sumOut = 0
        console.log(this.sumIn)
        console.log(this.sumOut)
        var myarray = vm.valueUp
        vm.lasup = myarray[myarray.length - 1]
        myarray = vm.valueDown
        vm.lasdown = myarray[myarray.length - 1]
        this.fillData()
        this.fillDataspeed()
            // this.$unbind('todos')
          // })
        // }, 2000)
        console.log('change')
      } else {
        console.log('nochange')
      }
    },
    todoscheck: function (newval) {
      if (this.check === 1) {
        this.nodeonline = this.todoscheck.find(datas => datas.nodeName === 'NodePsad')
        console.log('online-change')
      } else {
        console.log('online-nochange')
      }
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.label,
        datasets: [
          {
            label: 'Outbound',
            backgroundColor: 'rgba(196, 93, 105, 0.3)',
            data: this.valueOutbound
          }, {
            label: 'Inbound',
            backgroundColor: 'rgba(32, 162, 219, 0.3)',
            data: this.valueInbound
          }
        ]
      }
    },
    fillDataspeed () {
      this.datacollectionspeed = {
        labels: this.speedlabel,
        datasets: [
          {
            label: 'Download',
            backgroundColor: 'rgba(196, 93, 105, 0.3)',
            data: this.valueDown
          }, {
            label: 'Upload',
            backgroundColor: 'rgba(32, 162, 219, 0.3)',
            data: this.valueUp
          }
        ]
      }
    },
    inboundLimit () {
      // var key = this.dataTouse.find(datas => datas.node === 'NodePsad')
      if (this.inbo !== '') {
        firebase.database().ref('/alive/' + this.value['.key']).update({
          limitin: this.inbo
        })
      } else {
        console.log('epmtyinbo')
      }
    },
    outboundLimit () {
      // var key = this.dataTouse.find(datas => datas.node === 'NodePsad')
      if (this.outbo !== '') {
        firebase.database().ref('/alive/' + this.value['.key']).update({
          limitout: this.outbo
        })
      } else {
        console.log('epmtyoutbo')
      }
    },
    signOut: function () {
      firebase.auth()
      .signOut()
      .then(() => {
        this.$router.replace('/')
      })
    }
  }
}
</script>
<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>

<template>
    <v-app id="inspire">
      <v-layout>
        <v-flex d-flex xs12 >
          <v-card color="blue-grey darken-2" class="white--text" >
            <v-card-title primary-title>
              <div>
                <h2 class="headline mb-0">{{value.node}}</h2>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex d-flex xs6 >
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">OnlineNow</h3>
                <div><h1>{{value.onlinenow}}</h1></div>
                <div>
                  <h3>Devices</h3>
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
</br>
      <v-layout>
      <v-flex d-flex xs6 >
        <v-card >
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Download</h3>
              <div >
                <v-progress-circular
                  v-bind:size="100"
                  v-bind:width="15"
                  v-bind:rotate="90"
                  v-bind:value="lasdown"
                  color="green"
                  >
                  <h3>{{lasdown}}</h3> Mb/s
                </v-progress-circular>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex d-flex xs6 >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Upload</h3>
              <div >
                <v-progress-circular
                  v-bind:size="100"
                  v-bind:width="15"
                  v-bind:rotate="90"
                  v-bind:value="lasup"
                  color="green"
                  >
                  <h3>{{lasup}}</h3> Mb/s
                </v-progress-circular>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      </v-layout>

    </br>
    <v-layout>
      <v-flex d-flex xs6 >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Packetloss</h3>
            </br><div><h2>{{value.packetloss}} </h2></div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Utilization</h3>
              <div><h3>{{value.utilize}} %</h3></div>
              <v-progress-linear value="value.utilize" height="20" color="info"></v-progress-linear>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </br>

<div id="wrapper" >
  <h3 class="headline mb-0" >Inbound / Outbound (Mb)</h3></br>
    <line-chart :chart-data="datacollection"
    :options="{responsive: true, maintainAspectRatio: false, elements: { point: { radius: 2 } }}"
    :height="150"
    ></line-chart>
  </br>
  </div>

<h3 class="headline mb-0" >Download / Upload (Mb/s)</h3></br>
<line-chart :chart-data="datacollectionspeed"
:options="{responsive: true, maintainAspectRatio: false, elements: { point: { radius: 2 } }}"
:height="150"
></line-chart>

</v-app>
</template>

<script>
import LineChart from './lineChart.js'
import {Data} from '@/components/firebase'
export default {
  components: {
    LineChart
  },
  mounted () {
    this.fillData()
    this.fillDataspeed()
  },
  data () {
    return {
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
      lasup: null
    }
  },
  created () {
    setTimeout(() => {
      var vm = this
      let getData = this.dataTouse.find(datas => datas.node === 'Node1')
      console.log(getData)
      vm.value = getData
      vm.valueInbound = vm.value.inbound.map(data => data.value)
      vm.valueOutbound = vm.value.outbound.map(data => data.value)
      vm.label = vm.value.inbound.map(data => data.date + ' ' + data.time)
      this.fillData()
      vm.valueUp = vm.value.speedtest.map(data => data.valueup)
      vm.valueDown = vm.value.speedtest.map(data => data.valuedown)
      vm.speedlabel = vm.value.speedtest.map(data => data.date + ' ' + data.time)
      this.fillDataspeed()
      var myarray = vm.value.speedtest.map(data => data.valuedown)
      vm.lasdown = myarray[myarray.length - 1]
      myarray = vm.value.speedtest.map(data => data.valueup)
      vm.lasup = myarray[myarray.length - 1]
    }, 3000)
  },
  firebase: {
    dataTouse: Data
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
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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

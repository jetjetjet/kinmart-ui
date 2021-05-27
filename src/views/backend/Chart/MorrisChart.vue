<template>
   <b-container fluid="">
      <b-row>
      <b-col lg="6" v-for="(item,index) in charts" :key="index">
        <card>
          <template v-slot:headerTitle>
            <h4>{{ item.title }}</h4>
          </template>
          <template v-slot:body>
            <MorrisCharts :element="item.type+index" :type="item.type" :xKeys="item.xKeys" :data="item.bodyData" :colors="item.colors" :yKeys="item.yKeys" :labels="item.labels"/>
          </template>
        </card>
      </b-col>
    </b-row>
   </b-container>
</template>
<script>
import MorrisCharts from '../../../components/charts/MorrisChart'
export default {
    name:'MorrisChart',
    components:{
       MorrisCharts
    },
  data () {
    return {
      charts: [
        {
          title: 'Line Chart',
          type: 'line',
          bodyData: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
          ],
          colors: [ '#4788ff' ],
          xKeys: 'year',
          yKeys: [ 'value' ],
          labels: ['value']
        },
        {
          title: 'Bar Chart',
          type: 'bar',
          bodyData: [
            {x: '2011 Q1', y: 3, z: 2, a: 3},
            {x: '2011 Q2', y: 2, z: null, a: 1},
            {x: '2011 Q3', y: 0, z: 2, a: 4},
            {x: '2011 Q4', y: 2, z: 4, a: 3}
          ],
          xKeys: 'x',
          yKeys: ['y', 'z', 'a'],
          labels: [ 'Y', 'Z', 'A'],
          colors: ['#4788ff', '#fe721c', '#37e6b0']
        },
        {
          title: 'Area Chart',
          type: 'area',
          bodyData: [
             {y: '2011 Q1', item1: 2666, item2: 2666},
              {y: '2011 Q2', item1: 2778, item2: 2294},
              {y: '2011 Q3', item1: 4912, item2: 1969},
              {y: '2011 Q4', item1: 3767, item2: 3597},
              {y: '2012 Q1', item1: 6810, item2: 1914},
              {y: '2012 Q2', item1: 5670, item2: 4293},
              {y: '2012 Q3', item1: 4820, item2: 3795},
              {y: '2012 Q4', item1: 15073, item2: 5967},
              {y: '2013 Q1', item1: 10687, item2: 4460},
              {y: '2013 Q2', item1: 8432, item2: 5713}
          ],
          xKeys: 'y',
          yKeys: [ 'item1', 'item2' ],
          labels: [ 'Item 1', 'Item 2' ],
          colors: ['#75e275', '#75bcff']
        },
        {
          title: 'Donut Chart',
          type: 'donut',
          bodyData: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
          ],
          colors: [ "#4788ff", "#ff4b4b", "#37e6b0"],
          yKeys: [],
          xKeys: '',
          labels: []
        }
      ]
    }
  }
}
</script>
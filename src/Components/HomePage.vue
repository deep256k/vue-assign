<template>
    <div class="center-container">
        <h2>Home page</h2>
     <table>
  <tr>
    <th v-for = "heading in tableHeading" :key="heading.ids">{{heading}}</th>
    <th></th>
  </tr>
  <tr v-for = "(data,i) in userData.data" :key= "data.id">
    <td>{{data.name}}</td>
    <td>{{data.company.name}}</td>
    <td><button class="selct-button" @click="navigateToPurpose(i)">select</button></td>
  </tr>
</table>
    </div>
</template>
<script>

import axios from 'axios'
export default {
 data(){
        return{
            tableHeading : ["Name","Company Name"],
            userData:'',
        }
 },
 created(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const data = res
        this.userData = data;
      }).catch(err => console.log("error is",err))
 },
 methods:{
     navigateToPurpose(i){
     this.$router.push(`/posts/${this.userData.data[i].id}`)
     }
 }

}
</script>
<style scoped lang = "scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  td, th {
  text-align: left;
  padding: 8px;
}
tr{
    border-bottom: 1px solid #eee;
}
tr td:first-of-type{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #006778;
}
tr th{
  font-family: HelveticaNeue;
  font-size: 16px;
  color:#022737;
}
.selct-button{
  width: 95px;
}
}
</style>
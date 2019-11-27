<template>
    <div class="center-container">
        <h2>Posts page</h2>
        <div blog-container>
        <a class = "user-post" v-for = "(post,i) in userPost.data" :key="post.id" @click = "navigateToDetails(i)">{{post.title}}</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:this.$route.params.id,
            userPost:''
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}&skip=0&limit=10`).then(res => {
        const blogData = res
        this.userPost = blogData;
      }).catch(err => console.log("error is",err))
    },
    methods:{
        navigateToDetails(i){
            this.$router.push(`/details/${this.userPost.data[i].id}`)
        }
    }
}
</script>
<style scoped lang= "scss">

</style>
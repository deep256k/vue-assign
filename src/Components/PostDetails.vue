<template>
<div class="center-container">
        <h2>Post Details Page</h2>    
    <p class="blog-title">{{blogDetails.title}}</p>
    <button class = "selct-button delete-post" @click = "deletePost" >Delete Post</button>
    <p class="blog-content">{{blogDetails.body}}</p>
    <button class = "selct-button" @click="showComments()">Comments</button>
    <button class = "selct-button" v-if = "showbutton" @click="hideComments()">Hide Comments</button>
    <div v-if = "show">
    <p class = "user-post comment-details" v-for = "data in commentData" :key="data.id">{{data.body}}</p>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:this.$route.params.id,
            blogDetails:'',
            commentData:'',
            show:true,
            showbutton : false
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(res => {
        const blogData = res
        this.blogDetails = blogData.data;
      }).catch(err => console.log("error is",err))
    },
    methods:{
        showComments(){
             this.show = true;
             this.showbutton = true;
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`).then(res => {
            const commentDatas = res
            this.commentData = commentDatas.data;
      }).catch(err => console.log("error is",err))
        },

          hideComments(){
       this.show = false;
       this.showbutton = false;
    },
    deletePost(){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(res =>{
            this.$router.push('/')
        })
    }
    },
  
}
</script>
<style scoped lang = "scss">
.blog-title{
    font-family: BerkeleyStd;
    font-size: 20px;
    color: #022737;
    display: inline-block;

}
.delete-post{
    float: right;
}
.blog-content{
    margin-bottom: 50px;
}
.comment-details{
    margin-top: 50px;
}
</style>
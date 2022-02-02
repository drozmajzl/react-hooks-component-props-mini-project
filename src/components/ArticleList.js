import react from "react";
import Article from "./Article.js"

function ArticleList(props){
    const arr = props.posts;
    console.log(arr)
    const pass = arr?.map((post) => { return(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    )})
   return(
       <main>{pass}</main>
   )
}

export default ArticleList;
import { useContext, useState } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"

const PostList = () => {

	const { posts } = useContext(PostListContext)
	const [searchInput, setSearchInput] = useState('')
	const filterPost = posts.filter(post => {
		return post.topic.toLowerCase().includes(searchInput.toLowerCase())
	})
    

	return(<>
		<form className="d-flex flex-column align-items-center">
		<div className="mb-3">
		  <input
			type="text"
			name="name"
			placeholder="поиск по постам"
			className="form-control"
			id="exampleInputEmail1"
			onChange={(e)=> setSearchInput(e.target.value)}
			value={searchInput}
		  />
		</div>
	  </form>

			<div className="row row-cols-1 mx-5 " >
				{filterPost.length ? filterPost.map((post, i)=> {
						return( 			
					<PostItem 
						key={post.id}
						index={i} 
						id={post.id} 
						topic={post.topic}
						image = {post.image}
						input={post.input}
						tags={post.tags}
					/>
						)
					}) :<p>В данный момент ваша лента пуста</p>
				}
			</div>	
</>
	   )
	}

export default PostList
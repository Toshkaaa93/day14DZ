import { motion } from "framer-motion"
import { useContext } from "react"
import { PostListContext } from "../../../../contexts/PostListContext"
const { Link } = require('react-router-dom')


  const animations = {
	start : {
	  opacity: 0,
	   y: 100, 
	   rotate: 180 
	},
	end: {
	  opacity: 1,
	   y: 0,
	  rotate: 0,
	  transition: {
		duration: 2
	  },
	}
  }


const PostItem = ({ id, index, topic, image, input, tags }) => {

	const { deletePost } = useContext(PostListContext)
	const deleteHandler = () => deletePost(id)

	return (

		<motion.div variants={animations} initial='start' animate='end' className="card card m-2 bg-primary p-2 text-dark bg-opacity-10  shadow p-3 mb-5 bg-body rounded text-center" style={{ width: '25rem' }}>
			<img src={image} className="card-img-top" alt='img' />
			<div className="card-body">
				<h5 className="card-title m-1">{index + 1}. {topic}</h5>
				<p className="card-text">{input}</p>
				<p ><small className="text-muted">#{tags}</small> </p>
				<button onClick={deleteHandler} type="button" className="btn btn-primary
				 ">Удалить пост</button>
				<p className="m-1"><Link className="link-primary" to={`/${id}`}>Детали</Link></p>
			</div>
		</motion.div>
	)
}

export default PostItem
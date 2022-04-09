import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"


function ModalInput({ onSubmit, topic = '', image = '', input = '', tags = '' }) {


  const [title, setTitle] = useState(topic)
  const [pic, setPic] = useState(image)
  const [word, setWord] = useState(input)
  const [tag, setTag] = useState(tags)

  const { posts } = useContext(PostListContext)
  const { id } = useParams()
  const { closeModal } = useContext(PostListContext)
  const { LSPostsKey } = useContext(PostListContext)

  const indexPost = posts.findIndex((post) => post.id === +id)


  posts[indexPost].image = pic
  posts[indexPost].topic = title
  posts[indexPost].input = word
  posts[indexPost].tags = tag

  const changeTitle = (e) => setTitle(e.target.value)
  const changePic = (e) => setPic(e.target.value)
  const changeWord = (e) => setWord(e.target.value)
  const changeTag = (e) => setTag(e.target.value)

  const createSubmit = (e) => {
    e.preventDefault()

    const wordTrim = word.trim()
    const titleTrim = title.trim()
    const picTrim = pic.trim()
    const tagTrim = tag.trim()
    if (wordTrim && titleTrim && picTrim && tagTrim) {

      setTitle(title)
      setPic(pic)
      setWord(word)
      setTag(tag)
    }

    localStorage.setItem(LSPostsKey, JSON.stringify(posts))
    closeModal()
  };



  return (
    <form onSubmit={createSubmit}>
      <div className="mb-3 d-flex align-items-center " >
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Заголовок поста"
          value={title}
          onChange={changeTitle}
        />
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ссылка на картинку"
          value={pic}
          onChange={changePic}
        />
        <input
          type="text"
          className="form-control  bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Текст поста"
          value={word}
          onChange={changeWord}
        />
        <input
          type="text"
          className="form-control bg-primary p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Добавить свой тег"
          value={tag}
          onChange={changeTag}
        />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button type="submit" className="btn btn-primary m-1 ">
          Редактировать пост
        </button>
      </div>
    </form>
  )
}

export default ModalInput
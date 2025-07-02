import styles from "./Comments.module.css";
import Comment from "./Comment.jsx"
import { SketchPicker, SliderPicker } from 'react-color';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Comments() {

  const [nameCount, setNameCount] = useState(0)
  const [textCount, setTextCount] = useState(0)
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(0)
  const commentsPerPage = 5
  const paginatedComments = comments.slice(
    page * commentsPerPage, (page + 1) * commentsPerPage
  )
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    text: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name' && value.length > 20) return;
    if (name === 'text' && value.length > 500) return;
    setForm({ ...form, [name]: value })
    if (name === 'name') setNameCount(value.length);
    if (name === 'text') setTextCount(value.length);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    axios
      .post(`${import.meta.env.VITE_API_URL}/comment/add`, form)
      .then((response) => {
        console.log(response)
        setForm({ name: '', text: '' });
        setNameCount(0);
        setTextCount(0);
        return axios
          .get(`${import.meta.env.VITE_API_URL}/comment`)
          .then((response) => {
            console.log(response.data)
            const comments_sorted = response.data
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setComments(comments_sorted);

          })
          .catch((error) => {
            console.log(error)

          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/comment`)
      .then((response) => {
        console.log(response.data)
        const comments_sorted = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setComments(comments_sorted);

      })
      .catch((error) => {
        console.log(error)

      })

  }, [])
  return <>
    <hr className={styles.line} />
    <div className={styles.container}>
      <div className={styles.comment}>
        <div className={styles.forwardBackward}>
          <button onClick={() => setPage(page - 1)} disabled={page == 0} className={styles.forwardBackwardButton}>{`<`}</button>
          <button onClick={() => setPage(page + 1)} disabled={(page + 1) * commentsPerPage >= comments.length} className={styles.forwardBackwardButton}>{`>`}</button>
        </div>
        {paginatedComments.map((item, index) => {
          return <Comment key={index} name={item.name} text={item.text} time={item.createdAt}></Comment>
        })}
      </div>
      <div className={styles.form}>
        <form className={styles.buttons}>
          <textarea className={styles.nameInput} name="name" placeholder="name" value={form.name} onChange={handleChange}></textarea>
          <small className={styles.nameCount} style={nameCount === 20 ? { color: "black" } : { color: "gray" }}>{nameCount}/20</small>
          <textarea className={styles.commentInput} name="text" placeholder="add a comment" value={form.text} onChange={handleChange}></textarea>
          <small className={styles.textCount} style={textCount === 500 ? { color: "black" } : { color: "gray" }}>{textCount}/500</small>
          <button type="submit" onClick={handleSubmit} className={styles.button}>submit</button>
        </form>
      </div>
    </div >
  </>
}
export default Comments;

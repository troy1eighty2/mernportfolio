import styles from "./Comment.module.css";
function Comment({ name, text, time }) {
  const dateTime = new Date(time)
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  const date = formatter.formatToParts(dateTime)
  // console.log(date)
  return <>
    <div className={styles.container}>
      <div className={styles.header}>
        <b>{name.trim() === "" ? "A Ninny Mouse" : name}</b>
        <small>{`${date[0].value} ${date[2].value}, ${date[4].value} @ ${date[6].value}:${date[8].value} ${date[10].value}`}</small>
      </div>
      <div className={styles.text}>
        <small className={styles.small}>
          {text}
        </small>
      </div>
    </div >
  </>
}
export default Comment;

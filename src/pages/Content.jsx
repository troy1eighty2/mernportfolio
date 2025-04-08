import styles from "./Content.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import boilerplate from "./Boilerplate.module.css";
import { Helmet } from "react-helmet";
import { CopyBlock, monokai } from "react-code-blocks";
import { Radar } from "react-chartjs-2";
import { options } from "../chartConfig.js";

function Content() {
  const [blog, setBlog] = useState({ title: "", blurb: "", content: [], date: "" });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/exposition/${id}`)
      .then((response) => {
        setBlog(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])
  return <>
    <div className={boilerplate.page}>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="title" />
        <meta name="twitter:description" content="description" />
        <meta name="twitter:image" content="https://i.pinimg.com/736x/4d/ac/b3/4dacb3d8813362382b435d022f5a0070.jpg" />
      </Helmet>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.blurb}</p>
        <p className={styles.date}>{new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</p>
      </div >
      <div className={styles.content}>
        {blog.content.map((item, index) => {
          const Tag = item.type;
          switch (Tag) {
            case "img":
              return <img src={item.title} className={styles.img} />;
            case "a":
              return <a className={styles.a} href={item.link} target="_blank">{item.title}</a>;
            case "iframe":
              return <iframe width="300" height="200" src={item.title} title="YouTube video player" frameborder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            case "short":
              return <iframe width="300" height="500" src={item.title} title="YouTube video player" frameborder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            case "codeblock":
              return <CopyBlock text={`${item.title}`} language={`${item.language}`} showLineNumbers={true} startingLineNumber={1} theme={monokai}></CopyBlock>
            case "SSOI":
              {
                const data = {
                  labels: ['overload', 'isolation', 'resistanceProfile', 'stability', 'sustainability'],
                  datasets: [
                    {
                      label: `${item.title}`,
                      data: [item.overload, item.isolation, item.resistanceProfile, item.stability, item.sustainability],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      borderWidth: 2,
                    },
                  ],
                }
                return <Radar data={data} options={options}></Radar>
              }
            default:
              return <Tag key={index}>{item.title}</Tag>
          };
        })}
      </div>
    </div>
  </>
}
export default Content;

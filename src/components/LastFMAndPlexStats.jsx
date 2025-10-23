import styles from "./LastFMAndPlexStats.module.css"
import axios from "axios"
import {useState, useEffect} from "react";
function LastFMAndPlexStats () {

  const [topSongs, setTopSongs] = useState(null)

  const getArt = async (data) =>{
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LASTFM_API_URL}?method=track.getInfo&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&artist=${data.artist["#text"]}&track=${data.name}&format=json`
      );

      const res = response.data.track;
      const artLink = res.album.image[2]["#text"];
      return artLink;
    } catch (error) {
      console.error(error);
      return null; // return a fallback value instead of undefined
    }
  }
  // console.log(topSongs)
  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_LASTFM_API_URL}?method=user.getWeeklyTrackChart&user=${import.meta.env.VITE_LASTFM_USER}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`)
        const tracks = response.data.weeklytrackchart.track.slice(0, 5);

        const withImages = await Promise.all(
          tracks.map(async (t) => ({
            ...t,
            image: await getArt(t),
          }))
        );

        setTopSongs(withImages);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  },[])
  console.log(topSongs)
  return <div className={styles.container}>
    <div className={styles.topSongs}>
      {topSongs ? topSongs.map((item, index)=><img key={index} src={item.image}></img>) : null}
    </div>
  </div>
}
export default LastFMAndPlexStats;

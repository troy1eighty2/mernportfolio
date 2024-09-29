function ProjectItem({ name, blurb, url }) {
  return <li>
    <a href={url} target="_blank">{name}</a> {blurb}
  </li>
}
export default ProjectItem;

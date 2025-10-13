import { Link } from "react-router";

export default function Thumbnail({url,imgurl,title,technologies})
{
  return <div className="">
      <a href={url} target="_blank" rel="noopener noreferrer"><img src={imgurl} height={50} width={50} ></img></a>      
      <h3>{title}</h3>
      {technologies.map((technology)=><span key={technology}>{technology}</span>)}  
  </div>
}
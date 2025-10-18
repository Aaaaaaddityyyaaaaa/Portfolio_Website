import { Link } from "react-router";

export default function Thumbnail({url,imgurl,title,technologies})
{
  return <div className="min-w-[300px] h-1 m-[2px] relative">
      <a href={url} target="_blank" rel="noopener noreferrer"><img src={imgurl} alt="thumbnail" className="min-h-[300px] min-w-[300px] rounded-2xl"></img></a>      
      <h3>{title}</h3>
      {technologies.map((technology)=><span key={technology}>{technology}</span>)}  
  </div>
}
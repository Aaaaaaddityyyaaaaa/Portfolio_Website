import { useLoaderData } from "react-router";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import About from "./About";
import Filters from "../components/Filters";
import { use, useRef, useState } from "react";
import left from "../assets/467136.png"
import right from "../assets/4932456.png"


export async function loader()
{
  //const data = await fetch("http://localhost:5000/api/get")
  //const portfolio = await data.json() ; 

  // mock data
  const projects = [
    {
      title: "Portfolio Website",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://aditya-portfolio.vercel.app"
    },
    {
      title: "E-Commerce Store",
      thumbnail: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
      tech: ["Next.js", "MongoDB", "Node.js", "Stripe"],
      link: "https://shopdemo.vercel.app"
    },
    {
      title: "Real-Time Chat App",
      thumbnail: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      link: "https://chatify.vercel.app"
    },
    {
      title: "Machine Learning Dashboard",
      thumbnail: "https://images.unsplash.com/photo-1508387023470-7b82b9b3d8ba?auto=format&fit=crop&w=900&q=80",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      link: "https://mlboard.vercel.app"
    },
    {
      title: "DevOps Monitoring Tool",
      thumbnail: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=900&q=80",
      tech: ["Docker", "Grafana", "Prometheus", "Node.js"],
      link: "https://devops-monitor.vercel.app"
    },
    {
      title: "Blog Platform",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
      tech: ["Next.js", "Sanity CMS", "TypeScript"],
      link: "https://techblog.vercel.app"
    },
    {
      title: "AI Style Transfer App",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      tech: ["TensorFlow.js", "Keras", "React"],
      link: "https://style-transfer-ai.vercel.app"
    },
    {
      title: "Data Visualization Dashboard",
      thumbnail: "https://images.unsplash.com/photo-1581093588401-22a9c62e7e32?auto=format&fit=crop&w=900&q=80",
      tech: ["D3.js", "React", "TailwindCSS"],
      link: "https://dataviz-dashboard.vercel.app"
    }
  ];
  

  return projects ; 
}
export default function Home()
{
  const portfolio = useLoaderData() ;
  const[hidden , setHidden] = useState(true) ; 
  const scrollRef = useRef() ;  
  const[link , setLink] = useState("")  ; 

  const scrollL = ()=>{
    const element = scrollRef.current 
    element.scrollBy({left:-300 ,behavior:"smooth"}) ;
  }

  const scrollR = ()=>{
    const element = scrollRef.current
    element.scrollBy({left:300 ,behavior:"smooth"}) ;
  }



  let portfolioarray = []; 
  const func = ()=>{
    setHidden(!hidden)
  }
  if(portfolio)
  {
    portfolioarray = portfolio.map((project ,index)=><Thumbnail key={index} title={project.title} technologies={project.tech} imgurl={project.thumbnail} url={project.link}/>)
  }
  return <> 
  <Header func = {func} setLink= {setLink} /> 
  <Filters/>
  <About/>
  <main className= {`absolute overflow-hidden left-1/4 w-[50vw] bg-black/70 flex items-center justify-center z-[999] transition-all duration-700 ease-in-out ${hidden?"top-0 h-0 opacity-0":"top-1/4 h-[500px] opacity-100"} ` } >
    <a><button className={`text-amber-50 w-[100px] h-[60px] bg-blue-500`}>{link}</button></a>
  </main>
  <div className="flex flex-col items-center justify-center justify-self-center min-h-[250px] mt-10 w-[70vw] relative">
  <h1 className="w-[70vw] text-[1.5rem]">Projects</h1>
  <button onClick={scrollL} className="absolute top-1/2 left-0 z-[999] opacity-50">
  <img src={left} alt="left" className="h-[50px]"/>
  </button>
  <button onClick={scrollR} className="absolute top-1/2 right-0 z-[999] opacity-50">
    <img src={right} alt="right" className="h-[60px]"/>
  </button>
  <main ref={scrollRef} className="flex flex-row gap-[4px] min-w-[70vw] max-w-[70vw] min-h-[350px] overflow-x-auto scrollbar-hide border-t border-b rounded-xl relative mb-[10px] scroll-smooth">{portfolioarray}</main>
  </div>
  
  </>
}
import { useLoaderData } from "react-router";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import About from "./About";
export async function loader()
{
  const data = await fetch("http://localhost:5000/api/get")
  const portfolio = await data.json() ; 
  return portfolio ; 
}
export default function Home()
{
  const portfolio = useLoaderData() ; 
  let portfolioarray = []; 
  if(portfolio)
  {
    portfolioarray = portfolio.map((project ,index)=><Thumbnail key={index} title={project.title} technologies={project.tech} imgurl={project.thumbnail} url={project.link}/>)
  }
  return <> 
  <Header/> 
  <About/>
  <div className="flex flex-col items-center justify-center justify-self-center min-h-[250px] mt-10 w-[700px] ">
  <h1 className="w-[700px] text-[1.5rem]">Projects</h1>
  <main className="flex flex-row gap-[4px] min-w-[700px] max-w-[700px] min-h-[250px] overflow-x-auto scrollbar-hide border rounded-xl">{portfolioarray}</main>
  </div>
  
  </>
}
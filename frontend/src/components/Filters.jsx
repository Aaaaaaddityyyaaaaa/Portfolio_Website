export default function Filters()
{
  return<div className="flex w-[70vw] gap-10 h-10 items-center justify-between justify-self-center">
    <h1>Filters:</h1>
    <div className="flex , items-center justify-end gap-1">
    <button className="w-[10vw] max-w-[100px]  text-amber-50 bg-gray-500">React</button>
  <button className="w-[10vw] max-w-[100px] text-amber-50 bg-gray-500">JS</button>
  <button className="w-[10vw] max-w-[100px]   text-amber-50 bg-gray-500">ML</button> 
    </div>
    <button className="w-[100px]  text-amber-50 bg-gray-500">Clear</button>
  </div>
}
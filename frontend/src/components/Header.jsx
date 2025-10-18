export default function Header({func ,setLink})
{
  const funct= ()=>
  {
    func() ;
  }
  return<header className="flex bg-black/80 h-[60px] justify-between items-center p-10">
    <h1 className="text-blue-50 text-2xl align-text-bottom">Portfolio</h1>
    <div className="flex gap-5">
      <button name="GitHub" onClick={()=>{funct(),setLink("GitHub")}} className="text-amber-50">Git</button>
      <button name="adi@adi.com" onClick={()=>{funct(),setLink("adi@adi.com")}} className=" text-amber-50">Email</button>
      <button name="LinkedIn" onClick={()=>{funct(), setLink("LinkedIn")}} className="text-amber-50">in</button>    
    </div>
    
  </header>

}
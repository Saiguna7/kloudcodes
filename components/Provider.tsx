"use client"
import { Toaster } from "sonner"
import Splin3d from '@/components/Splin3d';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Provider({children}:{children:React.ReactNode}) {
  const pathname=usePathname();
  const isHome= pathname==='/'
  const [isloading,setloading]=useState(isHome);
  useEffect(()=>{
    if(isloading) return
  },[isloading])
  if(isloading && isHome)
  return <Splin3d finishloading={()=>setloading(false)}/>
  return (
    <>
      {children}
      <Toaster position="top-right" richColors expand closeButton />
    </>
  )
}

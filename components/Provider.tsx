"use client"
import { Toaster } from "sonner"

export default function Provider({children}:{children:React.ReactNode}) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors expand closeButton />
    </>
  )
}
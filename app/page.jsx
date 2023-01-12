"use client"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../auth/firebase"

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div onClick={()=>logOut(router, dispatch)}>
      sdwe
    </div>
  )
}

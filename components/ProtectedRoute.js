
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from '../auth/firebase';



const ProtectedRoute = ({ children }) => {
    const router = useRouter()
    const dispatch =useDispatch()
    let {user} = useSelector((state) => state.auth);
    console.log(user)
    useEffect(() => {
        if (!user.email) {
          router.push('/login')
        }
      }, [router, user])
      useEffect(()=>{
        userObserver(dispatch)
      },[])
  return (
    <>{user ? children : null}</>
  )
}

export default ProtectedRoute
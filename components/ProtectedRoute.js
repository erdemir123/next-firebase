
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from '../auth/firebase';

const ProtectedRoute = ({ children }) => {
    const router = useRouter()
    let user = useSelector((state) => state.user);
    console.log(user?.email);
    const dispatch = useDispatch();
    useEffect(() => {
      userObserver(dispatch)
      if(!user?.email){
        router.push('/login')
      }
    }, [user?.email,router]);
  return (
    <>{children}</>
  )
}

export default ProtectedRoute
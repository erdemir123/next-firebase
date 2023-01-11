"use client"
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";
import Link from "next/link";
import loginImage from "../../helper/images/folhas.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { signUpProvider } from "../../auth/firebase";

export default function pages() {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleGoogle = (e) => {
    e.preventDefault()
    signUpProvider(router,dispatch);
  };
  return (
    <>
      {/* Container */}
      <div className="bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-4 md:flex">
        {/* Login card */}
        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row">
          {/* Logo */}
          <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
            <Image src={loginImage} alt="login" priority />
          </div>
          {/* Form */}
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
            {/* Welcome */}
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-green-400 text-xl">
                Welcome back
              </h1>
              <p>Login to your account</p>
            </div>
            {/* Inputs */}
            <form className="flex flex-col items-center space-y-4">
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaUser />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="Username..."
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaLock />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="Password..."
                  type="password"
                />
              </div>
              <button
                className="bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500"
                type="submit"
              >
                <FaUser className="mr-2" />
                Login now
              </button>
              <button
                className="bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500"
                type="submit"
                onClick={handleGoogle}
              >
                <FcGoogle className="mr-2" />
                Sing in With Google
              </button>
            </form>
            {/* Links */}
            <div className="flex flex-col items-center">
              <p className="italic">
                Join us now.
                <Link href="/" className="ml-1 text-green-500 hover:underline">
                  Register here
                </Link>
              </p>
              <p className="italic">
                Lost your password?
                <Link className="ml-1 text-green-500 hover:underline" href="/">
                  Reset password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

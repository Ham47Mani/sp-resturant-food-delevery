import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="flex items-center justify-center h-[60vh] md:min-w-[700px] border shadow-2xl rounded-3xl">
        {/* --------- Image --------- */}
        <div className="relative hidden md:block w-1/2 h-full">
          <Image src="/loginBg.png" alt="login image" fill sizes="100%"/>
        </div>
        {/* --------- Form --------- */}
        <div className="md:w-1/2 p-7 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-gray-500">log into your account or create a new one using social buttons</p>
          <button className="flex items-center gap-2 p-3 w-3/4 rounded-lg border hover:shadow-md hover:bg-fuchsia-50  duration-200 transition-all">
            <Image src="/google.png" alt="google icon" width={20} height={20} className="object-contain"/>
            <span className="text-sm sm:text-base">Sign in wth Google</span>
          </button>
          <button className="flex items-center gap-2 p-3 w-3/4 rounded-lg border hover:shadow-md hover:bg-fuchsia-50 duration-200 transition-all">
            <Image src="/facebook.png" alt="google icon" width={20} height={20} className="object-contain"/>
            <span className="text-sm sm:text-base">Sign in wth Facebook</span>
          </button>
          <div className="flex items-center gap-2 text-sm -mt-2">
            <span className="text-gray-700">Have a problem?</span>
            <Link href="/contact" className="underline hover:font-semibold transition-all">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
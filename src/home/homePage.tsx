import * as React from 'react'
import { Link } from 'react-router-dom'

import myPic from '../static/images/000009.jpeg'

const HomePage: React.FC<any> = () => {
  return (
    <>
      {/* <img src={myPic} alt="my_pic" className="object-cover w-full ..." /> */}
      <div className="h-screen">
        <div className="relative h-full overflow-hidden bg-yellow-400">
          <div className="absolute z-30 flex w-full h-full">
            <div className="relative flex items-stretch z-30 text-white py-8 px-4 md:px-6 w-full md:w-5/6">
              <div className="self-center m-4">
                <div className="font-extrabold sm:text-3xl text-3xl lg:text-5xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400">
                    Hello Cool kids!
                  </span>
                </div>
                <span className="font-black uppercase text-4xl lg:text-6xl w-auto mb-4 lg:mb-8 ">
                  Welcome to my playgroud
                </span>
                <p className="sm:text-md lg:text-lg py-4 italic font-light sm:w-3/4 md:w-1/2">
                  {`"Maybe I made a mistake yesterday, but yesterday's me is still me. I am who I am today, with all my faults. Tomorrow I might be a tiny bit wiser and that's me, too."`}
                </p>
                <p className="sm:text-md lg:text-lg py-4 font-normal sm:w-3/4 md:w-full">
                  {' '}
                  - Kim Namjoon -
                </p>

                <div className="inline-flex rounded-md shadow mt-8">
                  <Link
                    to="/profile"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    More about me!
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex w-full h-full">
              <div className="sm:w-full md:w-1/6 xl:w-1/3 h-full bg-yellow-400"></div>
              <div className="relative sm:w-full md:w-1/6 xl:w-1/3">
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  className="absolute inset-y-0 z-20 h-full text-yellow-400"
                >
                  <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  className="absolute inset-y-0 z-10 hidden sm:block h-full ml-6 text-white opacity-50"
                >
                  <polygon points="0,0 100,0 50,100 0,100"></polygon>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 block hidden sm:block md:w-9/12 h-full">
            <img
              src={myPic}
              alt="my_pic"
              className="object-cover min-w-full h-full transition hover:opacity-25 transition-opacity duration-1000 ease-out"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage

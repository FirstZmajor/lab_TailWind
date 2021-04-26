import { url } from 'node:inspector'
import * as React from 'react'
import myPic from '../static/images/000009.jpeg'
const HomePage: React.FC<any> = () => {
  return (
    <>
      {/* <img src={myPic} alt="my_pic" className="object-cover w-full ..." /> */}
      <div className="h-screen">
        <div className="relative h-full overflow-hidden bg-yellow-400">
          <div className="absolute z-30 flex w-full h-full">
            <div className="relative flex items-stretch z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
              <div className="self-center mx-4">
                <h1 className="text-6xl font-black">Welcome to my playgroud</h1>
                <p className="my-8 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet earum
                  voluptatibus tempora veniam?{' '}
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex w-full h-full">
              <div className="w-1/6 h-full bg-yellow-400"></div>
              <div className="relative w-1/6">
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
                  className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
                >
                  <polygon points="0,0 100,0 50,100 0,100"></polygon>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 block w-9/12 h-full">
            <img src={myPic} alt="my_pic" className="object-cover min-w-full h-full" />
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage

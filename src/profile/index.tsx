import Yujin from '../static/images/yujin002.jpg'

const features = [
  {
    name: 'Java Script',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    // icon: GlobeAltIcon,
  },
  {
    name: 'Type Script',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    // icon: GlobeAltIcon,
  },
  {
    name: 'React',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    // icon: LightningBoltIcon,
  },
  {
    name: 'Vue',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    // icon: AnnotationIcon,
  },
]

const myData = {
  firstName: 'Suphanan',
  lastName: 'Yolao',
  nickName: 'First',
  jobDescrip: 'Frontend Developer',
  bio: `Firstly I'd like to introduce myself. My name's Suphanan and You can call me First
  (Yes, that's my nickname 😊) Do you know 16Personallities? my personality type is
  ISFP-T. Exactly! it's kind of Introvert but sometimes I often hang out with my
  friend or office mate. I interesting in many things, Basketball, Surf, Scuba diving,
  Snap Film, and mostly K-POP. I'm a big fan of Girls' Generation and IZ*ONE. I want
  to thank everybody and I'm so glad that you are touring my Playgrounds.`,
}

const Profile = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Hi!, everyone.
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to let you know me
          </p>
          <div className="mt-6 mb-6 text-center ">
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">DREAMLIKE</p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              09:01 ────🐶──── 12:18
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">⇆ ◀ ❚❚ ▶ ↻</p>
          </div>
        </div>
        <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img
            className="w-50 h-32 md:w-1/4 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Yujin}
            alt=""
            // width="384"
            // height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">"{myData.bio}"</p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-cyan-600">{myData.firstName + `  ` + myData.lastName}</div>
              <div className="text-gray-500">{myData.jobDescrip}</div>
            </figcaption>
          </div>
        </figure>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                {/* <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Profile

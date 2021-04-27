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

const Profile = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            H!, everyone.
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to let you know me
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
            cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/sarah-dayan.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy
                to customize, adapts to any design, and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-cyan-600">Sarah Dayan</div>
              <div className="text-gray-500">Staff Engineer, Algolia</div>
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
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Profile

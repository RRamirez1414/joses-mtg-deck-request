import { ReactNode } from 'react'

function MediaObject({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string | ReactNode
  imageSrc: string
  imageAlt: string
}) {
  return (
    <div className="sm:flex bg-white border-gray-200 border rounded-lg shadow-xl min-h-[250px]">
      <div className="flex justify-center md:justify-start mb-4 mt-4 shrink-0 sm:mt-0 sm:mb-0 sm:mr-4">
        <img
          className="h-full w-full rounded-lg object-cover max-w-[15rem]"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="pr-12 pl-12 sm:pl-0 py-8 flex flex-col sm:justify-start">
        <h4 className="text-3xl font-bold mb-2 text-center sm:text-left">
          {title}
        </h4>
        <p className="mt-1 text-gray-500 font-medium text-justify sm:text-left">
          {description}
        </p>
      </div>
    </div>
  )
}

export default MediaObject

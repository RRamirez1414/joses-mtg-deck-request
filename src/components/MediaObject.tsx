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
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <img
          className="h-full w-full rounded-lg object-cover max-w-[15rem]"
          //  className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="pr-12 py-8">
        <h4 className="text-3xl font-bold mb-2">{title}</h4>
        <p className="mt-1 text-gray-500 font-medium">{description}</p>
      </div>
    </div>
  )
}

export default MediaObject

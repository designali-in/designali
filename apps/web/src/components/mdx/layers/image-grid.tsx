
import Image from './image'
import ImageZoom from '@/components/common/image-zoom';

export type Items = Array<{
  image: string
  name: string
  description: string
  url: string
}>

type ItemGridProps = {
  items: Items
}


export const ImageGridTWO = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-2 grid grid-cols-2 gap-2'>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ImageZoom>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg lg:rounded-2xl h-full w-full'
          />
          </ImageZoom>
      ))}
    </div>
  )
}

export const ImageGridTHREE = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-2 grid grid-cols-3 gap-2'>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ImageZoom>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg lg:rounded-2xl h-full w-full'
          />
          </ImageZoom>
      ))}
    </div>
  )
}

export const ImageGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-2 grid grid-cols-3 gap-2'>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ImageZoom>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg lg:rounded-2xl h-full w-full'
          />
          </ImageZoom>
      ))}
    </div>
  )
}

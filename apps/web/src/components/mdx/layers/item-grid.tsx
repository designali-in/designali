import Image from './image'

export type Items = Array<{
  image: string
  name: string
  description: string
  url: string
}>

type ItemGridProps = {
  items: Items
}

const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid grid-cols-1 gap-4 sm:grid-cols-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 no-underline transition-colors duration-150 hover:bg-black/5 hover:dark:bg-white/5 sm:flex-col sm:gap-3'
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 h-24 w-24 sm:h-full sm:w-full'
          />
          <div className='flex flex-col justify-center gap-2'>
            <div className='text-lg font-extrabold'>{item.name}</div>
            <div className='text-sm text-slate-600 dark:text-slate-400 text-muted-foreground'>
              {item.description}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ItemGrid


import React from 'react'

type Node = {
  name: string
  children?: Node[]
}

type TreeProps = {
  data: Node[]
}

type InnerType = {
  data: Node[]
  level: number
}

const Tree = (props: TreeProps) => {
  return (
    <div className='rounded-lg border bg-pre px-6 py-4'>
      <Inner {...props} level={0} />
    </div>
  )
}

const Inner = (props: InnerType) => {
  const { data, level } = props

  return (
    <>
      {data.map((node) => (
        <React.Fragment key={node.name}>
          <div className='relative flex items-center gap-2'>
            
            <div
              style={{
                paddingLeft: level * 24
              }}
            >
              
            </div>
            <div className='text-xs'>{node.name}</div>
          </div>

          {node.children ? (
            <Inner data={node.children} level={level + 1} />
          ) : null}
        </React.Fragment>
      ))}
    </>
  )
}

export default Tree

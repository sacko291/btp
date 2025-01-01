import { ExclamationTriangleIcon} from '@radix-ui/react-icons'

type FormerrorProps = {
  message?: string
}

 export const Formerror = ({message}:FormerrorProps) => {

  if (!message) return null

  return (
    <div className='bg-destructive/15 flex items-center rounded-md text-sm text-destructive p-3 gap-x-2'>
      <ExclamationTriangleIcon className='h-4 w-4'/>
      <p>{message}</p>
    </div>
  )
}


import { CheckCircledIcon} from '@radix-ui/react-icons'

type FormesuccesProps = {
  message?: string
}

 export const Formesucces = ({message}:FormesuccesProps) => {

  if (!message) return null

  return (
    <div className='bg-emerald-500/15 flex items-center rounded-md text-sm text-emerald-500 p-3 gap-x-2'>
      <CheckCircledIcon className='h-4 w-4'/>
      <p>{message}</p>
    </div>
  )
}



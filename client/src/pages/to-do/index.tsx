import { useRoute } from 'wouter'
import { useToDo } from 'contexts'
import { ToDoDescription } from 'components'

export const ToDo: React.FC = () => {
  const { getTitleToDo } = useToDo()
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [ _, params ] = useRoute('/:toDo')

  return (
    <ToDoDescription title={ getTitleToDo(Number(params?.toDo)) } />
  )
}

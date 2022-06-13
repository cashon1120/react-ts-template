import {FC} from 'react'

interface Props {
  msg: string | number
}

const Msg: FC<Props> = (props: Props) => {
  return <>msg: {props.msg}</>
}

export default Msg
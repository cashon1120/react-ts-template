import Msg from './Msg'
interface Props {
  msg : string
}

const App : React.FC < Props > = (props : Props) => {
  return <Msg msg={props.msg}/>
}

export default App

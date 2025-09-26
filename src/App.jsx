import './App.css'
import Board from './components/Board'
import { BoardProvider } from './BoardContext'

function App() {
 
  return (
    <BoardProvider>
    <Board/>
    </BoardProvider>
  )
}

export default App
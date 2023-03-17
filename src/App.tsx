import { useState } from 'react'
import Header from './components/Header'
import { ButtonPanel, ChangeValueButton } from './styles'

const App = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <Header title='
      <ColorPanel
         red={red}
         green={green}
         blue={blue}
         alpha={alpha}/> '
      />
      <ButtonPanel>
      <ChangeValueButton>
      <span> Red</span>
      < input 
       type="range" 
       min={0}
       max={250}
      /> 
       <span> Green</span>
       <input
       type="range" 
       min={0}
       max={250}
      />
      <span> Blue</span>
       <input
       type="range" 
       min={0}
       max={250}
      />
       Alpha
      <input
       type="range" 
       min={0}
       max={1}
      />


        </ChangeValueButton>
      
      </ButtonPanel>
    </>
  )
}

export default App

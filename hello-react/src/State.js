import React, { useState } from 'react'


export default function State() {
    const [count, setCount] = useState(0);
    // const [ 변수이름 ,변수를 수정해주는  함수] = 실행시켜주는 훜?
    // onClick => 클릭 이벤트 리스너와 같은개념
    const [inOn , setInOn] = useState(false);

    function changeToggle(){
        setInOn(!inOn);
        // setInOn()
        // console.log(`isOn : ${inOn}`
    }
    

    return (
    <div>
        {count}
        
        <button onClick={ () => {setCount( count + 10)}}>올려</button>
        <p>현재 온 오프 상태 : { inOn ?  'on' : 'off' }</p>
                            {/* { inOn ?  'ture일때 나타내라' : 'false일때 나타내라' } */}
        <button onClick= {changeToggle} > 토글버튼 </button>
    </div>
  )
}

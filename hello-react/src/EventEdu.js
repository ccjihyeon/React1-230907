import React, { useState } from 'react'

export default function EventEdu() {
  
  
//   onClick : 요소를 클릭시 발생
//   onChange : 인풋 요소에 변화가 생겼을때 
//   onSubmit : froom이 제출 될 때 발생하는 요소
//   onMouseEnter : 마우스 올렸을때 
//   onMouseLeave : 마우스 나갔을때 
//   onKeyDown : 키 누를때     
//   onKeyUp : 키 땔때
//   onFocus : 요소가 포커스 되었을때
//   onBlur : 요소가 포커스를 잃었을때
//   onLoad : 이미지등의 리소스를 로드했을때
//   onError : 이미지등의 리소스 로드를 실패했을때
//   onContextMenu : 요소에 마우스 오른쪽을 클릭했을때
//   onScroll : 요소가 스크롤 될때
//   사용자 정의 이벤트 : 아래의 형태를 이용해 새로운 이벤트 객체 생성 가능..한데 쓸일 잘 없음
//   const myEvent = new Event('custom');
  


    const [ mouseOn,setMouseOn ] = useState(false);
           function handleOnMouseEnter(){
            setMouseOn(true);
        }
        function handleOnMouseLeave(){
            setMouseOn(false);
        }
    
    return (

 

    <div>

        <p  onMouseEnter ={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >마우스 상태 = { mouseOn?  '마우스가 내 위에 있어요' : '마우스가 내 위에 없어요' } </p>

    </div>
  )
}
// 자바스크립트와 다르게 onClick 사용시 보안성 이슈가 없음
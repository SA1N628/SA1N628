function calS () {
  console.log('원 넓이')

  const r = prompt('원의 반지름을 입력하시오')*1

  const angle = prompt('부채꼴의 각도를 입력하시오 (0 이상 360 이하)')*1

  if (isNaN(r) && isNaN(angle) && r > -1 && 361 > angle && angle > -1){
      const s = r * r * angle / 360
      alert ('원/부채꼴 의 넓이는 ' + s + '㎠입니다.')
  }

  else alert('올바른 값을 입력해주세요')

  const Rstart = prompt('다시 시작하시겠습니까?   (예/아니오)')

  if (Rstart == '예')calS()
}
calS()

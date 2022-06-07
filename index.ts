//String, number, boolean, null, undefined, bigint, [], {} 등등등
let 이름 :string = 'kim';
let 배열 :string[] = ['kim', 'park'];
let 오브젝트 :{ name : string } = { name : 'kim'};
let 오브젝트2: { name?: string } = {};

let name1: string | number = 123;

type Type = string | number;
let name2: Type = 123;


function func(x: number) : number {
  return x * 2
}
// 파라미터는 무조건 number, return 값도 무조건 number

type Member = [number, boolean];
let john: Member = [1, true];

//object에 타입 지정해야할 속성이 너무 많으면
type Member2 = {
  [key: string] : string
}
let park: Member2 = { name: 'park', age: '123' }

class User {
  name;
  constructor(name:string) {
    this.name = name;
  }
}

let 회원들: (number|string)[] = [1, '2', 3];
let 오브젝트3: { a: string | number } = { a: '123' };

let 이름2: any;
이름2 = 123;
이름2 = [];

let 이름3: unknown;
이름3 = 123;
이름3 = {};

// unknown 타입이 any보다 안전하다
let 변수1: string = 이름2; //앞전의 쉴드를 풀어버린다
// let 변수2: string = 이름3; 이거는 안된다 앞의 스트링 쉴드를 풀지 않음

//unknown 을 사용하면 마이너스 - 1 은 되지 않지만 any는 마이너스가 되어버린다. (일반 자바스크립트처럼 들어감)

let 나이: string | number;
// 나이 + 1; 에러남
// - 타입스크립트는 타입이 엄격한것을 좋아해 
// string + 1 (허용)
// number + 1 (허용)
// string|number + 1 (불가)


function 함수(x:number) :number{
  return x * 2
}

함수(30)

//함수에서 만큼은 void 타입 활용이 가능하다.(실수로 return 하는 것을 막아준다)
function func1(x?: number) :void {
  1+1
}

func1(2)
//자바스크립트와 다른점 - 타입지정된 파라미터는 필수이다.
//파라미터가 옵션인 경우엔 = 파라미터변수?:타입
//변수?:number는 변수:number|undefined와 같다

//Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 사용한다
function 함수2(x: number | string) {
  if (typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}
함수2(123);

function 함수3(x: number | string) {
  let array: number[] = [];
  if (typeof x === 'number') {
    array[0] = x;
  } else {
    //if 문을 썼으면 끝까지 써야 안전. else, else if 안쓰면 에러로 잡아 줄 수도 있다
  }
  //Narrowing으로 판정해주는 문법들
  //typeof 변수
  //속성명 in 오브젝트 자료
  //인스턴스 instanceof 부모

}
함수3(123)

//assertion 문법 (타입 덮어쓰기)
function 함수4(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;

}
함수4(123);

//빠따 안맞기 위한 assertion 문법의 용도
//1. Narrowing 할 떄
  let 이름4: string = 'kim';
  // 이름4 as number; 
  //유니온 타입의 확정을 위해 assetion을 사용하는 것이지 이렇게 타입을 변경하기 위한 방법으론 사용하지 못한다

//2. 무슨 타입이 들어올지 100% 확실할 때
  //as 문법을 사용한 뒤 함수 파라미터에 as 문법으로 지정한 타입이 아닌 다른 타입이 들어와도 버그를 캐치하지 못하게 된다

//그러니까 그냥 if문을 사용하자. 남이 짠 코드 수정할때, 왜 타입에러가 나는지 모를때, 디버깅용 비상용
//예전 as 문법은
// <number>이름4


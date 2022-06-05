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


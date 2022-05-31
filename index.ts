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
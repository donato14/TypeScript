// Day1
type SONG = { song: string, singer: string };

let song: SONG = { song: '물', singer: '이적' };

let project: { [key : string] :string[] | number | boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}



// Day2
let user: string = 'kim';
let age: unknown = undefined;
let married: boolean = false;
let 철수: unknown[] = [user, age, married];

let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend:string|string[]
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

function hi(name?: string) {
  if (name) {
    console.log('안녕하세요' + name)
  } else {
    console.log('이름을 입력하세요')
  }
}

hi('홍길동')

function 자릿수세기(x: number | string) :number {
  return x.toString().length
}

function CanMarryPercent(money :number, house:boolean, charm:string):string|void {
  let score: number = 0;
  if (house) {
    score += 500;
  }
  if (charm == '상') {
    score += 100
  }
  score += money;

  if (score >= 600) {
    return '결혼가능'
  }
}
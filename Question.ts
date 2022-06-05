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
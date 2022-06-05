//String, number, boolean, null, undefined, bigint, [], {} 등등등
let 이름 = 'kim';
let 배열 = ['kim', 'park'];
let 오브젝트 = { name: 'kim' };
let 오브젝트2 = {};
let name1 = 123;
let name2 = 123;
function func(x) {
    return x * 2;
}
let john = [1, true];
let park = { name: 'park', age: '123' };
class User {
    constructor(name) {
        this.name = name;
    }
}
let 회원들 = [1, '2', 3];
let 오브젝트3 = { a: '123' };
let 이름2;
이름2 = 123;
이름2 = [];
let 이름3;
이름3 = 123;
이름3 = {};
// unknown 타입이 any보다 안전하다
let 변수1 = 이름2; //앞전의 쉴드를 풀어버린다
// let 변수2: string = 이름3; 이거는 안된다 앞의 스트링 쉴드를 풀지 않음
//unknown 을 사용하면 마이너스 - 1 은 되지 않지만 any는 마이너스가 되어버린다. (일반 자바스크립트처럼 들어감)
let 나이;
// 나이 + 1; 에러남
// - 타입스크립트는 타입이 엄격한것을 좋아해 
// string + 1 (허용)
// number + 1 (허용)
// string|number + 1 (불가)

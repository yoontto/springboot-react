/* 화살표 함수 */
const calc = x => x * 2;    //calc라는 변수에 익명함수 저장
calc(5);                    //10

//매개변수 없을 때
const sayYeah = () => "Yeah";   //빈 괄호 넣어주기

//매개변수 2개 이상일 때
const calc2 = (x, y) => x + y;  //파라미터 괄호로 묶기
calc2(3, 4);                    //7

//여러행으로 이루어진 화살표함수
const calc3 = (x, y) => {
    console.log('x : ' + x + ", y : "+ y);
    return x + y;
}
calc3(1, 2);    //3



/* 탬플릿 리터럴 */
//원래 문자열을 더할때 플러스 기호 사용
//탬플릿 리터럴은 백틱(`)과 ${} 사용
let person = {firstName: "Jim", lastName: "Parsons"};
let greeting = `Hello ${person.firstName} ${person.lastName}`;
console.log(greeting);


/* 클래스와 상속 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, title, salary) {
        super(firstName, lastName);

        this.title = title;
        this.salary = salary;
    }
}

const p = new Person('ys', 'kim');
console.log(p.firstName, p.lastName);

const e = new Employee('jw', 'jeon', 'juim', '1억');
console.log(e.firstName, e.lastName, e.title, e.salary);






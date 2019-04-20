import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  course_basic: any;
  course_standrad: any;
  course_pri: any;

  course: string;

  status: string;

  constructor() { }

  getBasicCourse() {
    this.course_basic = [
      { id: 0, title: "쉽게 배우는 자바스크립트", process: 17, comment: 1, percent: 54 },
      { id: 1, title: "재밌는 C언어", process: 30, comment: 7, percent: 68 },
      { id: 2, title: "자바 프로그래밍", process: 6, comment: 5, percent: 21 },
      { id: 3, title: "자료구조", process: 31, comment: 31, percent: 46 },
      { id: 4, title: "RC카로 배우는 IOT", process: 21, comment: 23, percent: 80 },
      { id: 5, title: "파이썬 네트워크 프로그래밍", process: 69, comment: 19, percent: 41 },
      { id: 6, title: "라즈베리파이 강좌", process: 19, comment: 40, percent: 100 },
      { id: 7, title: "쉽게 배우는 컴퓨터 조립", process: 7, comment: 27, percent: 87 },
    ];
    return this.course_basic;
  }

  getStanCourse() {
    this.course_standrad = [
      { id: 0, title: "깊게 배우는 자바스크립트(ES6)", process: 32, comment: 18, percent: 24 },
      { id: 1, title: "최호성의 C언어 프로그래밍", process: 10, comment: 27, percent: 58 },
      { id: 2, title: "수학으로 배우는 알고리즘", process: 9, comment: 15, percent: 34 },
      { id: 3, title: "TypeScript활용하기", process: 21, comment: 61, percent: 76 },
      { id: 4, title: "TS로 nodeJS 리팩토링하기", process: 11, comment: 32, percent: 50 },
      { id: 5, title: "파이썬으로 에어팟 구현하기", process: 75, comment: 29, percent: 91 },
      { id: 6, title: "Canvas를 이용한 Web게임 만들기", process: 29, comment: 10, percent: 20 },
      { id: 7, title: "React Native를 이용한 앱 만들기!", process: 22, comment: 67, percent: 100 },
    ]
    return this.course_standrad;
  }
  getPriCourse() {
    this.course_pri = [
      { id: 0, title: "블록체인 이해하기", process: 23, comment: 1, percent: 80 },
      { id: 1, title: "고급 ES6 이해하기", process: 12, comment: 6, percent: 21 },
      { id: 2, title: "메모리 관점으로 바라보기", process: 21, comment: 8, percent: 80 },
      { id: 3, title: "C언어 포인터 심화 학습", process: 4, comment: 31, percent: 41 },
      { id: 4, title: "하이퍼레저 네트워크 구성하기", process: 21, comment: 19, percent: 73 },
      { id: 5, title: "고급 반응형 CSS 만들어보기", process: 9, comment: 13, percent: 19 },
      { id: 6, title: "파이썬으로 크롤링해보기", process: 18, comment: 17, percent: 100 },
      { id: 7, title: "네트워크 심화 학습", process: 19, comment: 6, percent: 41 },
    ];
    return this.course_pri;
  }

  getBasicDetailCourse(id: number) {
    return this.course_basic = this.getBasicCourse().filter(x => x.id == id);
  }
  getStandardDetailCourse(id: number) {
    return this.course_standrad = this.getStanCourse().filter(x => x.id == id);
  }
  getPriDetailCourse(id: number) {
    return this.course_pri = this.getPriCourse().filter(x => x.id == id);
  }

}

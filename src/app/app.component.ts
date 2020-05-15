import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  readonly arrayOfJsonObjects = [
    {
    question: 'Who is credited for inventing the first computer?',
    answers: [
      {
        answer: 'Bill Gates',
        correctAnswer: false
      },
      {
        answer: 'Charles Baggage',
        correctAnswer: true
      },
      {
        answer: 'John Logie Bird',
        correctAnswer: false
      },
      {
        answer: 'Thomas edision',
        correctAnswer: false
      }
    ]
    },
    {
    question: 'What year was the first text message sent?',
    answers: [
      {
        answer: '2020',
        correctAnswer: false
      },
      {
        answer: '1991',
        correctAnswer: false
      },
      {
        answer: '1853',
        correctAnswer: false
      },
      {
        answer: '1992',
        correctAnswer: true
      },
      {
        answer: '1978',
        correctAnswer: false
      },
    ]
    },
  {
  question: 'WHich of these soccer players have the most career goals in soccer history?',
    answers: [
      {
        answer: 'Pele',
        correctAnswer: false
      },
      {
        answer: 'Messi',
        correctAnswer: false
      },
      {
        answer: 'Ronaldo',
        correctAnswer: false
      },
      {
        answer: 'Josef Bianca',
        correctAnswer: true
      },
      {
        answer: 'Maradonna',
        correctAnswer: false
      },
    ]
    },
  {
  question: 'How many bridges are there in venice?',
    answers: [
      {
        answer: '391',
        correctAnswer: true
      },
      {
        answer: '402',
        correctAnswer: false
      },
      {
        answer: '20',
        correctAnswer: false
      },
      {
        answer: '35',
        correctAnswer: true
      },
      {
        answer: '341',
        correctAnswer: false
      },
    ]
    },
  {
  question: 'Who was the first person in space?',
    answers: [
      {
        answer: 'Neil Armstrong',
        correctAnswer: false
      },
      {
        answer: 'Yuri gagarin',
        correctAnswer: true
      },
      {
        answer: 'Buzz aldrin',
        correctAnswer: false
      },
      {
        answer: 'Buzz lightyear',
        correctAnswer: true
      }
    ]
    },
  {
  question: 'Which countrie has the largest coastline?',
    answers: [
      {
        answer: 'England',
        correctAnswer: false
      },
      {
        answer: 'Argentina',
        correctAnswer: false
      },
      {
        answer: 'india',
        correctAnswer: false
      },
      {
        answer: 'Australia',
        correctAnswer: false
      },
      {
        answer: 'Canada',
        correctAnswer: true
      },
    ]
    },
  {
  question: 'What is the longest river in the world',
    answers: [
      {
        answer: 'The amazon river',
        correctAnswer: false
      },
      {
        answer: 'The river nile',
        correctAnswer: true
      },
      {
        answer: 'The river Thames',
        correctAnswer: false
      }
    ]
    },
  {
   question: 'What is the happiest countrie in the world?',
    answers: [
      {
        answer: 'England',
        correctAnswer: false
      },
      {
        answer: 'Denmark',
        correctAnswer: false
      },
      {
        answer: 'Finland',
        correctAnswer: true
      },
      {
      answer: 'Norway',
      correctAnswer: false
      },
      {
      answer: 'Greenland',
      correctAnswer: false
    }
  ]
  },
  {
   question: 'what is the smallest country in the world?',
    answers: [
      {
        answer: 'Vaticain City',
        correctAnswer: true
      },
      {
        answer: 'India',
        correctAnswer: false
      },
      {
        answer: 'Singapore',
        correctAnswer: false
      },
      {
      answer: 'Denmark',
      correctAnswer: false
      },
      {
      answer: 'Greenland',
      correctAnswer: false
      }
    ]
    },
  {
  question: 'What is the strongest currency in the world?',
    answers: [
      {
        answer: 'us dollars',
        correctAnswer: false
      },
      {
        answer: 'pounds',
        correctAnswer: false
      },
      {
        answer: 'Jordanian Dinar',
        correctAnswer: false
      },
      {
      answer: 'Kuwaiti Dinar',
      correctAnswer: true
      },
      {
      answer: 'Greenland',
      correctAnswer: false
    }
    ]
  }
];

constructor(private renderer: Renderer2) {}

validate(el: {answer: string, correctAnswer: boolean}, htmlIElement: HTMLElement, ul: HTMLUListElement) {
for(let x = 0; x < ul.children.length; x++) {
  this.renderer.removeClass(ul.children[x].firstElementChild, 'fa-check-circle');
  this.renderer.removeClass(ul.children[x].firstElementChild, 'fa-times-circle');
  this.renderer.addClass(ul.children[x].firstElementChild, 'fa-circle');
}
this.renderer.removeClass(htmlIElement, 'fa-circle');
this.renderer.addClass(htmlIElement, el.correctAnswer ? 'fa-check-circle' : 'fa-times-circle');
}
}


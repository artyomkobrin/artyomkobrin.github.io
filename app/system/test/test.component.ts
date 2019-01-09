import {ChangeDetectorRef, Component} from '@angular/core';
import {Question} from './question.interface';
import {QuestionsService} from './questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  public values: Question[] = [];
  public endTimer = false;
  public compTest = false;
  public startWorkTest = false;
  public val;

  public disNextStep = false;
  public disPrevStep = true;



  constructor(private questionsService: QuestionsService, private cdRef: ChangeDetectorRef) {
    this.values = questionsService.getQuestions();
    console.log(this.values);
    this.values.forEach( (question) => {
      question.answers.sort(this.compareRandom);
    });
    this.values.sort(this.compareRandom);
  }

  public compareRandom(a, b) {
    return Math.random() - 0.5;
  }


  public stepper(index) {
    this.val = index;
    if (index === 0) {
      this.disPrevStep = true;
      this.disNextStep = false;
    }
    if (index === 9) {
      this.disNextStep = true;
      this.disPrevStep = false;
    }
    if (0 < index && index < 9) {
      this.disPrevStep = false;
      this.disNextStep = false;
    }
  }

  public startTest() {
    this.timer();
    this.val = 0;
    this.startWorkTest = true;
  }

  public testComplite() {

    let count = 0;

    this.values.forEach( (question) => {
        question.answers.forEach( (answer) => {
          if (answer.checked && answer.isTrue) {
            count += 1;
          }
        });
    });

    alert('resuld: ' + count);

  }

  public currently(a, b) {

    console.log(`${a} ${b.checked}`);
    console.log(this.values);
    b.checked = true;
    this.values.forEach( (question, ind) => {
      if (question.question === a.question) {
      question.answers.forEach( (ansver, index) => {
        if (ansver.answer === b.answer) {
          this.values[ind].answers[index] = b;
        } else {
          this.values[ind].answers[index].checked = false;
        }
      });
      }
    });
    // this.cdRef.markForCheck();
  }

  public nextStep() {
    console.log(this.val);
    if (this.val >= 8) {
      this.disNextStep = true;
    }
    this.disPrevStep = false;
    this.val += 1;
  }

  public prevStep() {
    console.log(this.val);
    if (this.val <= 1) {
      this.disPrevStep = true;
    }
    this.disNextStep = false;
    this.val -= 1;
  }

  public timer(): any {
    let timeOut = 70;
    let min = 0;
    let sec = 0;
    const timer = setInterval(() => {
      min = Math.trunc( timeOut / 60);
      sec = timeOut % 60;
      document.getElementById('timer').innerText = `${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec}`;
      timeOut -= 1;
      if (timeOut < 0) {
        clearInterval(timer);
        this.endTimer = true;
        this.testComplite();
      }
    }, 1000);
  }
}

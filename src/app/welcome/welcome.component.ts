import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: [ './welcome.component.scss' ]
})
export class WelcomeComponent implements OnInit {
	quizArray = [];

	constructor(public questionService: QuestionsService) {
		this.questionService.getQuizzes().subscribe((q) => {
			q.forEach((value, index) => {
				this.quizArray.push(q[index]);
			});
		});
	}

	ngOnInit() {}
}

import { LightningElement, api } from "lwc";

export default class TextFeedbackForm extends LightningElement {
  answers = [];
  errorMessage;

  @api
  get formUrl() {
    return this._formUrl;
  }
  set formUrl(value) {
    this._formUrl = value;
    this.generateAnswers();
  }

  @api
  get recipientEmail() {
    return this._recipientEmail;
  }
  set recipientEmail(value) {
    this._recipientEmail = value;
    this.generateAnswers();
  }

  @api
  get questionLabel() {
    return this._questionLabel;
  }
  set questionLabel(value) {
    this._questionLabel = value;
    this.generateAnswers();
  }

  @api
<<<<<<< HEAD
  get prospectFieldName() {
    return this._prospectFieldName;
  }
  set prospectFieldName(value) {
    this._prospectFieldName = value;
    this.generateAnswers();
  }
=======
  prospectFieldName;
>>>>>>> 22ecf795b34606cfba375b97f90c9fd38e3d28cd

  // Answer 1
  @api
  get answer1Label() {
    return this._answer1Label;
  }
  set answer1Label(value) {
    this._answer1Label = value;
    this.generateAnswers();
  }
  @api
  get answer1Value() {
    return this._answer1Value;
  }
  set answer1Value(value) {
    this._answer1Value = value;
    this.generateAnswers();
  }
  // Answer 2
  @api
  get answer2Label() {
    return this._answer2Label;
  }
  set answer2Label(value) {
    this._answer2Label = value;
    this.generateAnswers();
  }
  @api
  get answer2Value() {
    return this._answer2Value;
  }
  set answer2Value(value) {
    this._answer2Value = value;
    this.generateAnswers();
  }
  // Answer 3
  @api
  get answer3Label() {
    return this._answer3Label;
  }
  set answer3Label(value) {
    this._answer3Label = value;
    this.generateAnswers();
  }
  @api
  get answer3Value() {
    return this._answer3Value;
  }
  set answer3Value(value) {
    this._answer3Value = value;
    this.generateAnswers();
  }
  // Answer 4
  @api
  get answer4Label() {
    return this._answer4Label;
  }
  set answer4Label(value) {
    this._answer4Label = value;
    this.generateAnswers();
  }
  @api
  get answer4Value() {
    return this._answer4Value;
  }
  set answer4Value(value) {
    this._answer4Value = value;
    this.generateAnswers();
  }
  // Answer 5
  @api
  get answer5Label() {
    return this._answer5Label;
  }
  set answer5Label(value) {
    this._answer5Label = value;
    this.generateAnswers();
  }
  @api
  get answer5Value() {
    return this._answer5Value;
  }
  set answer5Value(value) {
    this._answer5Value = value;
    this.generateAnswers();
  }

  generateAnswers() {
    this.errorMessage = undefined;
    const answers = [];
    const baseUrl = `${this.formUrl}?email=${this.recipientEmail}&${this.prospectFieldName}=`;
    for (let i = 1; i < 6; i++) {
      const label = this[`_answer${i}Label`];
      const value = this[`_answer${i}Value`];
      if (!label && value) {
        this.errorMessage = `Missing label for answer ${i}`;
      } else if (label && !value) {
        this.errorMessage = `Missing value for answer ${i}`;
      } else if (label && value) {
        const url = `${baseUrl}${encodeURIComponent(value)}`;
        answers.push({
          label,
          value,
          url
        });
      }
    }
    this.answers = answers;
  }
}
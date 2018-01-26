
(function() {
  function Q(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  var q1 = new Q('Is the mitochondria the powerhouse of the cell?', ['Yes','No'], 0);
  var q2 = new Q('What is mandatory access control?',['System wide set of rules applied','Decision is at the discretion of the user'] , 0 );
  var q3 = new Q('Advantage of asymmetric ciphers?', ['Fast', 'More secure than symmetric', 'Key lengths are short'], 1);
  var arrayQ = [q1, q2, q3];
  var rand = Math.floor(Math.random() * arrayQ.length);

  Q.prototype.displayQ = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }
  Q.prototype.checkAns = function(a) {
     (a==this.correctAnswer) ? console.log("Correct!") : console.log("Incorrect!");
  }

  arrayQ[rand].displayQ();
  var userAns = parseInt(prompt('Select an answer'));
  arrayQ[rand].checkAns(userAns);
})();

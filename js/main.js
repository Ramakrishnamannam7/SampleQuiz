function calculate(){
	var correct=0;
	var question1=document.quiz.q1.value;
	var question2=document.quiz.q2.value;
	var question3=document.quiz.q3.value;
	var question4=document.quiz.q4.value;
	var question5=document.quiz.q5.value;
	if(question1=="Hypertext Markup Language"){
		correct+=1;
	}
	if(question2=="Cascading Style Sheets"){
		correct+=1;
	}
	if(question3=="JavaScript"){
		correct+=1;
	}
	if(question4=="Structured Query Language"){
		correct+=1;
	}
	if(question5=="Content Delivery Network"){
		correct+=1;
	}
	
	
	alert("You Have Scored :"+correct+"/5")
}
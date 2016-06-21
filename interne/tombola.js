(function(){

	function initialise(){
		console.log("tombala start")
		nextNumber = document.getElementById("nextNumber");
		var currentNumber = document.getElementById("currentNumber");
		var submit = document.getElementById("submit");
		var allNumbers = document.getElementById("allNumbers");

		var sortList = [];
		var listWinner=[];
		var sortIndex= 0;
		var winner;
		
		function sortNumber(){
			listWinner.push(winner);
			winner = sortList.splice((Math.floor(Math.random()*sortList.length))+1,1)
			currentNumber.innerHTML = winner;
			allNumbers.innerHTML = display();
			console.log("new number sorted")
		}

		function display(){
			var res = ''
			for (var i=1 ; i < (listWinner.length) ; i +=1){
				res = res + listWinner[i]+ '<br>' ;		
			}
			return res
		}

		function sortAList(){
			sortList=[]
			var input = document.getElementById("number")
			var number= parseInt(input.value)
			var rand;
			var aux;
			for (var i=1 ; i < (number + 1) ; i +=1){
				sortList.push(i);
			}
			console.log(sortList);
		}

		submit.addEventListener('click', sortAList)
		nextNumber.addEventListener('click', sortNumber)
		
	}	
	window.addEventListener('load', initialise)
})()






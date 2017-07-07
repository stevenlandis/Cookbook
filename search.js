var savedContents;

window.onload = function() {
	var searchTerm = document.getElementsByClassName("search")[0].value = "";
}

function search(event) {
	//console.log(event.key);
	var searchTerm = document.getElementsByClassName("search")[0].value;
	console.log(searchTerm);
	var results = searchResults(searchTerm);
	var holder;
	if (document.getElementsByClassName("normal-body-header-container").length === 0) {
		//document is a navigation page
		holder = document.getElementsByClassName("body-header-container")[0];
	} else {
		//document is normal text page
		holder = document.getElementsByClassName("normal-body-header-container")[0];
	}
	if (savedContents === undefined) {
		savedContents = holder.innerHTML;
	}
	if (searchTerm === "") {
		console.log("search term removed, reverting page");
		holder.innerHTML = savedContents;
	} else {
		holder.innerHTML = "";
		holder.innerHTML += "<h2 class=\"bodyheader\">Search Results</h2>";
		for (var i = 0; i < Math.min(results.length, 10); i++) {
			holder.innerHTML += "<a href="+pageDescriptions[results[i][0]][1]+"><p>"+pageDescriptions[results[i][0]][0]+"</p></a>"
		}
	}
}

var pageDescriptions = [['Hints and Suggestions', 'hints.html', 10], ["Ann's Crab Dip", 'annCrabDip.html', 3], ['Baklazhannaia Ikra', 'baklazhannaia.html', 5], ["Aunt Beth's Crab Dip", 'bethCrabDip.html', 4], ['Broiled Clams', 'broiledClams.html', 4], ['Buffalo Chicken Dip', 'buffaloDip.html', 3], ['Caponata', 'caponata.html', 1], ['Crabbies', 'crabbies.html', 1], ['Sausage Cheese Balls', 'sausageCheeseBalls.html', 3], ['Stuffed Cucumber', 'stuffedCucumber.html', 2], ['Vegetable Dip', 'vegetableDip.html', 2], ['Appetizers', 'appetizers.html', 1], ['Banana Bread', 'bananaBread.html', 2], ['Biscuits', 'biscuitsRecipe.html', 1], ["Bishop's Bread", 'bishopBread.html', 2], ['Blueberry Coffee Cake', 'blueberryCoffeeCake.html', 3], ['Buttermilk Hotcakes', 'buttermilkHotcakes.html', 2], ['Chippewa Fried Bread', 'chippewaFriedBread.html', 3], ['Cornmeal Mush', 'cornmealMush.html', 2], ['Crunchy Gradnola', 'crunchyGradnola.html', 2], ['Dutch Babies', 'dutchBabies.html', 2], ['Funnel Cakes', 'funnelCakes.html', 2], ['Gingerbread Scones', 'gingerbreadScones.html', 2], ['Northern Sweet Cornbread', 'northernSweetCornbread.html', 3], ['Pumpkin Nut Bread', 'pumpkinNutBread.html', 3], ['Sour-Cream Coffee Cake', 'sourCreamCoffeeCake.html', 3], ['Tea Scones', 'teaScones.html', 2], ['Waffles', 'waffles.html', 1], ['Biscuits, Breakfast, and Batter Breads', 'biscuits.html', 5], ['Austrian Striezel', 'austrianStriezel.html', 7], ['Bread, Rolls and Buns', 'bread.html', 4], ['Recipies', 'index.html', 1], ['Introduction', 'introduction.html', 1]];
var searchTerms = [["hints,", 0],["suggestions,", 0],["reminders", 0],["and", 0],["other", 0],["things", 0],["you", 0],["have", 0],["heard", 0],["before", 0],["ann's", 1],["crab", 1],["dip", 1],["baklazhannaia", 2],["ikra", 2],["(poor", 2],["man's", 2],["caviar)", 2],["aunt", 3],["beth's", 3],["crab", 3],["dip", 3],["broiled", 4],["clams", 4],["and", 4],["oysters", 4],["buffalo", 5],["chicken", 5],["dip", 5],["caponata", 6],["crabbies", 7],["sausage", 8],["cheese", 8],["balls", 8],["stuffed", 9],["cucumber", 9],["vegetable", 10],["dip", 10],["appetizers", 11],["banana", 12],["bread", 12],["biscuits", 13],["bishop's", 14],["bread", 14],["blueberry", 15],["coffee", 15],["cake", 15],["buttermilk", 16],["hotcakes", 16],["chippewa", 17],["fried", 17],["bread", 17],["cornmeal", 18],["mush", 18],["crunchy", 19],["gradnola", 19],["dutch", 20],["babies", 20],["funnel", 21],["cakes", 21],["gingerbread", 22],["scones", 22],["northern", 23],["sweet", 23],["cornbread", 23],["pumpkin", 24],["nut", 24],["bread", 24],["sour-cream", 25],["coffee", 25],["cake", 25],["tea", 26],["scones", 26],["waffles", 27],["biscuits,", 28],["breakfast,", 28],["and", 28],["batter", 28],["breads", 28],["austrian", 29],["striezel", 29],["(a.k.a.", 29],["christmas", 29],["and", 29],["easter", 29],["bread)", 29],["bread,", 30],["rolls", 30],["and", 30],["buns", 30],["recipies", 31],["introduction", 32]];

// var pageDescriptions = [['Hints and Suggestions', 'hints.html', 10], ["Ann's Crab Dip", 'annCrabDip.html', 3], ['Baklazhannaia Ikra', 'baklazhannaia.html', 5], ["Aunt Beth's Crab Dip", 'bethCrabDip.html', 4], ['Broiled Clams', 'broiledClams.html', 4], ['Buffalo Chicken Dip', 'buffaloDip.html', 3], ['Caponata', 'caponata.html', 1], ['Crabbies', 'crabbies.html', 1], ['Sausage Cheese Balls', 'sausageCheeseBalls.html', 3], ['Stuffed Cucumber', 'stuffedCucumber.html', 2], ['Vegetable Dip', 'vegetableDip.html', 2], ['Appetizers', 'appetizers.html', 1], ['Banana Bread', 'bananaBread.html', 2], ['Biscuits', 'biscuitsRecipe.html', 1], ["Bishop's Bread", 'bishopBread.html', 2], ['Blueberry Coffee Cake', 'blueberryCoffeeCake.html', 3], ['Buttermilk Hotcakes', 'buttermilkHotcakes.html', 2], ['Chippewa Fried Bread', 'chippewaFriedBread.html', 3], ['Cornmeal Mush', 'cornmealMush.html', 2], ['Crunchy Gradnola', 'crunchyGradnola.html', 2], ['Dutch Babies', 'dutchBabies.html', 2], ['Funnel Cakes', 'funnelCakes.html', 2], ['Gingerbread Scones', 'gingerbreadScones.html', 2], ['Northern Sweet Cornbread', 'northernSweetCornbread.html', 3], ['Pumpkin Nut Bread', 'pumpkinNutBread.html', 3], ['Sour-Cream Coffee Cake', 'sourCreamCoffeeCake.html', 3], ['Tea Scones', 'teaScones.html', 2], ['Waffles', 'waffles.html', 1], ['Biscuits, Breakfast, and Batter Breads', 'biscuits.html', 5], ['Austrian Striezel', 'austrianStriezel.html', 7], ['Bread, Rolls and Buns', 'bread.html', 4], ['Recipies', 'index.html', 1], ['Introduction', 'introduction.html', 1]];
// var searchTerms = [["hints,", 0],["suggestions,", 0],["reminders", 0],["and", 0],["other", 0],["things", 0],["you", 0],["have", 0],["heard", 0],["before", 0],["ann's", 1],["crab", 1],["dip", 1],["baklazhannaia", 2],["ikra", 2],["(poor", 2],["man's", 2],["caviar)", 2],["aunt", 3],["beth's", 3],["crab", 3],["dip", 3],["broiled", 4],["clams", 4],["and", 4],["oysters", 4],["buffalo", 5],["chicken", 5],["dip", 5],["caponata", 6],["crabbies", 7],["sausage", 8],["cheese", 8],["balls", 8],["stuffed", 9],["cucumber", 9],["vegetable", 10],["dip", 10],["appetizers", 11],["banana", 12],["bread", 12],["biscuits", 13],["bishop's", 14],["bread", 14],["blueberry", 15],["coffee", 15],["cake", 15],["buttermilk", 16],["hotcakes", 16],["chippewa", 17],["fried", 17],["bread", 17],["cornmeal", 18],["mush", 18],["crunchy", 19],["gradnola", 19],["dutch", 20],["babies", 20],["funnel", 21],["cakes", 21],["gingerbread", 22],["scones", 22],["northern", 23],["sweet", 23],["cornbread", 23],["pumpkin", 24],["nut", 24],["bread", 24],["sour-cream", 25],["coffee", 25],["cake", 25],["tea", 26],["scones", 26],["waffles", 27],["biscuits,", 28],["breakfast,", 28],["and", 28],["batter", 28],["breads", 28],["austrian", 29],["striezel", 29],["(a.k.a.", 29],["christmas", 29],["and", 29],["easter", 29],["bread)", 29],["bread,", 30],["rolls", 30],["and", 30],["buns", 30],["recipies", 31],["introduction", 32]];


function searchResults(term) {
	term = term.toLocaleLowerCase().split(" ");
	var res = [];
	//[address, index]
	for (var i = 0; i < term.length; i++) {
		for (var j = 0; j < searchTerms.length; j++) {
			//console.log("Comparing "+term[i]+" and "+searchTerms[j][0]);
			var n = searchIndex(term[i], searchTerms[j][0]) / pageDescriptions[searchTerms[j][1]][2];
			//console.log("\tThey got a score of: "+n);
			if (n > 0) {
				var found = false;
				for (var k = 0; k < res.length; k++) {
					if (res[k][0] === searchTerms[j][1]) {
						found = true;
						//console.log("\t\texisting entry exists, adding");
						res[k][1]+=n;
						break;
					}
				}
				if (!found) {
					//console.log("\t\texisting entry not found, adding entry");
					res.push([searchTerms[j][1], n]);
				}
			}
		}
	}
	function compare(a, b) {
		if (a[1] < b[1]) {
			return -1;
		}
		if (a[1] > b[1]) {
			return 1;
		}
		return 0;
	}
	return res.sort(compare).reverse();
}

function searchIndex(a, b) {
	var small, large;
	if (a.length > b.length) {
		large = a;
		small = b;
	} else {
		large = b;
		small = a;
	}

	var testN = small.length + large.length - 1;
	var maxMatch = 0;
	for (var i = 0; i < testN; i++) {
		var minI = Math.max(0, i - small.length + 1);
		var maxI = Math.min(large.length, i+1);
		var matches = 0;
		for (var j = minI; j < maxI; j++) {
			//console.log("\t\tcomparing " + small[j-i+small.length-1] + " and " + large[j]);
			if (small[j-i+small.length-1] === large[j]) {
				matches++;
			}
		}
		//console.log("found "+matches+" matches");
		maxMatch = Math.max(maxMatch, matches);
	}
	//console.log("Max matches: "+maxMatch);
	//console.log("result: "+maxMatch / small.length)
	if (large.length === 0) {
		return 0;
	}
	return maxMatch / large.length;
}
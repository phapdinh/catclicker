'use strict';

$(function() {
  var model = {
    firstCat: null,
    secondCat: null,
    cats: cats
  };
  
  var controller = {
    init: function() {
      view.init();
    },
    getCats: function() {
      return model.cats;
    },
	setFirstCat: function(cat) {
        model.firstCat = cat;
	},
	setSecondCat: function(cat) {
        model.secondCat = cat;
	},
	incrementCounterFirst: function() {
      model.firstCat.count++;
	},
	incrementCounterSecond: function() {
        model.secondCat.count++;
	},
	firstCatCount: function() {
        return model.firstCat.count;
	},
	secondCatCount: function() {
        return model.secondCat.count;
	},
	firstCatID: function() {
        return model.firstCat.id;
	},
	secondCatID: function() {
        return model.secondCat.id;
	}
  };
  
  var view = {
  init: function() {
    this.catImage = document.getElementById('cat_one');
    this.catImageTwo = document.getElementById('cat_two');
	this.catName = document.getElementById('cat1Name');
	this.catNameTwo = document.getElementById('cat2Name');
	this.firstCatClickCount = document.getElementById("catCount");
	this.secondCatClickCount = document.getElementById("catCount2");
	this.clearCat = document.getElementById('clearCat');
	this.render();
	this.src = "";
  },
  render: function() {
	var cats = controller.getCats(),
		catFunc = function(catCopy) {
			return function() {
				if(view.catImage.src === "" || view.catImage.src === view.src) {
					view.catImage.src = catCopy.url;
					view.catName.textContent = catCopy.name;
					controller.setFirstCat(catCopy);
					$('#' + catCopy.id).hide();
				}
				else if(view.catImageTwo.src === "" || view.catImageTwo.src === view.src) {			
					view.catImageTwo.src = catCopy.url;
					view.catNameTwo.textContent = catCopy.name;
					controller.setSecondCat(catCopy);
					$('#' + catCopy.id).hide();
				}
			};
		};

	for (i = 0; i < cats.length; i++) {
        catClicked = document.getElementById(cats[i].id);
        catClicked.src = cats[i].url;
        catClicked.addEventListener('click', catFunc(cats[i]));
	}
	
    this.catImage.addEventListener('click', function(){
        controller.incrementCounterFirst();
        view.firstCatClickCount.textContent = controller.firstCatCount();
        console.log(controller.firstCatCount());
    }, false);

    this.catImageTwo.addEventListener('click', function(){
        controller.incrementCounterSecond();
        view.secondCatClickCount.textContent = controller.secondCatCount();
        console.log(controller.secondCatCount());
    }, false);
	
	this.clearCat.addEventListener('click', function(){
        view.catImage.src = "";
        console.log(view.catImage.src.length);
        view.src = view.catImage.src;
        view.catName.textContent = "";
        view.firstCatClickCount.textContent = "";
        if(model.firstCat !== null) {
            $('#' + controller.firstCatID()).show();
        }
        view.catImageTwo.src = "";
        console.log(view.catImageTwo.src);
        view.catNameTwo.textContent = "";
        view.secondCatClickCount.textContent = "";
        if(model.secondCat !== null) {
            $('#' + controller.secondCatID()).show();
        }
	},false);
  }
  };
  controller.init();
}
);

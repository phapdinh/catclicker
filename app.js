$(function() {
  var model = {
    firstCat: null,
    secondCat: null,
    cats: [{
      name:"Jim",
      url: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
      count: 0,
	  id: "first"
    },
    {
      name:"Bob",
      url: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
      count: 0,
	  id: "second"
    },
    {
      name:"Paul",
      url: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
      count: 0,
	  id: "third"
    },
    {
      name:"Anthony",
      url: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
      count: 0,
	  id: "fourth"
    },
    {
      name:"Andrew",
      url: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
      count: 0,
	  id: "fifth"
    }
    ]
  }
  
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
  }
  
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
  },
  render: function() {
	var cats = controller.getCats();

	for (i = 0; i < cats.length; i++) {
      catClicked = document.getElementById(cats[i].id);
	  catClicked.src = cats[i].url;
	  catClicked.addEventListener('click', (function(catCopy) {
          return function() {
			if(view.catImage.src === "") {
	          view.catImage.src = catCopy.url;
			  view.catName.textContent = catCopy.name;
			  controller.setFirstCat(catCopy);
			  $('#' + catCopy.id).hide();
            }
            else if(view.catImageTwo.src === "") {			
	          view.catImageTwo.src = catCopy.url;
			  view.catNameTwo.textContent = catCopy.name;
			  controller.setSecondCat(catCopy);
			  $('#' + catCopy.id).hide();
			}
          }
      })(cats[i]))
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
	  console.log(view.catImage.src);
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
)
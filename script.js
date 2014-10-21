$(document).ready(function() {
			
		//Getting the current position of the first element
		var tilePosition = $(".Tile1").position();
		var tileTopPos = tilePosition.top;
		var tileLeftPos = tilePosition.left;
		var width = getWidth($(".Tile1")); //width of the tile
		
		//Clicking on the tile
		$(".Tile ").click(function(){
			var currElement = $(this);
			var position = currElement.position();//current position of the tile
			var left = position.left;
			var top = position.top;
			
			var leftElement = getElsAt(top,left-width);
			var rightElement = getElsAt(top,left+width);
			var upElement = getElsAt(top-width,left);
			var downElement = getElsAt(top+width,left);
			
			if (leftElement.length==0){									//Checking the element in the left
				currElement.animate({left : (left)-width+"px"}, 100);
			}else if(rightElement.length==0){							//Checking the element in the right
				currElement.animate({left : (left)+width+"px"}, 100);
			}
			else if(upElement.length==0){								//Checking the element in the top
				currElement.animate({top : (top)-width+"px"}, 100);
			}
			else if(downElement.length==0){								//Checking the element in the down
				currElement.animate({top : (top)+width+"px"}, 100);
			}
		})
		
		//function to get the width of the element
		function getWidth(element){
			var actualWidth = element.width();
			var padding = parseInt(element.css("paddingLeft")) + parseInt(element.css("paddingRight"));
			var margin = parseInt(element.css("marginLeft")) + parseInt(element.css("marginRight"));
			var border = parseInt(element.css("borderLeftWidth")) + parseInt(element.css("borderRightWidth"));
			
			return actualWidth + padding + margin + border; //entire width of the element
		}
		
		//function to get the element in the four directions
		function getElsAt(top, left){
			//condition to return only tiles
			if((Math.floor(top)>=tileTopPos && Math.floor(top)<=(width*2+tileTopPos)) && (Math.floor(left)>=tileLeftPos && Math.floor(left)<=(width*2+tileLeftPos))){
				return $("body")
				   .find("*")
				   .filter(function() {
							   return $(this).offset().top == top 
										&& $(this).offset().left == left;
				   });
			 }
			 return false;
		}
});

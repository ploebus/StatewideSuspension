//TWO CHANGES
var myRenderer;
function getRenderer(col){
if(col == 'All_PctBW'){
	var myRenderer = [
		
		{
		where: "'"+ col + "' < -0.10",
		polygonOptions:{
			fillColor:"#2C7BB6",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1,
			strokeOpacity:1
		}},
		{where:  "'"+col + "' < 0 AND '" + col + "'>-0.10",
		polygonOptions:{
			fillColor:"#ABD9E9",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' = 0",
		polygonOptions:{
			fillColor:"#FFFFBF",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.1,
			strokeOpacity:.2
			
		
		}},
		{where:  "'"+col + "' > 0 AND '" + col + "'< 0.14",
		polygonOptions:{
			fillColor:"#FDAE61",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' > 0.14",
		polygonOptions:{
			fillColor:"#D7191C",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1
		}}
					
		];
	}
//ALL OTHER LAYERS
	else
	{
	myRenderer = [
		
		{
		where: "'"+ col + "' <= 0.10",
		polygonOptions:{
			fillColor:"#fed98e",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1,
			strokeOpacity:1
		}},
		{where:  "'"+col + "' <= 0.20 AND '" + col + "'>=0.11",
		polygonOptions:{
			fillColor:"#fe9929",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' = 0",
		polygonOptions:{
			fillColor:"#ffffd4",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.1,
			strokeOpacity:.2
			
		
		}},
		{where:  "'"+col + "' <= 0.30 AND '" + col + "'>= 0.21",
		polygonOptions:{
			fillColor:"#d95f0e",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' > 0.30",
		polygonOptions:{
			fillColor:"#993404",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1
		}}
		]; 
		}
	return myRenderer;
}
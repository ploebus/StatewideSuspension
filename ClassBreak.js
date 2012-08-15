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
			fillColor:"#FFFFB2",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1,
			strokeOpacity:1
		}},
		{where:  "'"+col + "' <= 0.20 AND '" + col + "'>=0.11",
		polygonOptions:{
			fillColor:"#FECC5C",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' = 0",
		polygonOptions:{
			fillColor:"#333333",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.1,
			strokeOpacity:.2
			
		
		}},
		{where:  "'"+col + "' <= 0.30 AND '" + col + "'>= 0.21",
		polygonOptions:{
			fillColor:"#FD8D3C",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:0.5
			
		
		}},
		{where:  "'"+col + "' > 0.30",
		polygonOptions:{
			fillColor:"#E31A1C",
			strokeColor:"#333333",
			strokeWeight:"1",
			fillOpacity:1
		}}
		]; 
		}
	return myRenderer;
}
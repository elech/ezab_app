EZAB_APP.directive('graph', ['CampaignService', function(CampaignService){
	return {
		restrict: 'E',
		template: '<svg id="graph"></svg>',
		link: function(scope, element, attrs){
			//{experienceId: 1234, count: 999}
			//var data = [{experienceId: 0, start: 3, success: 2}, {experienceId: 3, start: 4, success: 4}];

CampaignService.getStats().success(function(data,status){
	console.log(data);
var margin = {top: 25, right: 75, bottom: 85, left: 85},
				w = 600 - margin.left - margin.right,
				h = 350 - margin.top - margin.bottom;
var padding = 10;
var width = w, height = h;

var y = d3.scale.linear()
    .range([height, 0])
 		.domain([0, d3.max(data, function(d) { return (d.start > d.success) ? d.start : d.success;})]) 

var xScale = d3.scale.ordinal()
	.domain(d3.range(data.length))
	.rangeRoundBands([0, width], 0.05);

var svg = d3.select("#graph")
			.append("svg")
			.attr("width", w + margin.left + margin.right)
			.attr("height", h + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var barWidth = width / data.length;
	var sets = svg.selectAll(".set") 
		.data(data) 
		.enter()
		.append("g")
	    .attr("class","set")
	    .attr("transform",function(d,i){
	         return "translate(" + xScale(i) + ",0)";
	     });


var xAxis = d3.svg.axis()
				.scale(xScale)
				.tickFormat(function(d) { return data[d].experienceId === 0 ? "Default" : data[d].experienceId; })
				.orient("bottom");


  sets.append("rect")
      .attr('class', 'expStart')
      .attr("y", function(d) { return y(d.start); })
      .attr("height", function(d) { return height - y(d.start); })
      .attr("width", xScale.rangeBand()/2)

  sets.append("rect")
 			.attr('class', 'expSuccess')
      .attr("y", function(d) { return y(d.success); })
      .attr("height", function(d) { return height - y(d.success); })
      .attr("width", xScale.rangeBand()/2)
      .attr("x", xScale.rangeBand()/2)

//txt
  sets.append("text")
			.attr("width", xScale.rangeBand()/2)
			.attr("y", function(d) {
				return y(d.start);
		   })
	    .attr("dy", 10)
	    .attr("dx",(xScale.rangeBand() / 4) - 10)
	    
	    .attr("font-family", "sans-serif") 
	    .attr("font-size", "8px")
	    .attr("fill", "white")
      .text(function(d) { return d.start; });

  sets.append("text")
			.attr("y", function(d) {
				return y(d.success);
		   })
	    .attr("dy", 10)
	    .attr("dx", (xScale.rangeBand()/1.60) )
	    .attr("font-family", "sans-serif") 
	    .attr("font-size", "8px")
	    .attr("fill", "white")
      .text(function(d) { return d.success; });

svg.append("g") // Add the X Axis
	.attr("class", "x axis")
	.attr("transform", "translate(0," + (h) + ")")
	.call(xAxis)
	.selectAll("text")
		.style("text-anchor", "end")
		.attr("dx", ".5em")
		.attr("dy", "1em")


function type(d) {
  d.start = +d.start; // coerce to number
  return d;
}
	
})




		}
	}
}])
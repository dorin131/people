import * as d3 from 'd3';

export function Graph() {

  function getPhoto(person) {
    if (person.hasPhoto) {
      return `http://localhost:4000/images/${person._id}.jpeg` 
    }
    return "http://localhost:4000/images/anonymous.jpeg";
  }

  function draw(data) {
    document.querySelector('svg').innerHTML = '';
  
    const width = document.querySelector('svg').clientWidth;
    const height = document.querySelector('svg').clientHeight;
    const svg = d3.select('svg');
  
    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("collide",d3.forceCollide(50).iterations(16))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));
  
    const graph = {
      nodes: data.map(person => ({ ...person, id: person.name })),
      links: data.map(person => {
        if (person.group) {
          return {
            source: person.group,
            target: person.name,
            value: 2
          }
        }
        return null;
      }).filter(Boolean)
    }
  
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line")
      .attr("stroke", "black")
      
    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter()
      .append("g")
      
    const circleRadius = 20;
  
    // create circle mask for the image
    node
      .append("defs")
      .append("clipPath")
      .attr('id', 'myCircle')
      .append("circle")
      .attr("r", circleRadius);
  
    // create another circle for the border
    node
      .append("circle")
      .attr("r", circleRadius);
  
    // create label with name
    node.append("text")
        .text(function(d) {
          return d.name;
        })
        .attr('x', circleRadius + 5)
        .attr('y', 5);
  
    // create hint with title
    node.append("title")
        .text(function(d) { return d.title; });
  
    // add person image
    node.append("svg:image")
        .attr('x', -circleRadius)
        .attr('y', -circleRadius)
        .attr('width', circleRadius * 2)
        .attr('height', circleRadius * 2)
        .attr("xlink:href", getPhoto)
        .attr("clip-path", "url(#myCircle)")
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
  
    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);
  
    simulation.force("link")
        .links(graph.links);
  
    function ticked() {
      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
  
      node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
    }
  
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
  
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
  
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  return {
    draw
  }
}
var svg = d3.select('#drawArea')
.append('svg')
.style({
       'width': '940px',
       'height': '600px'
       });

init();

function init () {
    var dataset = []
    d3.csv("data/data.csv", function(error, data){
           for(i = 0 ; i < data.length;i++){
             obj = {
                  x: (parseFloat(data[i].x) + 25)*19 ,
                  y: (parseFloat(data[i].y) + 24)*13 ,
                  r: parseInt((parseFloat(data[i].r) + 10)* 11,10),
                  g: parseInt((parseFloat(data[i].g ) + 10)* 11,10),
                  b: parseInt((parseFloat(data[i].b ) +10)* 11,10),
                  text: data[i].text,
                  age:data[i].age,
                  location:data[i].location
             }
             dataset.push(obj);
           }
           svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .on("mouseover",  function(d,i){  showPopover.call(this, d); })
            .on("mouseout",  function(d,i){ removePopovers(); })
            .attr({
                 'class': 'data',
                 cx : function(d){ return d.x; },
                 cy : function(d){ return d.y; },
                 r : 0,
                 fill : function(d){ return ("rgb(" + d.r + "," +d.g +","+d.b +")") ; }
                 })
            .transition()
            .duration(1500)
            .ease("elastic", 1, 0.8)
            .attr({
                 r: 8
                 })


            //ラベル
            svg.append('text').attr({
             'class': 'label',
             x : 50,
             y : 220,
             fill : function(d){ return ("rgba(125,100,-7,0.5)") ; }
             }).text("妊娠・出産");

            svg.append('text').attr({
             'class': 'label',
             x : 55,
             y : 570,
             fill : function(d){ return ("rgba(75,224,-7,0.5)") ; }
             }).text("教育費・医療費");  

            svg.append('text').attr({
             'class': 'label',
             x : 180,
             y : 40,
             fill : function(d){ return ("rgba(166,-17,59,0.5)") ; }
             }).text("ママ友・イベント・公園");  

            svg.append('text').attr({
             'class': 'label',
             x : 580,
             y : 590,
             fill : function(d){ return ("rgba(96,-8,138,0.5)") ; }
             }).text("仕事・職場・育休");   

            svg.append('text').attr({
             'class': 'label',
             x : 550,
             y : 15,
             fill : function(d){ return ("rgba(-1,90,35,0.5)") ; }
             }).text("エレベーター・ベビーカー");   

            svg.append('text').attr({
             'class': 'label',
             x : 748,
             y : 480,
             fill : function(d){ return ("rgba(146,212,165,0.6)") ; }
             }).text("保育園・待機児童");   



           });

          //
    
}

function showPopover (d) {
    $(this).popover({
                    placement: 'top',
                    container: 'body',
                    trigger: 'manual',
                    html : true,
                    content: function() {
                    //return "地域：" + d.location + "<br />" +
                    //"ママの年代：" + d.age + "<br />" +
                    return "ママの年代：" + d.age + "<br />" +
                    "「" + d.text +"」" ;
                    }
                    });
    $(this).popover('show')
}

function removePopovers () {
    $('.popover').each(function() {
                       $(this).remove();
                       });
}

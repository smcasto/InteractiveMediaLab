
d3.select("body")
        .append("p").text("Cinderella wanted to go to the ball but...")
            .attr("id", "ball")
            .on("click", function()
               {
                d3.select("body")
                    .insert("p", "#ball")
                    .text("She was a poor maid.")
                    .attr("id", "poor")
                .on("click", function()
               {
                d3.select("body")
                    .insert("p", "#poor").text("Luckily, she had a fairy godmother.")
                    .attr("id", "luckily")
               .on("click", function()
                {
                    d3.select("body")
                    .insert("p", "#luckily")
                    .text("Her fairy godmother magically transformed her and gave her beautiful clothes and a carriage.")
                    .attr("id", "magically")
                    .on("click", function()
                       {
                        d3.select("body")
                        .insert("p","#magically")
                        .text("She looked beautiful and ready to go to the ball.")
                        .attr("id", "beautiful")
                        .on("click", function()
                           {
                            d3.select("body")
                                .insert("p", "#beautiful")
                                .text("At the ball, she danced with the prince and they lived happily ever after.")
                               .attr("id", "happy")
                                .on("click", function()
                                   {
                                d3.select("body")
                                    .insert("p", "#happy")
    
                            })
                            d3.select(this).remove()
                        })
                    d3.select(this).remove()    
                    })
                    
                    d3.select(this).remove()
                })
                
                
                d3.select(this).remove()
                
                })
    d3.select(this).remove()
                })
           
d3.select("body")
        .append("img")
            .attr("src", "cinderella_PNG55.png")
            .attr("width", 300)
            .on("click", function()
               {  d3.select("img")
                   .attr("src", "maid.png")
                   
                    .on("click", function()
                       { d3.select("img")
                        .attr("src", "fairy.png")
                        .on("click", function()
                        { d3.select("img")
                         .attr("src", "carriage.jpg")
                         .on("click", function()
                            {d3.select("img")
                            .attr("src", "dress.png")
                             .on("click", function()
                                {
                                d3.select("img")
                                .attr("src", "cinderella_PNG55.png")
                            })
                             })
                        })
                       
                  
               })
})
d3.select("h1")
    .on ("mouseover", function()
        { d3.select("h1")
                    .style("color", "red")
            .on ("mouseout", function()
                {d3.select("h1")
                .style("color","black")
                 
                 })
    
})
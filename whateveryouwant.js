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
                    
                    d3.select(this).remove()
                })
                
                
                d3.select(this).remove()
                
                })
    d3.select(this).remove()
                })
           
d3.select("body")
        .append("img") 
            .attr("src", "cinderella_PNG55.png")
            .on("click", function()
               {
    d3.select(this)
        .attr("src", "maid.png")
    
})
            .on("click", function()
               
               {d3.select(this)
        .attr("src", "fairy.png")
    
})


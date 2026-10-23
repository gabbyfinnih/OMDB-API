

async function getMovies() {
    try {
        // 1. Get the search term from the search box,
        const search = document.getElementById("search").value;
        //          send a request to the ombd (USING YOUR API KEY)
        const url="https://www.omdbapi.com/?apikey=54c37f81&s=" + search; 
        //          decode the response as JSON
        const headers = new Headers();
        headers.append("Accept", "application/json");
        const response = await fetch(url)

        const json = await response.json();


        const movieHolder = document.getElementById("movieHolder");
        movieHolder.textContent = ""
        for (movie of json.Search) {
            //  Create a div to hold each image and title
            const wrapper = document.createElement("div")
            let title = document.createElement('h3')
            title.textContent = movie.Title + ": "+movie.Year

            //  Give the div the css class of CARD
            wrapper.classList.add("card")

            // Create an image element
            //      point it to the image from this movie
            const image = document.createElement("img")            
            image.src = movie.Poster
            image.width = 100;

            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container
            const container = document.createElement("div")
            container.classList.add("container")
            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder 
            container.append(title)

            wrapper.append(image)
            wrapper.append(container)
            movieHolder.append(wrapper)
        }


    }
    catch (error) {
        console.log(error)
    }
}
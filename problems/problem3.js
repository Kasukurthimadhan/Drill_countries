// 3. Find which country has more population among all?

function whichCountryHasMorePopulation(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No population in the data")
        }
        let countryWithHighestPopulation = data[0]; // Assume the first country has the highest population initially

    let morePopulation=data.reduce((acc,array) =>{
        if(array.population>acc.population){
            return array
        }
        else{
            return acc
        }
    });
    return morePopulation.country

    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=whichCountryHasMorePopulation;
// 2. Find the average population among all countries.

function avaragePopulation(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No population in the data")
        }
        let avarage=data.reduce((acc,array) =>{
            acc=acc+array.population;
            return acc;
        },0);
        let count=data.length;
        return avarage/count
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=avaragePopulation;
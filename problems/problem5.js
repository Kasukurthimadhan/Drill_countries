// 5. Console log the city names that has Bus transport facility.

function cityNames(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No city names in the data")
        }
        let cityName=data.reduce((acc,array) =>{
            if(array.publicTransport.includes('Bus')){
                acc.push(array.city)
            }
            return acc
        },[]);
        return cityName
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=cityNames;
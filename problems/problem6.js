// 6. Write a function that should take foodItem as a param and return which city has that foodItem in their famousFood list.

function famousFoodCountry(data,foodItem){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No famous food item in the data")
        }
        let food=data.reduce((acc,array) =>{
            if(array.famousFood.includes(foodItem)){
                acc.push(array.city)
            }
            return acc
        },[]);
        return food;
    } catch (error) {
       console.error("An error occurred while processing the data:",error) 
    }
}

module.exports=famousFoodCountry;
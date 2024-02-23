// 4. Store all attractions in an array

function allAttractions(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No attractions in an array")
        }
        let attractions=data.map((all) => all.attractions);
        return attractions;
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=allAttractions;
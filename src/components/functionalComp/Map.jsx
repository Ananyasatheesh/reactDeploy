const Map = () => {
    const list = [10,20,30,40,50,100,200,98]
    // const list1 = [...list,60,100,80,98]
    list.forEach(element => {
        console.log(element)
    });

    return(
        <div>
            <ul>
                <p>Without filter</p>
                {list.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
                <p>With filter</p>
                {list.filter(list => list<100).map(((val,index)=>(
                    <li key={index}>{val}</li>
                )))}
            </ul>
        </div>
    )
}

export default Map;
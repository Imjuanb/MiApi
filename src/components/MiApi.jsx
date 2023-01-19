import { useEffect, useState } from "react";

const MiApi = () => {

 const [characters, setCharacters] = useState([])
 const [search, setSearch] = useState('')

    const getData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
    };

    useEffect(() => {
     getData();

    }, []);

return (
    <div className="container">

        <input style={{width: "100%"}}
        placeholder="Search" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}/>

       <div className="d-flex justify-content-betweenm flex-wrap col-3" style={{width: "100%" }} >
        {characters.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())).map((value) => {
            return <div key={value.id}>
                <div className="mx-5 my-3 text-white bg-dark card">
                <img src={value.image} alt="" />
                {value.name}
                </div>
                </div>
        })}
       </div>
    </div>
)
};
export default MiApi;
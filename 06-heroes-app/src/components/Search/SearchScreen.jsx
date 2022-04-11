import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroByName } from '../../helpers/getHeroByName'
import queryString from 'query-string'

const SearchScreen = () => {


    const navigate = useNavigate();
    const location = useLocation();


    const [error, setError] = useState({ error: false, message: false })
    const { q } = queryString.parse(location.search)

    const initialState = {
        searchInput: q,
    }
    const [valuesForm, setValuesForm] = useState(initialState)
    const { searchInput = '' } = valuesForm
    const [dataHeroe, setDataHeroe] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchInput.trim().length) {
            setError({ error: true, message: 'No hay Coincidencias con tu busqueda' })
            setDataHeroe([]);
            return
        }

        const data = getHeroByName(searchInput);

        if (!data.length) {
            setError({ error: true, message: 'No hay Coincidencias con tu busqueda' })
            setDataHeroe([]);
            return
        }

        setDataHeroe(data);
        setError({ error: false, message: false });


        navigate(`?q=${searchInput}`)

    }

    const handleChange = (e) => {
        setValuesForm({ ...valuesForm, [e.target.name]: e.target.value });
    }

    return (
        <>

            <div className='row my-4'>
                <div className="col-12 col-md-5">
                    <h1 className=''>Search</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input value={searchInput} onChange={handleChange} className='p-2 mb-2 form-control' type="text" name="searchInput" placeholder='busca tu Heroe' />
                        <button className='btn btn-dark w-100'>Search</button>
                    </form>
                </div>
                <div className="col-12 col-md-7">
                    {
                        error.error
                        && <div className='alert alert-danger text-center'>{error.message}</div>
                    }


                    {
                        dataHeroe.length > 0 &&
                        <>
                            <h1>Results</h1>
                            <hr />
                            <div className="row">
                                <div className="col-4">
                                    <img src={`/assets/${dataHeroe[0].id}.jpg`} className="card-img-top im-respnsive " alt={dataHeroe[0].superhero} />
                                </div>
                                <div className="col">
                                    <h1>{dataHeroe[0].superhero}</h1>
                                    <hr />
                                    <h6>{dataHeroe[0].publisher}</h6>
                                    <hr />
                                    <h6>{dataHeroe[0].alter_ego}</h6>
                                    <hr />
                                    <h6>{dataHeroe[0].first_appearance}</h6>
                                    <hr />
                                    <h6>{dataHeroe[0].characters}</h6>
                                    <hr />
                                    <button className='btn btn-dark' onClick={() => navigate(-1)}>Regresar</button>
                                </div>
                            </div>

                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default SearchScreen

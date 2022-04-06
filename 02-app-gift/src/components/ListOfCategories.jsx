import React, { useState } from 'react'
import AddCategory from './AddCategory';
import { Categories } from './Categories';

export const ListOfCategories = () => {

    const [categories, setCategories] = useState(['naruto', 'boruto', 'hinata', 'sasuke']);

    return (
        <>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((e, i) => (
                        < Categories key={i} categoria={e} />
                    ))
                }
            </ol>

        </>
    )
}

import { SearchBox } from '@fluentui/react';
import React from 'react'

const Search: React.FC = () => {
    return (

        <div className="ms-Grid-col ms-sm9">
            <SearchBox placeholder="Pesquisar" styles={{ root: { width: 400, borderRadius: 5 } }} />
        </div>

    )
}

export default Search;
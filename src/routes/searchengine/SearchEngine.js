import React, { useEffect, useState } from 'react';

import './SearchEngine.scss'

import {getImagesByKey} from '../../api/index'

import ImageSearch from '../../components/searchengine/imagesearch/ImageSearch'; 
import ResultGrid from '../../components/searchengine/resultgrid/ResultGrid';
import ResultInfo from '../../components/searchengine/resultinfo/ResultInfo';


export default function SearchEngine(){
    const [searchKey, setSearchKey] = useState('');
    const [currentSKey, setCurrentSKey] = useState('')
    const [startNum, setStartNum] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    const [formClassName, setFormClassName] = useState('formV1');

    function onSearchKeyChange(e){
        setSearchKey(e.target.value)
    }

    function incrementStartNum(){
        if((startNum + 10) >= totalResults){
            setStartNum(totalResults)
        }else{
            setStartNum(startNum+10);
        }
    }

    function decrementStartNum(){
        if(startNum <= 10){
            setStartNum(0);
        }else{
            setStartNum(startNum-10);
        }
    }

    async function fetchSearchResults(e){
        if(searchKey === ''){
            return;
        }
        e.preventDefault();
        const result = await getImagesByKey(searchKey, 0);
        if(result !== null){
            setFormClassName('formV2');
            setSearchResults(result.items);
            setTotalResults(parseFloat(result.searchInformation.totalResults));
            setCurrentSKey(searchKey);
            setStartNum(0);
        }

        console.log(result);
    }

    async function fetchNextPage(startNum){
        if(currentSKey === ''){
            return;
        }
        const result = await getImagesByKey(currentSKey, startNum);
        if(result !== null){
            setSearchResults(result.items);
        }

        console.log(result);
    }

    useEffect(() => {
        fetchNextPage(startNum);
      }, [startNum]);

    return(
        <div className="searchEngineContainer"> 
            <ImageSearch 
                value={searchKey} 
                onChange={onSearchKeyChange} 
                onSubmit={fetchSearchResults} 
                className={formClassName}/> 
            {(totalResults > 0) &&
            <ResultInfo
                total={totalResults} 
                start={startNum} 
                onInc={incrementStartNum} 
                onDec={decrementStartNum}/>}
            <ResultGrid items={searchResults}/>
        </div>
    );
}
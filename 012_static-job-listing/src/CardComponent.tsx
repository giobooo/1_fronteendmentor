import { createContext, useContext, useState } from 'react';
import { filtersContext } from './filtesContext';


export interface JobListing {
    id:        number;
    company:   string;
    logo:      string;
    new:       boolean;
    featured:  boolean;
    position:  string;
    role:      string;
    level:     string;
    postedAt:  string;
    contract:  string;
    location:  string;
    languages: string[];
    tools:     string[];
}

function CardComponent (props:any){

    
    const {filters, updateFilters } = useContext(filtersContext);

    const item = props.itemToPass as JobListing;


    function activateFilter(e:MouseEvent){
        const key = (e.target as HTMLElement).innerHTML;
        let Nfilters = filters as Array<string>;
        if (!Nfilters.includes(key)){
            Nfilters.push(key);
            updateFilters(...filters, Nfilters);
            console.log(filters);
        }

    }


    return(
        <div className="card">
            <div className="card__left">
                <img src={item.logo} alt={item.company} />
                    <div className="card__text">
                        <div className="company-container">
                            <span className="company">{item.company}</span>
                            <div className="tags">{item.new && (<span className="newTag">NEW!</span>)}
                            {item.featured && (<span className="featuredTag">FEATURED</span>)}</div>
                        </div>
                        <span className="job-description">{item.position}</span>
                        <div className="job-more-details">
                            <span>{item.postedAt}</span>
                            <div></div>
                            <span>{item.contract}</span>
                            <div></div>
                            <span>{item.location}</span>
                        </div>
                    </div>
            </div>
            <div className="card__right">
               <div className="languages">{item.tools.length > 0 && (item.tools.map((tool) => <button type="button" className="tools-languages" key={tool} onClick={(e) => activateFilter(e)}>{tool}</button>))}
                    {item.languages.length > 0 && (item.languages.map((language) => <button type="button" className="tools-languages" key={language}>{language}</button>))}</div>       
            </div>
        </div>
    );
}

export default CardComponent;
import CardComponent from "./CardComponent";
import { JobListing } from "./CardComponent";



function Content(props){



    return(        
        <main>

        <div className="filters-container">
            <div className="filter-button">
                <div className="filter-button__tag tools-languages">Javascript</div>
                <button type="button" className="filter-button__remove" title="remove filter"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.435 2.12132L11.3137 0L6.71751 4.59619L2.12132 0L0 2.12132L4.59619 6.71751L0 11.3137L2.12132 13.435L6.71751 8.83883L11.3137 13.435L13.435 11.3137L8.83883 6.71751L13.435 2.12132Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>

            <div className="card-container">
            {
        props.jobs.map(element => {
            const item = element as JobListing;
            return <CardComponent key={element.id} itemToPass={item}></CardComponent>})
        }
                </div>
        </main>
    );
}

export default Content;
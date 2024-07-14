import "./pagination.css";


const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i);
    }

    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="page previous">
                <i class="bi bi-arrow-right"></i>
            </button>
            {generatedPages.map(page =>
                <div onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "page active" : "page"} key={page}>
                    {page}
                </div>
            )}
            <button disabled={currentPage === pages} onClick={() => setCurrentPage(prev => prev + 1)} className="page next">
                <i class="bi bi-arrow-left"></i>
            </button>
        </div>
    )
}

export default Pagination;
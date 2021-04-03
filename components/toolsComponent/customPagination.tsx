import React from 'react';

export function Pagination() {
  return (
    <div className="col pagination-section">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item page-next">
            <span aria-hidden="true" className="text-muted">&gt;</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

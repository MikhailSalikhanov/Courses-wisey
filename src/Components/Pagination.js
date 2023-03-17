import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <>
            {item}
          </>
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="w-full flex items-center justify-center bg-blue-600 gap-10 py-2"
        pageClassName="hover:scale-125"
        previousClassName="hover:scale-125"
        nextClassName="hover:scale-125"
        activeClassName="text-white"
        disabledClassName="invisible"
      />
    </>
  );
}

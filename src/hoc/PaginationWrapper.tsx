import { Center } from "@chakra-ui/layout";
import { ReactNode } from "react";
import ReactPaginate from "react-paginate";
function PaginationWrapper({
  onPageChange,
  pageCount,
  children,
  ...prev
}: {
  onPageChange: Function;
  pageCount: number;
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <Center mb={3}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={onPageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={"Prev"}
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          {...prev}
        />
      </Center>
    </>
  );
}

export default PaginationWrapper;

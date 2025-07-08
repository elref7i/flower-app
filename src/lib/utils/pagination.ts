type PaginationType = {
  currentPage: number;
  totalPages: number;
};

export const generaToPages = ({ currentPage, totalPages }: PaginationType) => {
  const pages = [];

  if (totalPages <= 5) {
    // عرض كل الصفحات لو العدد صغير
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // عرض الصفحات بشكل مختصر مع ...
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, -1, totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(currentPage - 1, currentPage, currentPage + 1, -1, totalPages);
    }
  }

  return pages;
};

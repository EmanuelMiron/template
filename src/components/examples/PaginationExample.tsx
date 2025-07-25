import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../Collapsible';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../Pagination';

export const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSecondary, setCurrentPageSecondary] = useState(1);
  const [currentPageOutline, setCurrentPageOutline] = useState(1);

  const handlePageChange = (page: number, setter: (page: number) => void) => {
    setter(page);
  };

  const renderPagination = (
    currentPage: number,
    setCurrentPage: (page: number) => void,
    variant: 'primary' | 'secondary' | 'outline',
    size: 'sm' | 'md' | 'lg' = 'md',
    totalPages: number = 10
  ) => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return (
      <Pagination variant={variant} size={size}>
        <PaginationContent variant={variant} size={size}>
          <PaginationItem variant={variant} size={size}>
            <PaginationPrevious
              variant={variant}
              size={size}
              onClick={() => handlePageChange(Math.max(1, currentPage - 1), setCurrentPage)}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          
          {pages.map((page, index) => (
            <PaginationItem key={index} variant={variant} size={size}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis variant={variant} size={size} />
              ) : (
                <PaginationLink
                  variant={variant}
                  size={size}
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page as number, setCurrentPage)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          
          <PaginationItem variant={variant} size={size}>
            <PaginationNext
              variant={variant}
              size={size}
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1), setCurrentPage)}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <Collapsible>
      <CollapsibleTrigger variant="primary" size="lg">
        <h2 className="text-2xl font-semibold">Pagination Examples</h2>
      </CollapsibleTrigger>
      <CollapsibleContent variant="outline" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Pagination Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Basic Pagination Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Primary Variant</h5>
                {renderPagination(currentPage, setCurrentPage, 'primary')}
                <p className="text-sm text-[var(--color-foreground-secondary)] mt-2">
                  Current page: {currentPage}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">Secondary Variant</h5>
                {renderPagination(currentPageSecondary, setCurrentPageSecondary, 'secondary')}
                <p className="text-sm text-[var(--color-foreground-secondary)] mt-2">
                  Current page: {currentPageSecondary}
                </p>
              </div>

              <div>
                <h5 className="font-medium mb-2">Outline Variant</h5>
                {renderPagination(currentPageOutline, setCurrentPageOutline, 'outline')}
                <p className="text-sm text-[var(--color-foreground-secondary)] mt-2">
                  Current page: {currentPageOutline}
                </p>
              </div>
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Small Size</h5>
                <Pagination variant="primary" size="sm">
                  <PaginationContent variant="primary" size="sm">
                    <PaginationItem variant="primary" size="sm">
                      <PaginationPrevious variant="primary" size="sm" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="sm">
                      <PaginationLink variant="primary" size="sm">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="sm">
                      <PaginationLink variant="primary" size="sm" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="sm">
                      <PaginationLink variant="primary" size="sm">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="sm">
                      <PaginationEllipsis variant="primary" size="sm" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="sm">
                      <PaginationNext variant="primary" size="sm" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div>
                <h5 className="font-medium mb-2">Medium Size (Default)</h5>
                <Pagination variant="secondary" size="md">
                  <PaginationContent variant="secondary" size="md">
                    <PaginationItem variant="secondary" size="md">
                      <PaginationPrevious variant="secondary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationEllipsis variant="secondary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationNext variant="secondary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div>
                <h5 className="font-medium mb-2">Large Size</h5>
                <Pagination variant="outline" size="lg">
                  <PaginationContent variant="outline" size="lg">
                    <PaginationItem variant="outline" size="lg">
                      <PaginationPrevious variant="outline" size="lg" />
                    </PaginationItem>
                    <PaginationItem variant="outline" size="lg">
                      <PaginationLink variant="outline" size="lg">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="lg">
                      <PaginationLink variant="outline" size="lg" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="lg">
                      <PaginationLink variant="outline" size="lg">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="lg">
                      <PaginationEllipsis variant="outline" size="lg" />
                    </PaginationItem>
                    <PaginationItem variant="outline" size="lg">
                      <PaginationNext variant="outline" size="lg" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>

          {/* Advanced Examples */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Advanced Examples</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Many Pages (with ellipsis)</h5>
                <Pagination variant="primary" size="md">
                  <PaginationContent variant="primary" size="md">
                    <PaginationItem variant="primary" size="md">
                      <PaginationPrevious variant="primary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md" isActive>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationEllipsis variant="primary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">20</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationNext variant="primary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div>
                <h5 className="font-medium mb-2">Disabled States</h5>
                <Pagination variant="secondary" size="md">
                  <PaginationContent variant="secondary" size="md">
                    <PaginationItem variant="secondary" size="md">
                      <PaginationPrevious variant="secondary" size="md" disabled />
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationNext variant="secondary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              <div>
                <h5 className="font-medium mb-2">Simple Pagination</h5>
                <Pagination variant="outline" size="md">
                  <PaginationContent variant="outline" size="md">
                    <PaginationItem variant="outline" size="md">
                      <PaginationPrevious variant="outline" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="outline" size="md">
                      <PaginationLink variant="outline" size="md" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="md">
                      <PaginationLink variant="outline" size="md">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="md">
                      <PaginationLink variant="outline" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="outline" size="md">
                      <PaginationNext variant="outline" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Demo</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">Dynamic Pagination</h5>
                <div className="space-y-4">
                  <Pagination variant="primary" size="md">
                    <PaginationContent variant="primary" size="md">
                      <PaginationItem variant="primary" size="md">
                        <PaginationPrevious
                          variant="primary"
                          size="md"
                          onClick={() => handlePageChange(Math.max(1, currentPage - 1), setCurrentPage)}
                          disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      {[1, 2, 3, 4, 5].map((page) => (
                        <PaginationItem key={page} variant="primary" size="md">
                          <PaginationLink
                            variant="primary"
                            size="md"
                            isActive={page === currentPage}
                            onClick={() => handlePageChange(page, setCurrentPage)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem variant="primary" size="md">
                        <PaginationNext
                          variant="primary"
                          size="md"
                          onClick={() => handlePageChange(Math.min(5, currentPage + 1), setCurrentPage)}
                          disabled={currentPage === 5}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                  <div className="text-center">
                    <p className="text-sm text-[var(--color-foreground-secondary)]">
                      Current page: {currentPage} of 5
                    </p>
                    <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
                      Click on page numbers or use Previous/Next buttons
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Custom Styling</h5>
                <Pagination variant="primary" size="md" className="bg-muted/50 p-4 rounded-lg">
                  <PaginationContent variant="primary" size="md">
                    <PaginationItem variant="primary" size="md">
                      <PaginationPrevious variant="primary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationNext variant="primary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Usage Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Basic Usage</h5>
              <div className="bg-background p-4 rounded border">
                <Pagination variant="primary" size="md">
                  <PaginationContent variant="primary" size="md">
                    <PaginationItem variant="primary" size="md">
                      <PaginationPrevious variant="primary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationLink variant="primary" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="primary" size="md">
                      <PaginationNext variant="primary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">With Ellipsis</h5>
              <div className="bg-background p-4 rounded border">
                <Pagination variant="secondary" size="md">
                  <PaginationContent variant="secondary" size="md">
                    <PaginationItem variant="secondary" size="md">
                      <PaginationPrevious variant="secondary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationEllipsis variant="secondary" size="md" />
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationLink variant="secondary" size="md">10</PaginationLink>
                    </PaginationItem>
                    <PaginationItem variant="secondary" size="md">
                      <PaginationNext variant="secondary" size="md" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}; 
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  currentPage: string;
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8 space-y-4 text-sm'>
      <ol className='flex flex-wrap items-center gap-x-2 gap-y-1 text-(--text-muted)'>
        <li>
          <Link className='transition hover:text-(--zebra-blue)' to='/'>
            Home
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li>
          <Link className='transition hover:text-(--zebra-blue)' to='/get-help'>
            Get Help
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li aria-current='page' className='font-medium text-(--text-dark)'>
          {currentPage}
        </li>
      </ol>

      <Link
        to='/get-help'
        className='inline-flex items-center gap-2 font-semibold text-(--zebra-blue) transition hover:text-(--quick-red)'
      >
        <ArrowLeft aria-hidden='true' size={17} />
        Back to Help Centre
      </Link>
    </nav>
  );
}

export default Breadcrumb;

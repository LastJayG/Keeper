import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useBreadcrumbStore } from '../../stores/useBreadcrumbStore';

export default function PageBreadcrumbs() {
  const crumbs = useBreadcrumbStore((state) => state.crumbs);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      color="text.primary"
      sx={{ mb: 2, padding: '32px', fontSize: '30px' }}
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return isLast ? (
          <Typography key={index} sx={{ color: 'text.primary', fontSize: 30 }}>
            {crumb.label}
          </Typography>
        ) : (
          <Link
            key={index}
            component={RouterLink}
            to={crumb.href!}
            underline="hover"
            sx={{ color: 'text.primary', fontSize: 30 }}
          >
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

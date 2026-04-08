import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
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
        const Icon = crumb.icon;

        return isLast ? (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {Icon && <Icon sx={{ fontSize: 30 }} />}
            <Typography sx={{ color: 'text.primary', fontSize: 30 }}>
              {crumb.label}
            </Typography>
          </Box>
        ) : (
          <Link
            key={index}
            component={RouterLink}
            to={crumb.href!}
            underline="hover"
            sx={{ color: 'text.primary', fontSize: 30, display: 'flex', alignItems: 'center', gap: 1 }}
          >
            {Icon && <Icon sx={{ fontSize: 30 }} />}
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
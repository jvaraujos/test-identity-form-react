// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';

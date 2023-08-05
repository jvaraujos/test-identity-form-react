import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date: Date | string | number) {
  return format(new Date(date), 'dd/MM/yyyy');
}
export function fDateUTC(date: Date | string | number) {
  return format(new Date(date), 'yyyy-MM-dd');
}
export function fCompetence(date: Date | string | number) {
  return format(new Date(date), 'MM/yyyy');
}

export function fYear(date: Date | string | number) {
  return format(new Date(date), 'yyyy');
}

export function fDateTime(date: Date | string | number) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm');
}

export function fTimestamp(date: Date | string | number) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: Date | string | number) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date: Date | string | number) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function formatDateTimeAgo(datetime: Date): string {
  const now = new Date();
  let publishedAt: Date;
  if (typeof datetime === 'string') {
    publishedAt = new Date(datetime);
  } else {
    publishedAt = datetime;
  }
  const diffInSeconds = Math.floor((now.getTime() - publishedAt.getTime() ) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return `${diffInMinutes}m`;
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return `${diffInHours}h`;
  } else {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return `${diffInDays}d`;
  }
}

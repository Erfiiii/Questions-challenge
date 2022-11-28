const formatter = new Intl.DateTimeFormat('fa-IR', { calendar: 'persian' });

export function formatDate(date: Date) {
  return formatter.format(date);
}


const formatter = new Intl.DateTimeFormat('fa-IR', { calendar: 'persian',
  hour: '2-digit',
  minute: '2-digit',
});

export function formatTime(date: Date) {
  return formatter.format(date);
}

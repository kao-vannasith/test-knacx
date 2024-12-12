// utils/dateFormatter.js
export function formatDateThai(date) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    
    return new Intl.DateTimeFormat('th-TH', options).format(new Date(date));
  }
  
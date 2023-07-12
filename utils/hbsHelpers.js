module.exports = {
  format_date_sm: (date) => {
    const today = new Date(date);
    return today.toLocaleDateString('en-us', {
      day: '2-digit',
      month: '2-digit',
    });
  },
  format_date: (date) => {
    const today = new Date(date);
    return today.toLocaleDateString('en-us', { dateStyle: 'long' });
  },
  format_date_lg: (date) => {
    const today = new Date(date);
    return `${today.toLocaleDateString('en-us', {
      dateStyle: 'long',
    })} ${today.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  },
  format_body: (body) => {
    return body.slice(0, 100).concat('...');
  },
  format_body_random: (body) => {
    return body
      .slice(0, Math.ceil(Math.max(Math.random() * 120, 75)))
      .concat('...');
  },
  prev_page: (page) => {
    return parseInt(page) - 1;
  },
  next_page: (page) => {
    return parseInt(page) + 1;
  },
};

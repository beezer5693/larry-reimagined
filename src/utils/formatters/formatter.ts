function currencyFormatter(amount: string): string {
  return amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function phoneNumberFormatter(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "($1)-$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(\d{4})(\d)/, "$1");
}

function dateFormatter(date: Date) {
  const eventDate = new Date(date);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [{ value: month }, , { value: day }, , { value: year }] =
    dateFormatter.formatToParts(eventDate);
  return `${month} ${+day + 1}, ${year}`;
}

export { currencyFormatter, phoneNumberFormatter, dateFormatter };

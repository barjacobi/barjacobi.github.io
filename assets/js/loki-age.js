(() => {
  const ageLine = document.querySelector('[data-loki-birthday]');
  if (!ageLine) return;

  const [year, month, day] = ageLine.dataset.lokiBirthday.split('-').map(Number);
  const updateAge = () => {
    const today = new Date();
    const beforeBirthday = today.getMonth() + 1 < month ||
      (today.getMonth() + 1 === month && today.getDate() < day);
    ageLine.querySelector('[data-loki-age]').textContent =
      String(Math.max(0, today.getFullYear() - year - Number(beforeBirthday)));
  };

  updateAge();
  // Refresh even if this tab stays open across her birthday.
  setInterval(updateAge, 60 * 1000);
  document.addEventListener('visibilitychange', updateAge);
})();

if (key === 'all' || bag.includes(key)) {
  item.classList.remove('is-hidden');
} else {
  item.classList.add('is-hidden');
}
